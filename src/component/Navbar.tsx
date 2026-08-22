import {Moon , ChevronDown} from "lucide-react";

import logo from "../assets/logo-DenxwkUa.svg";

const Navbar = () => {
  return (
    
   <nav className="flex items-center justify-between px-6 py-4  ">
    <img className="w-28" src={logo} alt="blogify logo"/>

   

<button type="button" className="  ">
<Moon size={20} />
</button>
<button type="button" className="flex items-center gap-1 rounded-3xl border border-gray-300 px-4 py-2 text-sm font-medium bg-black text-white text-center ">
 <span>Dashboard</span>   
   <ChevronDown size={16} />
</button>


   </nav>

  );
};

export default Navbar;