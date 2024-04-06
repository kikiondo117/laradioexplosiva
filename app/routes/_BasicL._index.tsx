import type { V2_MetaFunction } from "@remix-run/node";

// * Assets
import * as programming from "~/utils/programacion";

// * Custom Components
import { Player } from "~/components/Player/Player";
import { Section } from "~/components/Section/Section";
import { Host } from "~/components/Host/Host";
import { Post } from "~/components/Post/Post";
import { Link } from "@remix-run/react";
import {info} from '~/utils/info'

export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <section id="play" className="flex flex-col items-center gap-4 mt-12 md:h-screen md:gap-12 ">
        <img src="/img/logo.jpeg" alt="" className="h-40 md:h-96 md:w-96" />

        <div className="my-8 md:m-0">
          <Player />
        </div>
      </section>

      {/* ANCHOR Programas */}
      <section>
        <Section title="Nuestros programas" subtitle="de lunes a viernes" />

        <div className="flex flex-wrap  justify-center mb-12 md:justify-between mt-12 gap-12">
          {programming.programas.map((programa) => {
            return (
              <Link
                to={`/program/${programa.id}`}
                key={programa.locutor}
                className={`bg-gray-special rounded-sm w-96 h-64 md:w-[25em] capitalize 
                 cursor-pointer bg-center ${programa.image}`}
              >
                <div className="h-full flex flex-col justify-end hover:translate-y-9 transition-all ease-in-out">
                  <p className="text-red-500 bg-white w-fit px-4 py-2 ">
                    Lunes a viernes {programa.hora}
                  </p>

                  <p className="bg-gray-800 w-fit text-white p-4">
                    {programa.nombre}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ANCHOR Information */}
      <section className="flex flex-wrap justify-center gap-4 my-12 md:gap-0  md:justify-between md:my-40">
        <Post title={ info.radio_name}>
          <p>
          "La radio explosiva de la comarca lagunera: Donde las Voces Alcanzan Nuevas Alturas"
          </p>
        </Post>

        <Post title="CEO">
          <p>
        {info.radio_name}, nuestra pasión nos impulsa a ser los mejores de nuestra área. ¡Sintoniza y vive la diferencia!.
          </p>
        </Post>

        <Post title="¡Síguenos!">
          <a
            className="flex items-center gap-4"
            target={"blank"}
            // href="https://www.facebook.com/profile.php?id=61557904597920&mibextid=ZbWKwL"
          >
            <img
              className="w-8 h-8"
              src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
              alt="facebook"
            />
          </a>
        </Post>
      </section>
    </div>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title:  info.radio_name },
    { name: "description", content: `${info.radio_name}, nuestra pasión nos impulsa a ser los mejores de nuestra área. ¡Sintoniza y vive la diferencia!` },
  ];
};
