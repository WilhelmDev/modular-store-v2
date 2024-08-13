import { ContextSupabase, SupabaseContext } from "@/context/supabase"
import { useContext } from "react"

export const useSupabase = () => {
  return useContext(SupabaseContext) as ContextSupabase
}