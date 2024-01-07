"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";


type Props = {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    return (
        <SessionProvider session={null}>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider;