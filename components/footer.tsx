import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white p-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col">
          <Link href="/">
            <Image src="/logo.png" width={128} height={35} alt="logo" priority />
          </Link>
          <p className="mt-2 text-gray-400 text-sm text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
    
        {/* Links Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-orange-400">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-400">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400">Contact</Link>
            </li>
            <li>
              <Link href="/room" className="hover:text-orange-400">Room</Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <p className="hover:text-orange-400">Legal</p>
            </li>
            <li>
              <p className="hover:text-orange-400">Terms & Conditions</p>
            </li>
            <li>
              <p className="hover:text-orange-400">Payment Method</p>
            </li>
            <li>
              <p className="hover:text-orange-400">Privacy Policy</p>
            </li>
          </ul>
        </div>

        {/* Subscription Form */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <form action="" className="flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-black bg-white"
            />
            <button
              type="submit"
              className="bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8">
        <hr />
        <p>&copy; 2025 Your Website. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
