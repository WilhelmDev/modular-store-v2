"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSupabase } from "@/hooks/useSupabase";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
const LoginForm = dynamic(() => import("@/components/auth/LoginForm"), { ssr: false });

export default function Home() {
  const router = useRouter();
  const { checkUser } = useSupabase()

  const checkUserStatus = async () => {
    try {
      await checkUser();
      router.push(ROUTES.DASHBOARD);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.log(error)
      }
    }
  }
  useEffect(() => {
    checkUserStatus()
  }, [])
  
  return (
    <main className=" flex justify-center items-center w-full h-full min-h-screen">
      <LoginForm />
    </main>
  );
}
