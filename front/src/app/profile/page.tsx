import { getUser, UserCard } from "@/entities/user";

export default async function ProfilePage() {
  const user = await getUser();
  return (
    <section className="flex-1 flex items-center justify-center">
      {user ? (
        <UserCard user={user} />
      ) : (
        <h1 className="text-4xl font-bold">Something went wrong</h1>
      )}
    </section>
  );
}
