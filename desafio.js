//dados do cursos
const courses = {
  espanhol: {
    iniciante: {
      manha: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      noite: [
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    avancado: {
      manha: [
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    },
  },
  ingles: {
    avancado: {
      manha: [
        {
          id: 11,
        },
        {
          id: 21,
        },
      ],
    },
  },
  italiano: {
    avancado: {
      manha: [
        {
          id: 13,
        },
        {
          id: 23,
        },
      ],
    },
  },
};

//enums para ter padrao de pesquisa, pode adicionar mais niveis assim que necessario
const _levels = {
  iniciante: "iniciante",
  avancado: "avancado",
};
const _times = {
  manha: "manha",
  noite: "noite",
  tarde: "tarde",
  online: "online",
};

//filtro pelo curso ou gero um array
function byCourse(courses, filtro) {
  let response = [];

  //verifico se existe dentro dos dados course algo que relaciona com algum item do filtro
  for (let element of filtro) {
    if (courses[element]) {
      response.push(courses[element]);
      return response;
    }
  }
  //caso nao tenha um filtro de curso retorna tudo em apenas um array
  for (let curso in courses) {
    response.push(courses[curso]);
  }

  return response;
}
//filtro para outros dados
function filterSearch(array, filtro, enums) {
  let response = [];

  for (let i = 0; i <= filtro.length; i++) {
    if (enums[filtro[i]]) {
      // verifico se meu filtro esta dentro dos padroes de pesquisa
      for (let level of array) {
        if (level[filtro[i]]) {
          response.push(level[filtro[i]]);
        }
      }
      return response;
    }
    //caso não tenha nada relacionada do filtro com os itens possiveis do filtro retorno tudo
    if (i == filtro.length) {
      for (let level of array) {
        for (let data in level) {
          response.push(level[data]);
        }
      }
    }
  }

  return response;
}
//funcao principal de busca
function search(courses, filtro, levels, times) {
  let response;
  response = byCourse(courses, filtro);
  response = filterSearch(response, filter, levels);
  response = filterSearch(response, filter, times);

  //Organizar array para ser como esperado
  let organizedResponse = [];
  for (let i = 0; i < response.length; i++) {
    for (let j = 0; j < response[i].length; j++) {
      organizedResponse.push(response[i][j]);
    }
  }

  return organizedResponse;
}

//filtro com pavras chave de busca
let filter = ["avancado", "noite"];

//chamando funcao de busca passando os dados
console.log(search(courses, filter, _levels, _times));
