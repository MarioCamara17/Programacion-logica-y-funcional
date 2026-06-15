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

const desarrolloCertificado = Cursos.filter(curso => curso.categoria === 'Desarrollo' && curso.tieneCertificado);
//console.log(desarrolloCertificado);

const gratisODiseño = Cursos.filter(curso => curso.esgratis === true || curso.categoria === 'Diseño');
console.log(gratisODiseño);

const cursosIncertificados = Cursos.filter(curso => curso.tieneCertificado === false);
//console.log(cursosIncertificados);

const CursosCertiGratis = Cursos.filter(curso => curso.categoria === 'Desarrollo' && curso.tieneCertificado === true || curso.esgratis === true);
//console.log(CursosCertiGratis);