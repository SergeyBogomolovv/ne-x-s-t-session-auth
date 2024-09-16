import { LoginForm } from "@/features/auth";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex-1 w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <LoginForm />
      </div>
      <div className="hidden bg-muted lg:flex items-center justify-center">
        <Image
          src={"/login.svg"}
          alt="Image"
          width="600"
          height="600"
          className="dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
