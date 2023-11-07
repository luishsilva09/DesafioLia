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
};
let filter = ["ingles", "avancado", "manha"];
console.time("Tempo de execução ");

function noFilter(courses) {
  let res = [];
  for (let curso in courses) {
    for (let nivel in courses[curso]) {
      for (let turno in courses[curso][nivel]) {
        courses[curso][nivel][turno].forEach((ele) => {
          res.push(ele);
        });
      }
    }
  }
  return res;
}
function search(courses, filter) {
  let res = [];
  //caso o filtro estiver vazio
  if (filter.length == 0) {
    res = noFilter(courses);
  }
  //filtro de curso
  filter.forEach((curso, index) => {
    if (courses[curso]) {
      for (let nivel in courses[curso]) {
        if (nivel == filter[1]) {
          for (let turno in courses[curso][nivel]) {
            if (turno == filter[2]) {
              courses[curso][nivel][turno].forEach((ele) => {
                res.push(ele);
              });
            }
            if (filter[2] == undefined) {
              courses[curso][nivel][turno].forEach((ele) => {
                res.push(ele);
              });
            }
          }
        }
        if (filter[1] == undefined) {
          for (let turno in courses[curso][nivel]) {
            courses[curso][nivel][turno].forEach((ele) => {
              res.push(ele);
            });
          }
        }
      }
    }
  });
  return res;
}

// function byCourse(courses,filtro){

// }

console.log(search(courses, filter));
console.timeEnd("Tempo de execução ");
