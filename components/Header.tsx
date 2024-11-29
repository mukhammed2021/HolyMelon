import Image from "next/image";
import Link from "next/link";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export default function Header() {
   return (
      <header>
         <div className="container">
            <div>
               <Logo />
            </div>
            <nav></nav>
            <div></div>
         </div>
      </header>
   );
}

function Logo() {
   return (
      <Link href="/">
         <Image src="/logo.png" width={120} height={74} alt="логотип" />
      </Link>
   );
}
