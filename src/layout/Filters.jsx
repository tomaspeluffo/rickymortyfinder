import React from 'react'

const Filters = ({guardarFiltro, guardarListado, guardarBusqueda, guardarResultados, guardarPagina, guardarModal}) => {

    const clearSearch = () =>{
        guardarModal(false)
        guardarFiltro('')
        guardarListado([])
        guardarBusqueda('')
        guardarResultados([])
        guardarPagina(1)
    }

    return ( 
        <>
        <div className='filter'>
        <h2 className="titulo">Filters</h2>
        <form >
            <div className='radio-filter'>
                <label>
                    <input 
                        type="radio"
                        value='characters'
                        name='filter'
                        onChange={e => guardarFiltro(e.target.value)}
                    />
                Character</label>
            </div>

            <div className='radio-filter'>
                <label>
                    <input 
                        type="radio"
                        value='locations'
                        name='filter'
                        onChange={e => guardarFiltro(e.target.value)}
                    />
                Location</label>
            </div>

            <div className='radio-filter'>
                <label>
                    <input 
                        type="radio"
                        value='episodes'
                        name='filter'
                        onChange={e => guardarFiltro(e.target.value)}
                    />
                Episode</label>
            </div>

        </form>

        <div className='filter-button'>
            <button onClick={clearSearch}>Clear Search</button>
        </div>
        </div>

        {/* <div className="advance-filter">
            <h2 className='titulo'>Advance Filter</h2>
            <form>
                <div className='filter-option'>
                    <label htmlFor="">Character</label>
                        <select name="" id="">
                            <option value="">Character</option>
                        </select>
                </div>

                <div className='filter-option'>
                    <label htmlFor="">Location</label>
                        <select name="" id="">
                            <option value="">Location</option>
                        </select>
                </div>
                    
                <div className='filter-option'>
                    <label htmlFor="">Episode</label>
                        <select name="" id="">
                            <option value="">Episode</option>
                        </select>
                </div>

            </form>
        </div> */}
        </>
     );
}
 
export default Filters;