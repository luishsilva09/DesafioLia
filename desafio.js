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
let filter = ["avancado"];
console.time("Tempo de execução ");

const levels = {
  iniciante: "iniciante",
  avancado: "avancado",
};
const times = {
  manha: "manha",
  noite: "noite",
  tarde: "tarde",
  online: "online",
};
//filtro pelo curso ou gero um array
function byCourse(courses, filtro) {
  let response = [];

  for (let element of filtro) {
    if (courses[element]) {
      response.push(courses[element]);
      return response;
    }
  }
  //caso nao tenha um filtro de curso retorna tudo
  for (let curso in courses) {
    response.push(courses[curso]);
  }

  return response;
}

function byLevel(array, filtro) {
  let response = [];

  for (let i = 0; i <= filtro.length; i++) {
    if (levels[filtro[i]]) {
      for (let level of array) {
        if (level[filtro[i]]) {
          response.push(level[filtro[i]]);
        }
      }
      return response;
    }
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

function byTime(array, filtro) {
  let response = [];

  for (let i = 0; i <= filtro.length; i++) {
    if (times[filtro[i]]) {
      for (let time of array) {
        if (time[filtro[i]]) {
          response.push(time[filtro[i]]);
          valid = false;
        }
      }
      return response;
    }
    if (i == filtro.length) {
      for (let time of array) {
        for (let data in time) {
          response.push(time[data]);
        }
      }
    }
  }

  return response;
}

function search(courses, filtro) {
  let response;
  response = byCourse(courses, filtro);
  response = byLevel(response, filter);
  response = byTime(response, filter);

  return response;
}

console.log(search(courses, filter));
console.timeEnd("Tempo de execução ");
