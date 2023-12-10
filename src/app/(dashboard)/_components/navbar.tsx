import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
    return ( 
        <div className="h-full p-4 border-b w-full flex items-center bg-white shadow-sm z-50">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
     );
}
 
export default Navbar;