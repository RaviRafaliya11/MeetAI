"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      { email, name, password },
      {
        onError: () => window.alert("Error"),
        onSuccess: () => {
          window.alert("success");
        },
      }
    );
  };

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  if (session) {
    return (
      <div>
        {session.user.name}
        <Button onClick={() => authClient.signOut()}>Logout</Button>
      </div>
    );
  }
  return (
    <div className="flex p-4 flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={() => onSubmit()}>Create User</Button>
    </div>
  );
}
