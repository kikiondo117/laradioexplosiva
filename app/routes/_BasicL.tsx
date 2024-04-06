import {  Outlet } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";
import { info } from "~/utils/info";


export default function HomeLayout() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="px-16 md:mx-auto container">
        <header className="py-4">
          <Navbar />
        </header>

        <Outlet />
      </div>

      <footer className="flex justify-around h-16">
        <p className="bg-black w-full text-sm md:text-base xl:w-1/4 text-white flex justify-end  items-center p-4">
        {info.radio_name}. Todos los derechos reservados.
        </p>

        <p>Aviso de privacidad</p>

      </footer>
    </div>
  );
}
