"use client";

import { Button } from "@chakra-ui/react";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/login";
      toast.success("Logged out successfully");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      colorPalette="red"
      size="sm"
      onClick={handleLogout}
      loading={isLoading}
      loadingText="Logging Out"
      spinnerPlacement="end"
    >
      <LogOutIcon />
      Logout
    </Button>
  );
};
