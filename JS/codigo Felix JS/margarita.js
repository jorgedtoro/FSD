// [Me quiere, no está decidido, no me quiere]
const respuestas = ["Me quiere", "no está decidido", "no me quiere"]
function margarita(petalos, respuestas) {
  const index = (petalos - 1) % respuestas.length;
  return respuestas[index];
}

margarita(1, respuestas); // me quiere
margarita(2, respuestas); // no está decidido
margarita(3, respuestas); // no me quiere