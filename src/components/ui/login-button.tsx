"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const HandleLogin = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      router.push("/login");
      toast.success("Ridirecting to Login Page ...");
    } catch (err) {
      console.log(err);
      toast.error("login failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      colorPalette="blue"
      size="sm"
      loading={isLoading}
      loadingText="Logging In"
      spinnerPlacement="end"
      onClick={HandleLogin}
    >
      Login
    </Button>
  );
}
