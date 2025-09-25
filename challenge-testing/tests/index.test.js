const CarritoCompra = require("../index");

describe("Carrito de compras activo", () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    it("Comprobamos que carrito exista", () => {
        expect(typeof CarritoCompra).toBe("function");
    })

    it("Comprobamos que el CarritoCompra tenga un array vacio", () => {
        expect(carrito.carro).toEqual([]);
    })


    it("Comprobamos agregarProducto que exista", () => {
        expect(carrito.agregarProducto).toBeDefined();
    })

    it("Comprobamos que agregarProducto pueda recibir un objeto representando un producto y lo agrega al carrito", () => {
        // Le agregamos un producto para comprobar que funcione bien metodo
        const arroz = {
            product: "Arroz",
            price: 20
        }

        carrito.agregarProducto(arroz);

        expect(carrito.carro.length).toBeGreaterThan(0);
    })
        
   
    it("Comprobamos que calcularTotal exista",
    () => {
        expect(carrito.calcularTotal).toBeDefined();
    })

    it("Y que calcule el total de la compra sumando los precios de todos los productos en el carrito", () => {
        // Le agregamos productos mas para comprobar que funcione bien el metodo de suma
        const fideos = {
            product: "Fideos",
            price: 15
        }

        const manteca = {
            product: "Manteca",
            price: 25
        }

        carrito.agregarProducto(fideos);
        carrito.agregarProducto(manteca);

        console.log(carrito.carro);
        console.log(carrito.calcularTotal());
        
        expect(carrito.calcularTotal()).toBe(40);
    })
        

    it("Comprobamos que aplicarDescuento exista",
    () => {
        expect(carrito.aplicarDescuento).toBeDefined();
    })
    
    it("Comprobamos que aplicarDescuento aplica un descuento al total de la compra según el porcentaje especificado", 
    () => {

        // Copiamos los productos del test anterior
        const fideos = {
            product: "Fideos",
            price: 15
        }

        const manteca = {
            product: "Manteca",
            price: 25
        }

        carrito.agregarProducto(fideos);
        carrito.agregarProducto(manteca);


        expect(carrito.aplicarDescuento(50)).toBe(20);
    })
})



