class CarritoCompra{
    constructor(){
        this.carro = [];
    }
    
    agregarProducto(producto){
        this.carro.push(producto);
    }

    calcularTotal(){
        let total = 0;

        for(let i = 0; i < this.carro.length; i++){
         total += this.carro[i].price;
        }

        return total;
    }

    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();

        return total * (1 - porcentaje / 100);
    }

}

module.exports = CarritoCompra;

// npm test en la consola para poder iniciar el test