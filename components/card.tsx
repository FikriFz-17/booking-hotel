import Image from "next/image";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
      <div className="bg-white shadow-lg rounded-sm hover:shadow-xl transition-shadow duration-300 w-[350px]">
        {/* Image Section */}
        <div className="relative h-[260px] w-full rounded-t-sm overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="room-image"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-gray-800">Luxury Room</h4>
          <p className="text-amber-600 font-bold">
            Rp 210.000 <span className="text-gray-500 font-normal">/Night</span>
          </p>
        </div>

        {/* Footer Section */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <div className="flex items-center text-gray-600 gap-1">
            <IoPeopleOutline size={20} />
            <span>2 Guests</span>
          </div>
          <button className="bg-amber-600 text-white text-sm px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
  );
};

export default Card;
