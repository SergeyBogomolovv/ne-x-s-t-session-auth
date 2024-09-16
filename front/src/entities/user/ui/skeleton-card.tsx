import { Card, CardHeader, CardContent, CardFooter } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

export default function UserSkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-36 h-4" />
        <Skeleton className="w-48 h-4" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        <Skeleton className="w-64 h-3" />
        <Skeleton className="w-64 h-3" />
        <Skeleton className="w-64 h-3" />
      </CardContent>
      <CardFooter>
        <Skeleton className="w-32 h-8"></Skeleton>
      </CardFooter>
    </Card>
  );
}
