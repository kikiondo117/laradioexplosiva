import { Link } from "@remix-run/react";

export function Navbar() {
  return (
    <nav className="bg-transparent flex flex-wrap gap-4  justify-between items-center">
      <Link to="/" className="flex gap-2">
        <img src="/img/logo.jpeg" alt="Radio chilanga" className=" w-20 h-20 rounded-full" />
        {/* <img src="/img/icons/muerto.png" alt="" className=" w-12 h-12" /> */}
      </Link>

      <ul className="ml-auto md:m-0 flex gap-1">
        <li className="bg-white hover:bg-gray-300 transition-all ease-in-out duration-300">
          <Link className="p-4" to="/">
            Programas
          </Link>
        </li>
      </ul>
    </nav>
  );
}
