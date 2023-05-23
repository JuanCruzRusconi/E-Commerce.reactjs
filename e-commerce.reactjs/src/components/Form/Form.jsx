import { useState } from "react"
import { Title } from "../Title/Title"

export function Form (){

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleOnSubmit = (evt) => {
    evt.preventDefault()
    console.log(`Datos enviados: ${formData.name}, ${formData.email}`)
  }
  
  const handleOnChange = (evt) => {
    setFormData ({
      ...formData, 
      [evt.target.name]: evt.target.value
    })
  }

  let title = "Formulario de contacto"
  let text = "Rellene el formulario de contacto a continuación para que podeamos ponernos en contacto con usted."

  return (

    <section className="contenedorForm">

      <Title title={title} text={text} />
      <form onSubmit={handleOnSubmit}>
        <input type='text' name='name' placeholder='Ingrese su nombre' onChange={handleOnChange} value={formData.name} />
        <input type='text' name='email' placeholder='Ingrese su ciudad' onChange={handleOnChange} value={formData.email} />

        <button>Enviar</button>
      </form>

    </section>

  )
}
