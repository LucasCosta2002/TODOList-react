import React from 'react'

function Tarea({tarea, setTarea, eliminarTarea}) {

    const {titulo, descripcion, ingreso, id} = tarea;

    function handleElimimar(){
        const respuesta = confirm("¿Querés borrar esta tarea?")

        if(respuesta){
            eliminarTarea(id)
        }
    }

    return (
        <div className='m-3 bg-white shadow-md p-5 rounded-lg'>
            <p className='font-bold mb-3 text-sky-500 uppercase'>Título: <span className='text-gray-700 font-normal normal-case '> {titulo}</span></p>
            <p className='font-bold mb-3 text-sky-500 uppercase'>Descripción: <span className='text-gray-700 font-normal normal-case'> {descripcion}</span></p>
            <p className='font-bold mb-3 text-sky-500 uppercase'>Fecha ingresada: <span className='text-gray-700 font-normal normal-case'> {ingreso}</span></p>

            <div className='flex justify-between mt-10'>
                <button
                    className='py-2 px-10 transition bg-sky-600 hover:bg-sky-500 text-white font-bold uppercase rounded-md'
                    type='button'
                    onClick={()=> setTarea(tarea)} //llevamos el objeto al app para despues llevarlo al form y rellenarlo
                >Editar</button>
                <button
                    className='py-2 px-10 transition bg-red-700 hover:bg-red-600 text-white font-bold uppercase rounded-md'
                    type='button'
                    onClick={handleElimimar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Tarea