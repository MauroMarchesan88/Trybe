import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

// class Content extends React.Component {
// render() {
//     return (
//       <div className='content'>
//         {conteudos.map((element) => (
//           <div key={element.conteudo} className='card'>
//             <h4>{`O conteudo e: ${element.conteudo}`}</h4>
//             <p>{`Status: ${element.status}`}</p>
//             <p>{`Bloco: ${element.bloco}`}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

class Content extends React.Component {
  render() {
    const contents = conteudos.map((conteudo, index) => {
      return (
        <div key={index}>
          {`O conteudo e: ${conteudo.conteudo}`} <br />
          {`Status: ${conteudo.status}`} <br />
          {`Bloco: ${conteudo.bloco}`} <br />
        </div>
      )
    })
    return <div>{contents}</div>
  }
}

export default Content;