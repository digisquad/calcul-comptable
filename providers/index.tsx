import ThemeProvider from "@/providers/theme/theme-provider"
import type { PropsWithChildren } from "react"

/*
    Providers: to be used to add all root level providers
    (e.g. Theme, ReactQuery, I18n, StrictMode, Snackbar, )
 */
const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
