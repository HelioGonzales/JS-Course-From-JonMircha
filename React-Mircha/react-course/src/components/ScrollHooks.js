import React, { useState, useEffect } from "react";

export default function ScrcollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // console.log("Moviendo el scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      // console.log("Fase de Desmontaje");
    };
  }, [scrollY]);

  useEffect(() => {
    // console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    // console.log("Fase de actualizacion");
  });

  useEffect(() => {
    // console.log("Fase de Desmontaje");
    return () => {};
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}</p>
    </>
  );
}
