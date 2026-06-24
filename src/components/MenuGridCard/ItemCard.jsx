import { IndianRupee } from "lucide-react";
import { Plus } from "lucide-react";

function ItemCard(props) {
  return (

    <div className="w-full max-w-xs rounded-2xl bg-[#30302e] text-white overflow-hidden hover:border hover:border-amber-500 transition-all">
      {/* Image */}
      <div className="aspect-video w-full">
        <img
          src={props.img}
          alt={props.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="bg-blue-100 text-black text-sm px-3 py-1 rounded-full">
          Popular
        </span>

        <h2 className="text-lg font-semibold mt-3">{props.name}</h2>

        <p className="text-gray-300 text-sm mt-2 line-clamp-2">{props.about}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="flex items-center gap-1">
            <IndianRupee size={14} />
            {props.price}/plate
          </span>

          <button className="h-8 w-8 rounded-full bg-violet-400 flex items-center justify-center cursor-pointer hover:scale-110 transition">
            <Plus color="black" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemCard;
