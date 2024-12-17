import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Anonces from "./Anonces";

export default function page() {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Hero />
            <section>
               <div className="container">
                  <Breadcrumb className="mb-10 sm:mb-[3.5625rem]">
                     <BreadcrumbList className="uppercase text-black sm:text-base">
                        <BreadcrumbItem>
                           <BreadcrumbLink
                              href="/"
                              className="font-bold hover:underline"
                           >
                              главная страница
                           </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                           <BreadcrumbPage className="font-bold">
                              анонсы
                           </BreadcrumbPage>
                        </BreadcrumbItem>
                     </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className="mb-4 text-2xl font-bold uppercase sm:mb-[2.125rem] sm:text-5xl">
                     анонсы
                  </h1>
                  <Separator className="mb-10 bg-black sm:mb-16" />
                  <Anonces />
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
