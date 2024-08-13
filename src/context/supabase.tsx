'use client'
import { createClient } from "@/config/supabase/client";
import { createContext, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
export interface ContextSupabase {
  loginWithGoogle: () => Promise<{
    data: {
        provider: string;
        url: string;
    } | {
        provider: string;
        url: null;
    };
    error: any | null;
  }>
  checkUser: () => Promise<void>
}

const SupabaseContext = createContext<Partial<ContextSupabase>>({})

const SupabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const supabase = createClient()
  const router = useRouter()

  const loginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      }
    })
    return {
      data,
      error
    }
  }

  const checkUser = async () => {
    console.log("sdfdsd")
    const checkUser = await supabase.auth.getSession()
    if (checkUser.error) {
      console.log(checkUser.error)
      throw checkUser.error
    } else {
      // router.push(ROUTES.DASHBOARD)
      console.log(checkUser)
    }
  }

  return (
    <SupabaseContext.Provider value={{
      loginWithGoogle,
      checkUser
    }}> 
      {children}
    </SupabaseContext.Provider>
  )
}

export { SupabaseContext }
export default SupabaseProvider