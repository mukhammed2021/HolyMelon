import Image from "next/image";

const members = [
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
   {
      id: crypto.randomUUID(),
      src: "/staff/portret.jpeg",
      fullName: "Павлова Анна Викторовна",
      position: "Менеджер ресторана",
   },
];

export default function Staff() {
   return (
      <section className="pb-24 pt-7 md:pb-48 md:pt-14">
         <div className="container">
            <h2 className="mb-14 text-3xl font-bold uppercase sm:text-[2.6875rem] md:mb-28">
               Сотрудники
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-x-6 gap-y-10 text-center min-[480px]:grid-cols-[repeat(auto-fit,minmax(20.625rem,1fr))] sm:gap-y-[4.5rem]">
               {members.map((member) => (
                  <div key={member.id}>
                     <div className="mb-[2.125rem]">
                        <Image
                           src={member.src}
                           width={417}
                           height={503}
                           className="aspect-[417/503] size-full rounded-[1.25rem]"
                           alt={member.fullName}
                        />
                     </div>
                     <h3 className="text-xl sm:text-[1.75rem]">
                        {member.fullName}
                     </h3>
                     <p className="text-lg sm:text-2xl">{member.position}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
