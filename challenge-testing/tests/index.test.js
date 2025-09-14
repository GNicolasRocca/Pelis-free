const carrito_de_compras = require("../index");

describe("Carrito de compras activo", () => {
    let carrito = new carrito_de_compras();

    it("Revisamos que carrito exista", () => {
        expect(typeof carrito_de_compras).toBe("object");
    })
        
    it("Comprobamos que el carrito_de_compras tenga un array vacio", () => {
        expect(carrito_de_compras.arr).toEqual([]);
    })

    

})



