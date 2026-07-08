// Reglas del analizador

// Palabras reservadas
export const palabraClave = (texto) =>
  [
    "if",
    "for",
    "else",
    "while",
    "function",
    "return",
    "let",
    "const",
    "var",
  ].includes(texto);

// Números
export const esNumero = (texto) => /^[0-9]+(\.[0-9]+)?$/.test(texto);

// Operadores
export const esOperador = (texto) =>
  [
    "+",
    "-",
    "*",
    "/",
    "%",
    "=",
    "==",
    "===",
    "!=",
    "!==",
    "<",
    ">",
    "<=",
    ">=",
    "&&",
    "||",
    "!",
    "++",
    "--",
  ].includes(texto);

// Delimitadores
export const esDelimitador = (texto) =>
  ["(", ")", "{", "}", "[", "]"].includes(texto);

// Separadores
export const esSeparador = (texto) => [",", ";", ":", "."].includes(texto);

// Identificadores
export const esTexto = (texto) => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(texto);

// =========================
// Analizador
// =========================

export const analizarCodigo = (codigoFuente) => {
  if (!codigoFuente) return [];

  const revisor =
    codigoFuente.match(
      /[a-zA-Z_][a-zA-Z0-9_]*|\d+(\.\d+)?|===|!==|==|!=|<=|>=|\+\+|--|&&|\|\||[+\-*/%=<>!(){}\[\];,.:]/g,
    ) || [];

  return revisor.map((pieza, index) => {
    let tipo = "DESCONOCIDO";

    if (palabraClave(pieza)) tipo = "PalabraClave";
    else if (esOperador(pieza)) tipo = "Operador";
    else if (pieza === "(") tipo = "Paréntesis izquierdo";
    else if (pieza === ")") tipo = "Paréntesis derecho";
    else if (pieza === "{") tipo = "Llave izquierda";
    else if (pieza === "}") tipo = "Llave derecha";
    else if (pieza === "[") tipo = "Corchete izquierdo";
    else if (pieza === "]") tipo = "Corchete derecho";
    else if (pieza === ";") tipo = "Punto y coma";
    else if (pieza === ",") tipo = "Coma";
    else if (pieza === ":") tipo = "Dos puntos";
    else if (pieza === ".") tipo = "Punto";
    else if (esNumero(pieza)) tipo = "Numero";
    else if (esTexto(pieza)) tipo = "Texto";

    return {
      id: index,
      valor: pieza,
      tipo,
    };
  });
};
