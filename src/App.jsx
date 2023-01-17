import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoTarea from './components/ListadoTarea'

function App() {

	const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) ?? [])
	const [tarea, setTarea] = useState({})
	
	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tareas))
	}, [tareas])
	
	function eliminarTarea(id){
		const tareasActualizada = tareas.filter( tarea => tarea.id !== id )

		setTareas(tareasActualizada)
	}

	return (
		<div className='container mx-auto mt-5'>

			<Header/>
			<div className='mt-12 md:flex'>
				<Formulario
					tareas={tareas}
					setTareas={setTareas}
					tarea={tarea}
					setTarea={setTarea}
				/>
				<ListadoTarea
					tareas={tareas}
					setTarea={setTarea}
					eliminarTarea={eliminarTarea}
				/>
			</div>
		</div>
	)
}

export default App
