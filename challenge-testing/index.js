class carrito_de_compras{
    constructor(){
        this.arr = [];
    }
    
    agregarProducto(producto){
        this.arr.push(producto);
    }

    calcularTotal(){
        var total = 0;

        for(let i = 0; i < this.arr.length - 1; i++){
            total += this.arr[i].price;
        }

        return total;
    }

    aplicarDescuento(porcentaje){
        const descuento_total = (total * porcentaje) / 100;
    }

}

module.exports = carrito_de_compras;