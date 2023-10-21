import getCurrentUser from "@/actions/getCurrentUser";
import SideNavbar from "../components/navbar/SideNavbar";
import { redirect } from "next/navigation";


type layoutProps = {
    children: React.ReactNode;
}
const layout = async ({ children }: layoutProps) => {

    const session = await getCurrentUser()

    if (!session) {
        redirect('/login')
    }

    return (
        <div className="flex">
            <SideNavbar user={session} />
            {children}
        </div>
    )
}

export default layout