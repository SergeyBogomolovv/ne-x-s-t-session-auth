import { Button } from "@/shared/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-1 w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12 px-6">
        <div className="flex flex-col justify-between gap-16">
          <h1 className="md:text-6xl text-4xl font-extrabold">
            Welcome to Auth
          </h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab
            magnam velit maxime esse. Veniam incidunt voluptatem, minima iste
            quo amet. Asperiores assumenda cumque aspernatur dignissimos
            incidunt illum doloribus optio?
          </p>
          <Link href="/profile">
            <Button className="w-fit" size="lg">
              Go to profile
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden bg-muted lg:flex items-center justify-center">
        <Image
          src={"/main.svg"}
          alt="Image"
          width="500"
          height="500"
          className="dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
