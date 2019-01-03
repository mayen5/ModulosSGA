import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {
  private modulos: Modulo[] = [
    {
      'id': 1,
      'titulo': '1. Programación orientada a objetos con C#',
      'fechaInicio': '2018-02-01',
      'fechaFin': '2018-02-28',
      'logo': 'assets/img/logo-csharppoo.png',
      'temas': [
          {
              'id': 1,
              'tema': 'Entorno de desarrollo de Visual Studio.NET'
          },
          {
              'id': 2,
              'tema': 'Diseño de clases'
          },
          {
              'id': 3,
              'tema': 'Atributos y métodos'
          },
          {
              'id': 4,
              'tema': 'Implementación de accesores y modificadores (GET/SET)'
          },
          {
              'id': 5,
              'tema': 'Clases Abstractas y métodos abstractos'
          },
          {
              'id': 6,
              'tema': 'Implementación de namespace'
          },
          {
              'id': 7,
              'tema': 'Constructores, interfaces y métodos sobrecargados'
          },
          {
              'id': 8,
              'tema': 'Herencia'
          },
          {
              'id': 9,
              'tema': 'Polimorfismo'
          },
          {
              'id': 10,
              'tema': 'Encapsulamiento'
          },
          {
              'id': 11,
              'tema': 'Abstracción'
          }
      ]
  },
  {
      'id': 2,
      'titulo': '2. Introducción al lenguaje de programación con C#',
      'fechaInicio': '2018-03-01',
      'fechaFin': '2018-03-31',
      'logo': 'assets/img/logo-Csharp.png',
      'temas': [
          {
              'id': 1,
              'tema': 'Definición de variables y constantes'
          },
          {
              'id': 2,
              'tema': 'Estructuras de control'
          },
          {
              'id': 3,
              'tema': 'Iteraciones (While, For, ForEach, do...Loop)'
          },
          {
              'id': 4,
              'tema': 'Procedimientos y funciones'
          },
          {
            id: 5,
            tema : 'Enumeraciones'
          },
          {
            id: 5,
            tema : 'Control de Excepciones'
          },
          {
            id: 6,
            tema : 'Arreglos'
          },
          {
            id: 7,
            tema : 'Manejo de hilos'
          },
          {
            id: 8,
            tema : 'Manejo de colecciones'
          }
      ]
  },
  {
      'id': 3,
      'titulo': '3. SQL Server',
      'fechaInicio': '2018-04-01',
      'fechaFin': '2018-04-30',
      'logo': 'assets/img/logo-sqlserver.png',
      'temas': [
          {
              'id': 1,
              'tema': 'Instalación y cofiguración de SQL Server'
          },
          {
              'id': 2,
              'tema': 'Acceso y seguridad'
          },
          {
              'id': 3,
              'tema': 'Diseño de base de datos y tablas'
          },
          {
              'id': 4,
              'tema': 'Manejo y definición del lenguaje Transact SQL'
          },
          {
            id: 5,
            tema : 'Procedimientos almacenados'
          },
          {
            id: 6,
            tema : 'Disparadores (Triggers)'
          },
          {
            id: 7,
            tema : 'Vistas'
          },
          {
            id: 8,
            tema : 'Funciones'
          },
          {
            id: 9,
            tema : 'Copias de seguridad'
          }
      ]
  },
  {
    'id': 4,
    'titulo': '4. Capa de acceso a datos',
    'fechaInicio': '2018-05-01',
    'fechaFin': '2018-05-31',
    'logo': 'assets/img/logo-entityframework.png',
    'temas': [
        {
            'id': 1,
            'tema': 'Instalación y cofiguración de SQL Server'
        },
        {
            'id': 2,
            'tema': 'Acceso y seguridad'
        },
        {
            'id': 3,
            'tema': 'Diseño de base de datos y tablas'
        },
        {
            'id': 4,
            'tema': 'Manejo y definición del lenguaje Transact SQL'
        }
    ]
  },
  {
    'id': 5,
    'titulo': '5. ASP.NET Web API',
    'fechaInicio': '2018-06-01',
    'fechaFin': '2018-06-30',
    'logo': 'assets/img/logo-net.jpg',
    'temas': [
        {
            'id': 1,
            'tema': 'Instalación y cofiguración de SQL Server'
        },
        {
            'id': 2,
            'tema': 'Acceso y seguridad'
        },
        {
            'id': 3,
            'tema': 'Diseño de base de datos y tablas'
        },
        {
            'id': 4,
            'tema': 'Manejo y definición del lenguaje Transact SQL'
        }
    ]
  }
];
  constructor() { }
  getModulos() {
    return this.modulos;
  }
  getModulo(id: number) {
    let resultado: Modulo;
    for (let i = 0; i < this.modulos.length; i++) {
        if (this.modulos[i].id == id) {
           resultado = this.modulos[i];
        }
    }
    return resultado;
  }

  buscar(termino: string) {
    let encontrados: Modulo[] = [];
    for (let i = 0; i < this.modulos.length; i++) {
        if (this.modulos[i].titulo.toLowerCase().indexOf(termino) >= 0) {
            encontrados.push(this.modulos[i]);
        }
    }
    return encontrados;
  }
}

export interface Modulo {
  id: number;
  titulo: string;
  fechaInicio: string;
  fechaFin: string;
  logo: string;
  temas: any[];
}
