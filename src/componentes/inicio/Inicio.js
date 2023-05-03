import React from "react";
import styled from "styled-components";

export default class Inicio extends React.Component {
  render() {
    return (
      <div>
        <Titulo>Hola mundo</Titulo>
        <Button>Iniciar</Button>
      </div>
    );
  }
}

// export const Inicio =()=>{
//     return (
//       <div>
//         <Titulo>Hola mundo</Titulo>
//         <Button>Iniciar</Button>
//       </div>
//     );
//   }

const Titulo = styled.h1`
  font-size: 3em;
  text-align: center;
  color: blueviolet;
`;

const Button = styled.button`
  border-radius: 15rem;
  border: 5px;
`;
