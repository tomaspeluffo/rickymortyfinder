import React from 'react';
const LisatodResidentes = ({datos}) => {


    const listadoMostrar = datos[0].residents.splice(0,5)

  return ( 
    <div className="lista">
        <h3>First five residents: </h3>
        <ul>
        {listadoMostrar.map(lista => (
            <li key = {lista.name}>{lista.name}</li>
        ))}
        </ul>
    </div>
    
       
     );
}
 
export default LisatodResidentes;