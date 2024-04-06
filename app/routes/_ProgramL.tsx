import {  Outlet } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";
import { info } from "~/utils/info";

export default function ProgramLayout() {
  return (
    <>
      <header className="px-16 md:mx-auto container  py-4">
        <Navbar />
      </header>

      <Outlet />

      <footer className="flex items-center justify-around">
        <p className="bg-black w-full text-sm md:text-base xl:w-1/4 text-white flex justify-end  items-center p-4">
        {info.radio_name}. Todos los derechos reservados.
        </p>
        
        <p className="text-white">Aviso de privacidad</p>

      </footer>
    </>
  );
}
