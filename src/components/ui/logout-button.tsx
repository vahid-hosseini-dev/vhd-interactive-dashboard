"use client";

import { Button } from "@chakra-ui/react";
import { LogOutIcon } from "lucide-react";
import toast from "react-hot-toast";

export const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/login";
      toast.success("Logged out successfully");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <Button colorPalette="red" size="sm" onClick={handleLogout}>
      <LogOutIcon />
      Logout
    </Button>
  );
};
