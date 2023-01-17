import React from 'react'
import Tarea from './Tarea'

function ListadoTarea({tareas, setTarea, eliminarTarea}) {
	return (

		<div className='md:w-1/2 lg:w-3/5 '>
			<h2 className='text-sky-500 font-black text-3xl text-center md:text-white mb-5'>{tareas && tareas.length ? "Tareas" : "No hay Tareas"}</h2>

			{tareas.map(tarea => (
				<Tarea
					key={tarea.id}
					tarea={tarea}
					setTarea={setTarea}
					eliminarTarea={eliminarTarea}
				/>
			))}
			

		</div>
	)
}

export default ListadoTarea