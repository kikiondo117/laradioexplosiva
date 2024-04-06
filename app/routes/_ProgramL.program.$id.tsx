import type { ProgramType } from "~/types/program";

import { redirect, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "react-router";
import { programas } from "~/utils/programacion";
import { Post } from "~/components/Post/Post";

export default function Programa() {
  const program: ProgramType = useLoaderData() as ProgramType;

  return (
    <div>
      <h1 className="flex justify-center text-white p-4 text-4xl font-light my-8 md:my-24  md:text-6xl ">
        {program.nombre}
      </h1>

      <main className="p-8 flex flex-wrap rounded-md bg-white min-h-screen h-fit py-16 justify-center gap-8">
        <div>
          <div
            className={`${program.image} w-full bg-center bg-no-repeat h-96 mx-auto`}
          />

          <p className=" max-w-lg mx-auto mt-4 font-extralight">
            Todos los días, de <strong>{program.hora}</strong> , tienes una cita
            con <strong>{program.locutor}</strong>.{program.bio} . Puedes
            escuchar el programa en <strong>Radio Hill's</strong>
          </p>
        </div>
      </main>


    </div>
  );
}

export const loader: LoaderFunction = ({ params }) => {
  const id = params.id;
  if (id) {
    const program = programas.find((programa) => programa.id === +id);

    return program ? program : redirect("/");
  }

  return redirect("/");
};
