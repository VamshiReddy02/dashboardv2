import { ChevronRight, Bell, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-4 py-1 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Home</span>
        <ChevronRight size={16} />
        <span className="text-blue-600 font-semibold">Dashboard V2</span>
      </div>

      <div className="flex-1 max-w-md ml-70">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>

          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-1 bg-gray-100 rounded-md text-sm focus:outline-none"
          />
        </div>
      </div>


      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm cursor-pointer text-gray-700 hover:text-black">
          <span className="font-medium">User</span>
          <ChevronDown size={16} />
        </div>

        <Bell size={20} className="text-gray-500 hover:text-black cursor-pointer" />

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
