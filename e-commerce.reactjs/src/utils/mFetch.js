let productos = [
    {id: 1, nombre: "Botellas", color: "Blanco", precio: 20000, stock: 20},
    {id: 10,nombre: "Iphone 14 Pro", color:  "Gris espacial", precio: 418000, stock: 20},
    {id: 10,nombre: "Iphone 14 Pro Max", color:  "Blanco", precio: 456000, stock: 20},
    {id: 10,nombre: "Iphone 14", color:  "Amarillo", precio: 342000, stock: 20},
    {id: 10,nombre: "Iphone 14 Plus", color:  "Amarillo", precio: 380000, stock: 20}
]

export const mFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 2000)
    })
}