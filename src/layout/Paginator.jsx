import React, {useState} from 'react'
import Card from './Card'
import LisatodResidentes from './LisatodResidentes'
import ListadoCharacters from './ListadoCharacters'



const Paginator = ({listado, resultados, pagina, guardarPagina, guardarModal, modal}) => {


  const [elemento, guardarElemento] = useState({})


  const datos = listado.filter(dato => dato.id === elemento.id)

    const closeModal= () =>{
      guardarModal(false)
    }
  

  const sumarPagina = () =>{
    if(pagina === resultados.pages || listado.length === 0){return}
    guardarPagina(pagina + 1)

  }

  const restarPagina = () => {
    if(pagina === 1 || listado.length === 0) {return}
    guardarPagina(pagina-1)

  }


  
    return (
      <>
        <div className='paginator-area' id="paginator-area">

          {modal ? <div className="modal">
            <div className="data">
              <div className='card'>
              {datos[0].image ? <img src={datos[0].image} alt="" className="imagen-paginator"/> : null }
              {datos[0].name ? <h3>Name: {datos[0].name} </h3> : null }
              {datos[0].episode ? <h3>Episode: {datos[0].episode} </h3> : null }
              {datos[0].dimension ? <h3>Dimension: {datos[0].dimension} </h3> : null }
              {datos[0].air_date ? <h3>Air Date: {datos[0].air_date} </h3> : null }
              {datos[0].residents ? <LisatodResidentes datos={datos} /> : null}
              {datos[0].characters ? <ListadoCharacters datos={datos} /> : null}
              {datos[0].type  ? <h3>Type: {datos[0].type} </h3> : null }
              {datos[0].gender ? <h3>Gender: {datos[0].gender} </h3> : null }

            </div>

            </div>

          <div className='button-area' >
          <button onClick={closeModal} className="modal-button">Close</button>
          </div>
          </div> : null}

        
            
              {listado.map(element =>(
                <Card 
                  key = {element.id}
                  element = {element}
                  guardarModal={guardarModal}
                  guardarElemento={guardarElemento}
                  
              />
              ))}
              
      
            


        </div>

            {(resultados.pages > 1 && !modal )  ? <div className="botones-area">

          <button onClick={restarPagina} >Previous</button>
          <p>{pagina}</p>
          <button onClick={sumarPagina }>Next</button>

        </div> : null }
        

        

      
    </>
      );
}
 
export default Paginator;