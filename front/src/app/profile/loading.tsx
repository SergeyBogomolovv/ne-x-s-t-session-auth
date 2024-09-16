import { UserSkeletonCard } from "@/entities/user";

export default function LoadingProfilePage() {
  return (
    <section className="flex-1 flex items-center justify-center">
      <UserSkeletonCard />
    </section>
  );
}
