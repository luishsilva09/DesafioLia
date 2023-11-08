# DesafioLia

## Configurações

Existem duas variaveis que servem como padrão dos filtros para facilitar o que deve ser considerado pelo filtro.

onde os \_levels são considerados os niveis dos curso sendo adicionado um nivel novo em algum curso adicionar na variavel

sendo \_times o mesmo principio de \_levels mas seria para os horarios dos cursos assim adicionando um horario novo adcionar na variavel

```js
const _levels = {
  // colocar os niveis a considerar
  iniciante: "iniciante",
  avancado: "avancado",
};
const _times = {
  // os horarios que devem considerar
  manha: "manha",
  noite: "noite",
  tarde: "tarde",
  online: "online",
};
```

## Objetivo

Requisitos:

- A função search deve receber um objeto com essa estrutura acima e também um array com os filtros necessários
- Dado os filtros a função deve retornar uma lista de todos os objetos que estiverem abaixo deste filtro (no caso o que estamos chamando de objeto seria { "id": 1 } por exemplo)
- Os nomes dos cursos são únicos (no exemplo acima: ingles e espanhol)

## Estrutura de dados

```````json
 courses = {
      "espanhol": {
        "iniciante": {
          "manha": [
            {
              "id": 1
            },
            {
              "id": 2
            }
          ],
          "noite": [
            {
              "id": 3
            },
            {
              "id": 4
            }
          ]
        },
        "avancado": {
          "manha": [
            {
              "id": 5
            },
            {
              "id": 6
            }
          ]
        }
      },
      "ingles": {
        "avancado": {
          "manha": [
            {
              "id": 11
            },
            {
              "id": 21
            }
          ]
        }
      }
    }``````
```````

## Exemplos:

Cenário vazio, retorna todos os objetos
=> search(courses, [])
=> [{ id:1 },{ id:2 },{ id:3 },{ id:4 },{ id:5 },{ id:6 }, { id:11 }, { id:21 }]

    Cenário onde passa apenas curso, retorna todos os objetos daquele curso
    => search(courses, ['espanhol'])
    => [{ id:1 },{ id:2 },{ id:3 },{ id:4 },{ id:5 },{ id:6 }]

    Cenário onde passa curso + nível, retorna todos os objetos daquele curso + nivel
    => search(courses, ['espanhol', 'iniciante'])
    => [{ id:1 },{ id:2 },{ id:3 },{ id:4 }]

    Cenário onde passa curso + nível + turno, retorna todos os objetos daquele curso + nivel + turno
    => search(courses, ['espanhol', 'iniciante', 'manha'])
    => [{ id:1 },{ id:2 }]
