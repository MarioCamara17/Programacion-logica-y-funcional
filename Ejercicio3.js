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

//combinacion de hechos en consultas

const usuariosAccesoYEdicion = Usuarios.filter(usuario => accesoPermitido(usuario) && permisosEdicion(usuario)).map(usuario => usuario.nombre);
console.log("Usuarios con acceso permitido Y permisos de edición:", usuariosAccesoYEdicion);

const usuariosEspecialesODeshabilitados = Usuarios.filter(usuario => usuarioEspecial(usuario) || envioaDeshabilitado(usuario)).map(usuario => usuario.nombre);
console.log("Usuarios especiales O deshabilitados:", usuariosEspecialesODeshabilitados);

const usuariosActivos = Usuarios.filter(usuario => usuario.activo === true).map(usuario => usuario.nombre);
console.log("Usuarios activos:", usuariosActivos);

const usuariosAdminActivos = Usuarios.filter(usuario => usuario.rol === 'admin' && usuario.activo === true).map(usuario => usuario.nombre);
console.log("Usuarios admin activos:", usuariosAdminActivos);

const usuariosMayoresDeEdad = Usuarios.filter(usuario => usuario.edad >= 18 && usuario.activo === true).map(usuario => usuario.nombre);
console.log("Usuarios mayores de edad activos:", usuariosMayoresDeEdad);