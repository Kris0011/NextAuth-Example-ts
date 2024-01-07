import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Login from "@/components/Login";

export default function Home() {
  

  return (
    <div className="px-24 py-20 flex flex-col justify-center ">
      <h1 className="text-3xl">This is the template for Next-Auth</h1>
      <p className="text-md">
        You can use this template to quickly get started with Next-Auth and
        Typescript. </p>
    
      <Login/>

    </div>
  );
}
