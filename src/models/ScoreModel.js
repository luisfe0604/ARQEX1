
const createScoreObj = (nome, n1, n2, n3, media) => {
  return {
    Nome: nome, 
    Nota1: n1, 
    Nota2: n2, 
    Nota3: n3, 
    Media: media
  }
}

export { createScoreObj }