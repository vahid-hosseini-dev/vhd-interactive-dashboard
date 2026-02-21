"use client";
import { useState, useEffect } from "react";
import { Users } from "@/src/types/users.types";

export function useUsers() {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        if (isMounted) setUsers(data.users);
      } catch (err) {
        console.error(err);
        if (isMounted) setError("Failed to fetch users");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  return { users, loading, error };
}
