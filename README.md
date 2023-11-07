# DesafioLia

## Objetivo

Requisitos:

- A função search deve receber um objeto com essa estrutura acima e também um array com os filtros necessários
- Dado os filtros a função deve retornar uma lista de todos os objetos que estiverem abaixo deste filtro (no caso o que estamos chamando de objeto seria { "id": 1 } por exemplo)
- Os nomes dos cursos são únicos (no exemplo acima: ingles e espanhol)

## Dados

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
