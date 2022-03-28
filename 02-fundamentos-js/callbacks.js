const getUserByID = (id, callback) => {
  const usuario = {
    id, //En ES6 escribir id: id es redundante.
    nombre: 'Martín',
  };

  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

getUserByID(19, (usuario) => {
  console.log(usuario);
});
