import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [students, setStudents] = useState([]);
  const [newList, setList] = useState([])
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/cwauj646tcfmp');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);*/

  const alunos = [
    { Matricula: 1, Aluno: "Eduardo", Faltas: 8, P1: 35, P2: 63, P3: 61, Situacao: '', Nota_para_Aprovaçao_Final: '' },
    { Matricula: 2, Aluno: "Murilo", Faltas: 8, P1: 64, P2: 97, P3: 36, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 3, Aluno: "Guilherme", Faltas: 19, P1: 68, P2: 74, P3: 51, Situacao: '', Nota_para_Aprovaçao_Final: ''   },
    { Matricula: 4, Aluno: "Flavia", Faltas: 23, P1: 66, P2: 98, P3: 62, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 5, Aluno: "Ruan", Faltas: 13, P1: 80, P2: 65, P3: 41, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 6, Aluno: "Arnando", Faltas: 23, P1: 83, P2: 68, P3: 77, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 7, Aluno: "Lucas", Faltas: 5, P1: 38, P2: 53, P3: 80, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 8, Aluno: "Fabio", Faltas: 10, P1: 53, P2: 96, P3: 89, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 9, Aluno: "Alisson", Faltas: 15, P1: 45, P2: 61, P3: 68, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 10, Aluno: "Felipe", Faltas: 12, P1: 32, P2: 41, P3: 85, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 11, Aluno: "Rachel", Faltas: 11, P1: 84, P2: 66, P3: 39, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 12, Aluno: "Jouy", Faltas: 13, P1: 42, P2: 93, P3: 57, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 13, Aluno: "François", Faltas: 19, P1: 59, P2: 87, P3: 89, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 14, Aluno: "Dâmaris", Faltas: 10, P1: 44, P2: 50, P3: 62, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 15, Aluno: "Leonardo", Faltas: 16, P1: 83, P2: 92, P3: 32, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 16, Aluno: "Guilherme", Faltas: 6, P1: 36, P2: 38, P3: 76, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 17, Aluno: "Wesley", Faltas: 16, P1: 41, P2: 52, P3: 87, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 18, Aluno: "Yuri", Faltas: 2, P1: 87, P2: 75, P3: 50, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 19, Aluno: "Kira", Faltas: 8, P1: 36, P2: 46, P3: 48, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 20, Aluno: "Cleici", Faltas: 22, P1: 91, P2: 88, P3: 92, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 21, Aluno: "João Moacir", Faltas: 23, P1: 38, P2: 90, P3: 98, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 22, Aluno: "Bruno", Faltas: 15, P1: 96, P2: 37, P3: 100, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 23, Aluno: "Elcio", Faltas: 9, P1: 73, P2: 71, P3: 75, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
    { Matricula: 24, Aluno: "Criscia", Faltas: 0, P1: 50, P2: 95, P3: 84, Situacao: '', Nota_para_Aprovaçao_Final: ''  },
  ];


  function calcularMedia () {
    const notas = alunos.map((item) => {
      const faltas = item.Faltas
      const notas = [parseFloat(item.P1), parseFloat(item.P2), parseFloat(item.P3)]
      const soma = notas.reduce((total, nota) => total + nota, 0)
 
      const media = Math.ceil(Math.round(soma / 3))
      const naF = media-100 
      const res = Math.round((60 + faltas) / 2 )

      //media +  nota / 2
      let reprovadoNota = ''
      let exameFinal = ''
      let reprovadoFalta = ''
      let aprovado = ''
      let zero = ''
      let resFinal= ''
      if(media < 50) { 
        reprovadoNota = ' Repovado por Nota'
        console.log(`${item.Aluno} Repovado por Nota: Media:${media} e Faltas: ${faltas}`)
      } else if(media >= 50 && media <70 && faltas <= 15) {
        exameFinal = 'Exame Final'
        resFinal = naF
        console.log(`${item.Aluno}  Exame Final Media:${media} e Faltas: ${faltas} | Porcentagem de faltas ${res}`) 
      }  else if(media >= 50 && faltas > 15) {
        reprovadoFalta = 'Reprovado por falta'
        console.log(`${item.Aluno} Reprovado por falta: Media:${media} e Faltas: ${faltas} | Porcentagem de faltas ${res}`)
      } else if(media >=70 && faltas <=15) {
        aprovado = 'Aprovado'
        zero = '0'
        console.log(`${item.Aluno} Aprovado: Media:${media} e Faltas: ${faltas} | Porcentagem de faltas ${res}`)
      }  else {
        console.log(`${item.Aluno} Verificar: Media:${media} e Faltas: ${faltas} | Porcentagem de faltas ${res}`)
      }
  
      return {...item, reprovadoNota, exameFinal, reprovadoFalta , aprovado, zero, resFinal }
    })
    console.log(notas)
    setList(notas)
  }

  useEffect(()=> {
    calcularMedia()
  },[])

  return (
    <div className="App">
      
      <div className="table-container">
        <h2>Dados dos Alunos</h2>
        <table>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Aluno</th>
              <th>Faltas</th>
              <th>P1</th>
              <th>P2</th>
              <th>P3</th>
              <th>Situação</th>
              <th>Nota para Aprovação Final</th>
            </tr>
          </thead>
          <tbody>
          {newList.map((item) => (
            <tr>
                <td>{item.Matricula}</td>
                <td>{item.Aluno}</td>
                <td>{item.Faltas}</td>
                <td>{item.P1}</td>
                <td>{item.P2}</td>
                <td>{item.P3}</td>
                <td>{item.exameFinal}{item.reprovadoFalta} {item.aprovado} {item.reprovadoNota}</td>
                <td> {item.zero} </td>

                
            </tr>
          ))}    
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

