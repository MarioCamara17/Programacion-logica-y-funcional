const Usuarios = [
    {nombre:'Ana', edad: 25, rol: 'admin', activo: true},
    {nombre:'Carlos', edad: 17, rol: 'user', activo: true},
    {nombre:'Beto', edad: 30, rol: 'user', activo: false}
]

//reglas

const envioaDeshabilitado = (usuario) => usuario.activo === false;

const accesoPermitido = (usuario) => usuario.edad >= 18 && usuario.activo === true;

const usuarioEspecial = (usuario) => usuario.rol === 'admin' && usuario.edad < 18;

const permisosEdicion = (usuario) => usuario.activo === true && (usuario.edad > 18 || usuario.rol === 'admin');

//consultas

const usuariosEnvioDeshabilitado = Usuarios.filter(envioaDeshabilitado).map(usuario => usuario.nombre);
console.log(usuariosEnvioDeshabilitado);

const usuariosAccesoPermitido = Usuarios.filter(accesoPermitido).map(usuario => usuario.nombre);
console.log(usuariosAccesoPermitido);

const usuariosEspeciales = Usuarios.filter(usuarioEspecial).map(usuario => usuario.nombre);
console.log(usuariosEspeciales);

const usuariosPermisosEdicion = Usuarios.filter(permisosEdicion).map(usuario => usuario.nombre);
console.log(usuariosPermisosEdicion);