import React, {useState, useEffect} from 'react';

import Filters from './layout/Filters'
import Paginator from './layout/Paginator'
import Search from './layout/Search'

import {gql,} from 'apollo-boost'
import {client} from './index'
import {user} from 'react-apollo'



function App() {

  const [filtro, guardarFiltro] = useState('')    
  const [busqueda, guardarBusqueda] = useState('')
  const [listado, guardarListado] = useState([])
  const [resultados, guardarResultados] = useState([])
  const [pagina, guardarPagina] = useState(1)
  const [modal, guardarModal] =useState(false)




  const getCharacters = async () =>{

    const query= gql`

    query Busqueda  ($filter :String, $page:Int ) {
      characters(filter: {name:$filter}, page: $page) {
        info {
          count
          next
          prev
          pages
        }
        results {
          name
          image	
          id
          type
          gender
          species
        }

      } 
    }` 

    return client.query({
      query, 
      variables: { filter:busqueda, page : pagina }


    }).then( ({data, error, loading})  =>{
   
      if(data && !error){
        guardarResultados(data.characters.info)
        guardarListado(data.characters.results)
      }


    })
  }

  const getLocations = () =>{

    const query= gql`

    query Busqueda ($filter :String, $page:Int) {
      locations(filter: {name:$filter}, page: $page) {
        info {
          count
          next
          prev
          pages
        }
        results {
          name
          dimension
          id
          residents{
            name
          }
        }
    } 
      
    }` 

    return client.query({
      query, 
      variables: { filter:busqueda, page : pagina },

    }).then(({data, error}) =>{
      guardarListado(data.locations.results)
      guardarResultados(data.locations.info)

    })
  }

  const getEpisodes = () =>{

    const query= gql`

    query Busqueda ($filter :String, $page:Int) {
      episodes(filter: {name:$filter}, page: $page) {
        info {
          count
          next
          prev
          pages
        }
        results {
          name
          episode
          id
          air_date
          characters {
            name
          }
        }
    } 
      
    }` 

    return client.query({
      query, 
      variables: { filter:busqueda, page : pagina },

    }).then(({data}) =>{
      guardarListado(data.episodes.results)
      guardarResultados(data.episodes.info)

     
    }) 
  }
  

  const busquedaQuery = () =>{

    if(filtro === 'characters'){
      getCharacters()
     }else if(filtro === 'locations'){
       getLocations()
     }else if(filtro === 'episodes'){
      getEpisodes()
     }    

  }

  const datosBusqueda = (e) =>{
    e.preventDefault()
    if(busqueda.trim() === '') return
    busquedaQuery()
    
  }

  useEffect(() => {
    busquedaQuery()
  }, [pagina])

 

  return (
    <>
        <div className='fondo' >
          <div className='buscador'>
            <Search
              guardarBusqueda={guardarBusqueda}
              datosBusqueda={datosBusqueda}
            > </Search>
          </div>

          <div className='main'>
            <div className='filtros'>
              <Filters
                guardarFiltro={guardarFiltro}
                guardarListado={guardarListado}
                guardarBusqueda={guardarBusqueda}
                guardarPagina={guardarPagina}
                guardarResultados={guardarResultados}
                guardarModal={guardarModal}
              > </Filters>
            </div>

            <div className='paginador'>
              <Paginator
                listado={listado}
                resultados={resultados}
                pagina={pagina}
                guardarPagina={guardarPagina}
                filtro = {filtro}
                modal={modal}
                guardarModal = {guardarModal}
              > </Paginator>
            </div>
          </div>

        </div> 
    </>
  );
}

export default App;
