import NextAuth from "next-auth/next";
import  GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async session ( { session}){
            return session;
        },
        async signIn( { user, account, profile, email, credentials}){
    
    
            return true;    
        },
    },
})

export default handler;