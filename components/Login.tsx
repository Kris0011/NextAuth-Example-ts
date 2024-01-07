"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

export default function Login({}: Props) {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>(null);

  const toggleLogin = async () => {
    console.log("Login button clicked");
    if (!session) {
      await signIn("google");
    } else {
      await signOut();
    }
  };

  useEffect(() => {
    if (session && session.user) {
      setUser(session.user as any);
      console.log(session.user)
    } else {
      setUser(null);
    }
  }, [session]);
  return (
    <div className="m-10">
      <button onClick={toggleLogin} className="bg-white text-black p-2">
        {session ? "Logout" : "Login"}
      </button>
      {user && (
        <div>
          <h1>Logged in as {user.email}</h1>
          <p>Full name: {user.name}</p>
          <Image src={user.image} alt={user.name} width={100} height={100} />
        </div>
      )}
    </div>
  );
}
