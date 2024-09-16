import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/shared/ui/card";
import { User } from "../model/user.model";
import { LogoutButton } from "@/features/auth";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardTitle>{user.email}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{user.id}</CardDescription>
      </CardContent>
      <CardFooter>
        <LogoutButton>Logout</LogoutButton>
      </CardFooter>
    </Card>
  );
}
