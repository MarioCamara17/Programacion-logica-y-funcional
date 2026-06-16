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

// APLICACIÓN DE REGLAS (CONSULTAS CON COMBINACIÓN DE HECHOS)

const desarrolloCertificado = Cursos.filter(curso => esDesarrolloCertificado(curso) && esGratisODiseño(curso)).map(curso => curso.titulo);
console.log("Cursos de desarrollo certificados Y (gratis O de diseño):", desarrolloCertificado);

const gratisODiseño = Cursos.filter(curso => esGratisODiseño(curso) && !esIncertificado(curso)).map(curso => curso.titulo);
console.log("Cursos gratis O de diseño Y certificados:", gratisODiseño);

const cursosIncertificados = Cursos.filter(curso => esIncertificado(curso) && (curso.esgratis === true || curso.categoria === 'Desarrollo')).map(curso => curso.titulo);
console.log("Cursos sin certificado Y (gratis O de desarrollo):", cursosIncertificados);

const CursosCertiGratis = Cursos.filter(curso => esDesarrolloCertificadoOGratis(curso) && curso.categoria === 'Desarrollo').map(curso => curso.titulo);
console.log("Cursos certificados O gratis Y de desarrollo:", CursosCertiGratis);

const cursosPagoCertificado = Cursos.filter(curso => curso.esgratis === false && curso.tieneCertificado === true).map(curso => curso.titulo);
console.log("Cursos de pago Y certificados:", cursosPagoCertificado);

const cursosGratisDiseño = Cursos.filter(curso => curso.esgratis === true && curso.categoria === 'Diseño').map(curso => curso.titulo);
console.log("Cursos gratis Y de diseño:", cursosGratisDiseño);

const cursosDesarrolloOCertificado = Cursos.filter(curso => (curso.categoria === 'Desarrollo' || curso.tieneCertificado === true) && !curso.esgratis).map(curso => curso.titulo);
console.log("Cursos de desarrollo O certificados Y de pago:", cursosDesarrolloOCertificado);
