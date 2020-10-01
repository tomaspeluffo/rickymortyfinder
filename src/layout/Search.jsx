import React from 'react'


const Search =  ({ guardarBusqueda,  datosBusqueda}) => {

 
    return (
        <form 
          className="form-buscar"
          onSubmit={datosBusqueda}
          >

          <input 
            className='input-buscar'
            type="text"
            name='search'
            onChange={e => guardarBusqueda(e.target.value)}
          />

          <button className="boton-buscar" type="submit"></button>
        </form>
      );
}
 
export default Search;