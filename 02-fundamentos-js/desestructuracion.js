const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  getName: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

function imprimirHeroe(heroe) {
  const { nombre, apellido, poder } = heroe;
  console.log(nombre, apellido, poder);
}

imprimirHeroe(deadpool);
