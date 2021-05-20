import React, { useState } from "react";

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setlenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El Formulario se ha enviado");
//   };

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre:</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elije tu sabor js favorito</p>
//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="">React</label>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//           defaultCheked
//         />
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           id="vuejs"
//           name="sabor"
//           value="vuejs"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vuejs">Vuejs</label>
//         <input
//           type="radio"
//           id="svelte"
//           name="sabor"
//           value="svelte"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="svelte">Svelte</label>
//         <p>Elije tu lenguaje de programacion favorito</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setlenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto terminos y condiciones</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El Formulario se ha enviado");
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elije tu sabor js favorito</p>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="">React</label>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vuejs"
          name="sabor"
          value="vuejs"
          onChange={handleChange}
        />
        <label htmlFor="vuejs">Vuejs</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Elije tu lenguaje de programacion favorito</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleCheked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
