import { Hero } from "@/components/sections/Hero";
import { Especialidades } from "@/components/sections/Especialidades";
import { PorQueElegirnos } from "@/components/sections/PorQueElegirnos";
import { Servicios } from "@/components/sections/Servicios";
import { Equipo } from "@/components/sections/Equipo";
import { Testimonios } from "@/components/sections/Testimonios";
import { Tarifas } from "@/components/sections/Tarifas";
import { FAQ } from "@/components/sections/FAQ";
import { Contacto } from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Especialidades />
      <PorQueElegirnos />
      <Servicios />
      <Equipo />
      <Testimonios />
      <Tarifas />
      <FAQ />
      <Contacto />
    </>
  );
}
