import Image from "next/image";
import Logo from "@/images/Screenshot 2024-06-21 182323.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="">
      <section>
        <div>
          <Image src={Logo} height={250} width={240} alt={"Lgo"}/>
          <Button>
            <Link href="/stories"> Explore Story Library </Link>
          </Button>
        </div>

      </section>
    </main>
  );
}
