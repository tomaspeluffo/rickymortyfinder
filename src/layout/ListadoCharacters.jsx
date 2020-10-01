import React from 'react';
const ListadoCharacters = ({datos}) => {


    const listadoMostrar = datos[0].characters.splice(0,5)

  return ( 
    <div className="lista">
        <h3>First five characters: </h3>
        <ul>
        {listadoMostrar.map(lista => (
            <li key = {lista.name}>{lista.name}</li>
        ))}
        </ul>
    </div>
    
       
     );
}
 
export default ListadoCharacters;