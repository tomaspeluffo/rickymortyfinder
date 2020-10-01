import React from 'react'

const Card = ({element, guardarModal, guardarElemento}) => {


    const openModal = () =>{
        guardarModal(true)
        guardarElemento(element)
    }

    

    return (  
        <div className="card" onClick={openModal}>

                <img src={element.image} alt="" className="imagen-paginator"/>
                <h3>{element.name}</h3>
                <h4>{element.dimension}</h4>
                <h4>{element.episode}</h4>
        </div>
    );
}
 
export default Card;