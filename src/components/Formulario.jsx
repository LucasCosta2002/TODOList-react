import { useState, useEffect } from "react"
import Error from "./Error"

function Formulario({tareas,setTareas, tarea, setTarea}) {

	const [titulo, setTitulo] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [ingreso, setIngreso] = useState('')
	const [error, setError] = useState(false)

	useEffect(() => { //reescribir el formulario con lo que hay en el state de tarea
		if(Object.keys(tarea).length > 0){
			setTitulo(tarea.titulo)
			setDescripcion(tarea.descripcion)
		}
	}, [tarea])
	
	function generarId(){ //generar id para pasarlo como key cuando imprmimos las tareas con un map
		const random = Math.random().toString(36).substring(2)
		const fecha = Date.now().toString(36)
		return fecha + random
	}

	function handleSubmit(e) {
		e.preventDefault()
		if([titulo, descripcion].includes('')){ //comprobar que el form este lleno
			setError(true)
			setTimeout(() => {
				setError(false)
			}, 4000);
			return
		}
		setError(false)

		const objetoTarea ={ //Crear el objeto para pasarlo a otros componentes para imprimirlos
			titulo,
			descripcion,
			ingreso : new Date().toLocaleDateString('es-AR')
		}

		if(tarea.id){ //comprobar si editamos o agregamos un nuevo registro
			objetoTarea.id = tarea.id //el id que esta en el registro previo lo asigno al nuevo, para editar el mismo registro

			//el objeto del form es otro al que está almacenado, itero y compruebo si tiene el mismo id entonces estoy editando
			const tareaActualizada = tareas.map(tareaState => tareaState.id === tarea.id ? objetoTarea : tareaState)
			// lo reescribo
			setTareas(tareaActualizada)
			// limpio el anterior
			setTarea({})
		}else{ 
			//nuevo registro
			objetoTarea.id =  generarId() //si el registro no tiene id, como es uno nuevo lo genero y lo asigno al objeto 
			setTareas([...tareas, objetoTarea]); //tomar una copia anterior para no reescribir el objeto
		}

		//volver los states a vacios
		setTitulo('')
		setDescripcion('')
		setIngreso('')
	}

	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="text-sky-500 font-black text-3xl text-center md:text-white mb-5">Registro de Tareas</h2>
			
			<form 
				className="bg-white shadow-md rounded-lg p-5 mb-5"
				onSubmit={handleSubmit}
				>
				{error && <Error/>}
			
				<div className="mb-5">
					<label htmlFor="titulo" className="block text-sky-500 font-black uppercase">Título de la Tarea</label>
					<input 
						type="text" 
						id="titulo" 
						placeholder="Título" 
						className="border-2 w-full p-2 mt-2 rounded-md text-gray-500"
						value={titulo} //asignamos el valor inicial
						onChange={ e => setTitulo(e.target.value)} //leemos el valor
						/>
				</div>
				<div className="mb-5">
					<label htmlFor="descripcion" className="block text-sky-500 font-black uppercase mb-2">Descripción</label>
					<textarea 
						name="descripcion" 
						id="descripcion"  
						className="p-2 text-gray-500 w-full"
						placeholder="Leer libro X de la página 10 a la 25"
						value={descripcion}
						onChange={ e => setDescripcion(e.target.value)}
						/>
				</div>

				<input type="submit" className="bg-sky-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-sky-500 transition-all rounded-md" value={tarea.id ? "Editar Tarea" : "Agregar Tarea"}/>
			</form>
		</div>
	)
}

export default Formulario