"use client";
import { Button, ButtonProps } from "@/shared/ui/button";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../api/logout";
import { toast } from "sonner";

export default function LogoutButton({ children, ...props }: ButtonProps) {
  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess() {
      toast.success("Logout success");
    },
    onError() {
      toast.error("Logout error");
    },
  });

  return (
    <Button
      disabled={isPending}
      variant="destructive"
      onClick={() => mutate()}
      {...props}
    >
      {children}
    </Button>
  );
}
