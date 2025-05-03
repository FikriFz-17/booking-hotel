"use client"

import { useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import clsx from "clsx"
import Link from "next/link"

const Navlink = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 transition-colors duration-300"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-orange-500 relative md:after:absolute md:after:w-0 md:after:h-0.5 md:after:bottom-[-4px] md:after:left-0 md:hover:after:w-full md:after:bg-orange-400 md:after:transition-all md:after:duration-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-orange-500 relative md:after:absolute md:after:w-0 md:after:h-0.5 md:after:bottom-[-4px] md:after:left-0 md:hover:after:w-full md:after:bg-orange-400 md:after:transition-all md:after:duration-300 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-orange-500 relative md:after:absolute md:after:w-0 md:after:h-0.5 md:after:bottom-[-4px] md:after:left-0 md:hover:after:w-full md:after:bg-orange-400 md:after:transition-all md:after:duration-300 transition-colors duration-300"
            >
              Room
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-orange-500 relative md:after:absolute md:after:w-0 md:after:h-0.5 md:after:bottom-[-4px] md:after:left-0 md:hover:after:w-full md:after:bg-orange-400 md:after:transition-all md:after:duration-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/myreservation"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-orange-500 relative md:after:absolute md:after:w-0 md:after:h-0.5 md:after:bottom-[-4px] md:after:left-0 md:hover:after:w-full md:after:bg-orange-400 md:after:transition-all md:after:duration-300 transition-colors duration-300"
            >
              My Reservation
            </Link>
          </li>
          <li>
            <Link
              href="/admin/dashboard"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-orange-500 relative md:after:absolute md:after:w-0 md:after:h-0.5 md:after:bottom-[-4px] md:after:left-0 md:hover:after:w-full md:after:bg-orange-400 md:after:transition-all md:after:duration-300 transition-colors duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/room"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0 md:hover:text-orange-500 relative md:after:absolute md:after:w-0 md:after:h-0.5 md:after:bottom-[-4px] md:after:left-0 md:hover:after:w-full md:after:bg-orange-400 md:after:transition-all md:after:duration-300 transition-colors duration-300"
            >
              Manage Room
            </Link>
          </li>
          <li className="pt-2 md:pt-0">
            <Link
              href="/signin"
              className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm transition-colors duration-300 hover:shadow-md"
            >
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navlink
