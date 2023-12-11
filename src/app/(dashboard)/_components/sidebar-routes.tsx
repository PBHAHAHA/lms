'use client'
import {Layout, Compass, List, BookAudioIcon} from "lucide-react"
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";
const guestRoutes = [
    {
        icon: Layout,
        label: "控制台",
        href: "/"
    },
    {
        icon: Compass,
        label: "浏览",
        href: "/search"
    }
]

const managerRoutes = [
    {
        icon: List,
        label: "控制台",
        href: "/manager/main"
    },
    {
        icon: BookAudioIcon,
        label: "文章",
        href: "/manager/posts"
    }
]
const SidebarRoutes = () => {
    const pathname = usePathname()

    const isManager = pathname.startsWith("/manager")

    const routes = isManager ? managerRoutes : guestRoutes;

    return ( 
        <div className="flex flex-col w-full">
            {
                routes.map((route) => (
                    <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
                ))
            }
        </div>
     );
}
 
export default SidebarRoutes;