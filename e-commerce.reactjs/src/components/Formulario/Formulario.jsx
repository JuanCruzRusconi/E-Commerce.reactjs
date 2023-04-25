import { useState } from "react"
import { Titulo } from "../Titulo/Titulo"

const handleOnSubmit = (evt) => {
  evt.preventDefault()
  console.log("enviado")
}

const handleOnChange = (evt) => {
  setFormData ({
    ...formData, 
    [evt.target.name]: evt.target.value
  })

}

export function Formulario (){

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  let titulo = "Formulario"
  let subtitulo = "Datos"

  return (
    <section className="formulario">

      <Titulo titulo={titulo} subtitulo={subtitulo} />
      <form onSubmit={handleOnSubmit}>
        <input type='text' name='name' placeholder='Ingrese su nombre' onChange={handleOnChange} value={formData.name} />
        <input type='text' name='email' placeholder='Ingrese su ciudad' onChange={handleOnChange} value={formData.email} />
        <button>Enviar</button>
      </form>
    </section>
  )
}
