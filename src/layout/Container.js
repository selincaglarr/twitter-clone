import React from 'react'
import '../index.css';

const Container = ( {childeren}) => {
  return (
    <div className='flex min-h-screen max-w-7xl mx-auto  border'>
    {childeren}
    </div>
  )
}

export default Container