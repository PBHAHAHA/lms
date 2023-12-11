"use client"
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
    const pathname = usePathname()
    const router = useRouter()

    const isManager = pathname?.startsWith("/manager")
    const isUser = pathname?.startsWith("/user")
    return ( 
        <div className="flex gap-x-2">
            {
                isManager || isUser ? (
                    <Button>
                        <LogOut className="w-4 h-4" />
                        退出登录
                    </Button>
                ) : (
                    <Link href="/manager/posts">
                        <Button size="sm" variant="ghost">登录</Button>
                    </Link>
                )
            }
            {/* <Button size={satisfies,}></Button> */}
        </div>
    );
}
 
export default NavbarRoutes;