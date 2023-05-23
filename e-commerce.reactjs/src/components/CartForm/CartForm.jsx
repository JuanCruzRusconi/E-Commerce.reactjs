import { Title } from "../Title/Title"


export const CartForm = ({generateOrder, dataForm, handleOnChange}) => {

    let title = "Formulario de compra"

    return (
        
        <div className="contenedorCartForm">

            <Title title={title}/>

            <form onSubmit={generateOrder}>

                <input type="text" name="nombre" onChange={handleOnChange} value={dataForm.nombre} placeholder="Ingrese su nombre" />
                <input type="text" name="telefono" onChange={handleOnChange} value={dataForm.telefono} placeholder="Ingrese su numero de telefono" />
                <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese su email" />
                <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Vuelva a ingresar su email" />

                <button>Generar orden</button>
            </form>
            
        </div>

    )
}