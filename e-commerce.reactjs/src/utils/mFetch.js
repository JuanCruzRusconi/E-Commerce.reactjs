let productos = [
    {id: "1", categoria: "stanley", nombre: "Botellas", color: "Blanco", precio: 20000, stock: 20},
    {id: "10", categoria: "apple", nombre: "Iphone 14 Pro", color:  "Gris espacial", precio: 418000, stock: 20},
    {id: "11", categoria: "apple", nombre: "Iphone 14 Pro Max", color:  "Blanco", precio: 456000, stock: 20},
    {id: "12", categoria: "apple", nombre: "Iphone 14", color:  "Amarillo", precio: 342000, stock: 20},
    {id: "13", categoria: "apple", nombre: "Iphone 14 Plus", color:  "Amarillo", precio: 380000, stock: 20}
]

export const mFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 1000)
    })
}