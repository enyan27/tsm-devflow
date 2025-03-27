import { ReactNode } from "react"

import Navbar from "@/components/navigation/navbar"
import SocialAuthForm from "@/components/forms/SocialAuthForm"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}

export default RootLayout