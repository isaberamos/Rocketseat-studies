// Estrutural

/*let altura = 50
let largura = 60

function calcularArea() {
    return largura * altura
}

let area = calcularArea()*/


// Orientado a Objetos
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

// Instancia o objeto
let poligono = new Poligono(50,60)
console.log(poligono.area)


class Veiculo {
    roda = 4

    mover(direcao){}
    virar(direcao){}
    }

    class Moto extends Veiculo {
        constructor() {
            super()
            this.rodas = 2
        }
    }


class Atleta {
    peso;
    categoria;

    constructor() {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = "infantil"
        }
        else if (this.peso <= 65) {
            this.categoria = "juvenil"
        }
        else {
            this.categoria = "adulto"
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = "pluma"
        }
        else if (this.peso <= 60) {
            this.categoria = "leve"
        }
        else if (this.peso <= 75) {
            this.categoria = "meio-leve"
        }
        else {
            this.categoria = "pesado"
        }
    }
}