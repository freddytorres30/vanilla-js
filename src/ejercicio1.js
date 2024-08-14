let contador = {
  valor: 0,
  siguiente: function () {
    // Inserte el código aquí
    this.valor ++

    return this.valor
  },
};

console.log(contador.siguiente())