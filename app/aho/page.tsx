import ContentHeader from "@/components/ContentHeader";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

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

const links = [
   "https://cloud-api.yandex.net/v1/disk/resources?path=%2Faho restaurant&fields=name,_embedded.items.sizes,_embedded.items.name,_embedded.items.resource_id",
   "https://cloud-api.yandex.net/v1/disk/resources/download?path=%2Faho restaurant",
];

export default async function AhoPage() {
   const requests = links.map((link) =>
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
   const { name } = photoData;
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

   return (
      <div className="wrapper">
         <Header />
         <main>
            <section className="pt-[9.375rem] md:pt-[12.375rem]">
               <div className="container">
                  <ContentHeader title={name} downloadLink={downloadObj.href} />
                  <Gallery photos={photos} />
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
