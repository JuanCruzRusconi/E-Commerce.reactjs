import Formulario from "../Formulario/Formulario"
import { Titulo } from "../Titulo/Titulo"

export const ItemListContainer = () => {
    return(
        <section className="itemListContainer">
            <Titulo titulo="Soy ItemListContainer!" subtitulo="Tengo adentro a Formulario" />
            <Formulario />
        </section>
    )
}