import React from 'react';

export default function Error({mensaje}) {
  return (
    <>
   <div className='bg-red-800 text-white text-center p-3 uppercase font mb-3 rounded-md'>
    <p>{mensaje}</p>
  </div>
  
    </>
  );
}
