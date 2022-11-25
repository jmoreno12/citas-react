import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from 'react'
import Pacientes from "./components/Pacientes"

function App() {
  
const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [] )

const [paciente, setPaciente] = useState({})

useEffect(() => {
  console.log("componente listo")
localStorage.setItem('pacientes',JSON.stringify(pacientes))
  
}, [pacientes])


const eliminarr = id=>{
const pacientesActualizados = pacientes.filter(paciente => paciente.id !==id)
setPacientes(pacientesActualizados)
}
  return (
    <div className="container mx-auto mt-20">
   <Header
   
   
   />
   <div className="mt-12 md:flex">
   <Formulario
   
  
   pacientes={pacientes}
   setPacientes={setPacientes}
   paciente={paciente}
   setPaciente={setPaciente}
   />


   <ListadoPacientes
   pacientes={pacientes}
   setPaciente={setPaciente}
   eliminarr={eliminarr}
   
   />
   </div>
  
    </div>
  )
}

export default App
