import React from 'react'
import SalesItem from './SalesItem'
import Analytics from './Analytics'

function RightColumn() {
  return (
    <div className='w-full p-2'>
      <SalesItem />
      <Analytics />
    </div>
  )
}

export default RightColumn