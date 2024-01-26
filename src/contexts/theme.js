import { createContext,useContext } from "react"
export const ThemeContext=createContext({
    themeMode:"dark",
    darkTheme:()=>{},
    lightTheme:()=>{}
})
// Global Object creation from createContext
export const ThemeProvider= ThemeContext.Provider
// Provider
export default function useTheme(){
    return useContext(ThemeContext)
    // putting global object values to Custom Hook
}
// UseContext