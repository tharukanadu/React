import React from 'react'

const Dashboard = () => {
  return (
    <div id='mainPlate' className='bg-indigo-600 w-full h-screen'>
      <div id='navBar'>App</div>
        <div>
            <button>Customer</button>
            <button>Item</button>
            <button>Order</button>
        </div>
    </div>
  )
}

export default Dashboard