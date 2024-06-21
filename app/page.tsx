import Image from "next/image";
import Logo from "@/images/Screenshot 2024-06-21 182323.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="">
      <section>
        <div>
          <Image src={Logo} height={250} width={240} alt={"Lgo"} className="rounded-md"/>
          <Button asChild className="px-20 bg-sky-500">
            <Link href="/stories"> Explore Story Library </Link>
          </Button>
        </div>

      </section>
    </main>
  );
}
