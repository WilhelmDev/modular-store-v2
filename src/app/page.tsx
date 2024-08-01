import Image from "next/image";
import dynamic from "next/dynamic";
const LoginForm = dynamic(() => import("@/components/auth/LoginForm"), { ssr: false });

export default function Home() {
  return (
    <main className=" flex justify-center items-center w-full h-full min-h-screen">
      <LoginForm />
    </main>
  );
}
