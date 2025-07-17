import React from 'react'

const SubTitle = ( { title = ""}) => {
  return (  
    <div className='w-full'>
        <h4 className='text-4xl text-lime-800 underline font-semibold'>{  title  } </h4>
    </div>
  )
}

export default SubTitle