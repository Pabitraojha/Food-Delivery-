import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Heart } from 'lucide-react';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between mx-10 p-10 py-4 shadow-md bg-white sticky top-0">
        {/*logo section*/}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt=""
            className="h-12 w-32 object-contain"
          />
          <p className="text-sm text-gray-500">Fast delivery. 20-35 min</p>
        </div >
        <div className="flex items-center gap-8">
          {/* wish-list  */}
          <div className="cursor-pointer">
              <Heart/>
            </div>
          {/*search section*/}
          <div className="flex gap-2 items-center w-80 px-4 py-2 rounded-full border border-gray-300 focus-within:border-orange-500 transition">
            
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search menu..."
              className="w-full border-none outline-none text-sm
           "
            />
            <ArrowRight className="cursor-pointer " size={25} />
          </div>
          {/* cart section  */}
          <div className="flex cursor-pointer hover:scale-110 transition relative">
            <ShoppingCart className="" />
            <span className="absolute -top-1 -right-1  rounded-2xl h-4 w-4 bg-blue-900 text-white flex justify-center items-center ">3</span>
          </div>
          <div className="cursor-pointer flex justify-center items-center ">
             <CircleUserRound size={25} color="blue" />
             <span>User</span>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
