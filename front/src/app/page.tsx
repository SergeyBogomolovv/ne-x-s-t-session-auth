import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/login">Login</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
}
