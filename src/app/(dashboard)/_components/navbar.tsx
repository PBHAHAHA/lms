import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";
import PageSearch from "./page-search";

const Navbar = () => {
    return ( 
        <div className="h-full p-4 border-b w-full flex items-center justify-between bg-white shadow-sm z-50">
            <MobileSidebar />
            <PageSearch />
            <NavbarRoutes />
        </div>
     );
}
 
export default Navbar;