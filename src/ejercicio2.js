class Contador {
  // Inserte el código aquí
  constructor(valor){
    this.valor=valor
  }
  aumentaContador(){
    this.valor++
    return `contador ${this.valor}`
  }
}

// Inserte el código aquí
const contador= new Contador(0)
console.log(contador.aumentaContador())

