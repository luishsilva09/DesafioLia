const terras = [1, 2, 2, 2, 3, 4, 4, 2];
let anteriorDiferente = undefined;
let castelo = 0;

function castelos(terras) {
  for (let i = 0; i < terras.length; i++) {
    if (terras[i] != terras[i - 1]) {
      anteriorDiferente = terras[i - 1];
    }

    if (terras[i] == terras[i + 1] && i != terras.length) {
    } else if (
      // vales
      (anteriorDiferente > terras[i] ||
        i == 0 ||
        anteriorDiferente == undefined) &&
      (terras[i + 1] > terras[i] || terras[i + 1] == undefined)
    ) {
      castelo++;
    } else if (
      // montanhas
      (anteriorDiferente < terras[i] || i == 0) &&
      (terras[i + 1] < terras[i] || terras[i + 1] == undefined)
    ) {
      castelo++;
    }
  }
  return "castelos " + castelo;
}

console.log(castelos(terras));
