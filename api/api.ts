interface Photo {
   name: string;
   resource_id: string;
   sizes: {
      name:
         | "ORIGINAL"
         | "DEFAULT"
         | "XXXS"
         | "XXS"
         | "XS"
         | "S"
         | "M"
         | "L"
         | "XL"
         | "XXL"
         | "XXXL"
         | "C";
      url: string;
   }[];
}

export async function getData(name: string) {
   const requests = [
      `https://cloud-api.yandex.net/v1/disk/resources?path=%2F${name}`,
      `https://cloud-api.yandex.net/v1/disk/resources/download?path=%2F${name}`,
   ].map((link) =>
      fetch(link, {
         method: "GET",
         headers: {
            Authorization:
               "OAuth y0_AgAAAABzwdumAAzHJgAAAAEYcHj8AACXxLtd2hhN2Ki9GL22341umiQBsg",
         },
      }).then((res) => res.json()),
   );

   const data = await Promise.all(requests);
   const [photoData, downloadObj] = data;

   // title
   const { name: title } = photoData;
   // Дата
   const { created } = photoData;
   // Фото
   const { items } = photoData._embedded;
   const photos = items.flatMap((photo: Photo) => {
      return {
         id: photo.resource_id,
         name: photo.name,
         url: photo.sizes
            .filter((size) => size.name === "ORIGINAL")
            .map((src) => src.url)[0],
      };
   });

   return { title, created, photos, downloadObj };
}
