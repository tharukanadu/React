import React from 'react'
import click from '../../assets/img/tick.jpg';
import './Item.css'

const Item=()=> {
  return (
    <div>
        <div id='Item_plate'>
            <h1>Item Form</h1>
            <div>
                text
            </div>
            <div id='buttonSet'>
                <button onClick="openPop()">Save</button>
                <button>Update</button>
                <button>Delet</button>
                <button>GetAll</button>
                <div id='popup'>
                  <img src={click} alt="" />
                  <h2>Thank you!</h2>
                  <p>Your detail has been Success</p>
                  <button type='butoon' id='okBtn' onClick="closePop()">OK</button>
                </div>
            </div>
        </div>
    </div>
  )
}




export default Item