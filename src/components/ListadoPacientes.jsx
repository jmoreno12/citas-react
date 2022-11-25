import React from 'react'
import Pacientes from './Pacientes'
import { useEffect } from 'react'
function ListadoPacientes({pacientes,setPaciente,eliminarr}) {



  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto' >
   
   {pacientes && pacientes.length ? (

<>

<h1 className='font-black text-3xl text-center' >Listado Paciente</h1>
    <p className='text-lg mt-5 text-center mb-10'>
  Administra tus {''}
  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
</p>
    
{pacientes.map( paciente=>(

<Pacientes
key={paciente.id}
pacientes={paciente}
setPaciente={setPaciente}
eliminarr={eliminarr}
/>
)

)}
</>


   )
   
   
   : (

    <>
    <h1 className='font-black text-3xl text-center' >No hay  Paciente</h1>
    <p className='text-lg mt-5 text-center mb-10'>
  Administra tus {''}
  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
</p>
    </>
   )}
   
   
 


 

    </div>
  )
}

export default ListadoPacientes