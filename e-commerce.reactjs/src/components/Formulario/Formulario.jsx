import { Titulo } from "../Titulo/Titulo"

const Formulario = () => {
  let titulo = "Formulario"
  let subtitulo = "Datos"
    return(
      <section className="formulario">

        <Titulo titulo={titulo} subtitulo={subtitulo}/>
        <form>
          <input type='text' name='name' placeholder='Ingrese su nombre' />
        </form>
      </section>
    )
  }

export default Formulario  