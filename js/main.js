const tarjetas = document.getElementById("tarjetaContenedor")
let carrito = [];

productos.forEach((producto) => {
let container= document.createElement("div");
container.innerHTML= `
<img class= "p-img" src= "${producto.img}">
<h3 class= "p-nombre">  ${producto.nombre} </h3>
<p class= "p-precio"> $ ${producto.precio} </p>
`;
container.className= "p-container";

tarjetas.append(container);

let comprar= document.createElement("button");
comprar.innerText= "comprar";
comprar.className= "p-comprar";
container.append(comprar);

comprar.addEventListener("click", ()=> {
    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        img: producto.img
    })
    console.log(carrito)
})
});


