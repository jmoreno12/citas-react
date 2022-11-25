import React from 'react'
import { useEffect, useState } from 'react'
import Error from './Error'




export default function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  const [nombre, setNombre] = useState('')
  const [propetario, setPropetario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

const generarID =()=>{
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}

useEffect(() => {
if(Object.keys(paciente).length > 0){
  setNombre(paciente.nombre)
  setPropetario(paciente.propetario)
  setEmail(paciente.email)
  setFecha(paciente.fecha)
  setSintomas(paciente.sintomas)
  
}
}, [paciente])

  
const handleSubmit = (e)=>{
  e.preventDefault()
  if([nombre,propetario,email,fecha,sintomas].includes('')){
setError(true)
 
    return
  }
setError(false)
const objetoPacientes = {
  nombre,
  propetario,
  email,
  fecha,
  sintomas


}
  if (paciente.id) {
  objetoPacientes.id=paciente.id
  const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
  setPacientes(pacientesActualizados)
  setPaciente({})
  }else{
  objetoPacientes.id=generarID()
  setPacientes([...pacientes,objetoPacientes])
  
}
//console.log(objetoPacientes)

setEmail('')
setNombre('')
setPropetario('')
setFecha('')
setSintomas('')
}

  return (
    <div className='md:w-1/2 lg:w-2/5'>
    <h2 className='font-black text-3xl text-center'>Formulario</h2>

<p className='text-lg mt-5 text-center mb-10'>
  Anade Pacientes y {''}
  <span className='text-indigo-600 font-bold'>Administralos</span>
</p>

<form  onSubmit={handleSubmit}
className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

  {error && <Error mensaje='Todos los campos son Obligatorios'/>}
<div className='mb-5' >

<label htmlFor='mascota' className='block text-gray-700 uppercase font-bold' >Nombre Mascota</label>
<input 
id='mascota'
type="text"
placeholder='Nombre de la Mascota'
className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
value={nombre}
onChange={(e)=> setNombre(e.target.value)}
/>
</div>
<div className='mb-5' >

<label htmlFor='propetario' className='block text-gray-700 uppercase font-bold' >Nombre del Propetario</label>
<input 
id='propetario'
type="text"
placeholder='Nombre del Propetario'
className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
value={propetario}
onChange={(e)=> setPropetario(e.target.value)}
/>
</div>
<div className='mb-5' >

<label htmlFor='email' className='block text-gray-700 uppercase font-bold' >Correo Electronico</label>
<input 
id='email'
type="text"
placeholder='Correo Electronico'
className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
value={email}
onChange={(e)=> setEmail(e.target.value)}
/>
</div>

<div className='mb-5' >

<label htmlFor='fecha' className='block text-gray-700 uppercase font-bold' >Fecha de Alta</label>
<input 
id='fecha'
type="date"
placeholder='Fecha de Alta'
className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
value={fecha}
onChange={(e)=> setFecha(e.target.value)}
/>
</div>

<div className='mb-5' >

<label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold' >Fecha de Alta</label>
<textarea id='sintomas'placeholder='Describe los Sintomas'
className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
value={sintomas}
onChange={(e)=> setSintomas(e.target.value)}
>

  
</textarea>

</div>

<input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
 value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
/>

</form>
    </div>
  )
}
