const Cursos = [
    {titulo : 'React Avanzado',
    categoria : 'Desarrollo',
    esgratis : false,
    tieneCertificado : true},
    {titulo : 'Introducción a UX/UI',
    categoria : 'Diseño',
    esgratis : true,
    tieneCertificado : false},
    {titulo : 'Node.js y MongoDB',
    categoria : 'Desarrollo',
    esgratis : true,
    tieneCertificado : true},
    {titulo : 'Figma para principiantes',
    categoria : 'Diseño',
    esgratis : false,
    tieneCertificado : false}
]

// DEFINICIÓN DE REGLAS
const esDesarrolloCertificado = (curso) => curso.categoria === 'Desarrollo' && curso.tieneCertificado;

const esGratisODiseño = (curso) => curso.esgratis === true || curso.categoria === 'Diseño';

const esIncertificado = (curso) => curso.tieneCertificado === false;

const esDesarrolloCertificadoOGratis = (curso) => (curso.categoria === 'Desarrollo' && curso.tieneCertificado === true) || curso.esgratis === true;

// APLICACIÓN DE REGLAS (CONSULTAS)
const desarrolloCertificado = Cursos.filter(esDesarrolloCertificado).map(curso => curso.titulo);
//console.log(desarrolloCertificado);

const gratisODiseño = Cursos.filter(esGratisODiseño).map(curso => curso.titulo);
console.log(gratisODiseño);

const cursosIncertificados = Cursos.filter(esIncertificado).map(curso => curso.titulo);
//console.log(cursosIncertificados);

const CursosCertiGratis = Cursos.filter(esDesarrolloCertificadoOGratis).map(curso => curso.titulo);
console.log(CursosCertiGratis);
