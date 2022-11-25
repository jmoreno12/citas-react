import React from 'react'

export default function Pacientes({pacientes,setPaciente,eliminarr}) {

const {nombre,propetario,email,fecha,sintomas,id}=pacientes

const handleEliminar =()=>{
  const respuesta = confirm('Deseas Eliminar el paciente')

  if(respuesta){
   eliminarr(id)
  }
 }


  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>

    <p className='font-bold m-3 text-gray-700 uppercase'>Nombre: {''}
    <span className='font-normal normal-case'>{nombre}</span>
    </p>
    <p className='font-bold m-3 text-gray-700 uppercase'>Propetario: {''}
    <span className='font-normal normal-case'>{propetario}</span>
    </p>
    
    <p className='font-bold m-3 text-gray-700 uppercase'>Email: {''}
    <span className='font-normal normal-case'>{email}</span>
    </p>
    <p className='font-bold m-3 text-gray-700 uppercase'> Fecha Alta: {''}
    <span className='font-normal normal-case'>{fecha}</span>
    </p>
    <p className='font-bold m-3 text-gray-700 uppercase'>Sintomas: {''}
    <span className='font-normal normal-case'>{sintomas}</span>
    </p>


    <div className='flex justify-between'>

   <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
   type="button"
   onClick={()=>setPaciente(pacientes)}
   >Editar

   </button>
   <button className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg' 
   
   type="button"
   onClick={handleEliminar}>Eliminar

   </button>
    </div>
         </div>
  )
}
