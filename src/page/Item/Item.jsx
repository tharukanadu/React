import React from 'react'
import click from '../../assets/img/tick.jpg';
import './Item.css'
import  './javascript/main.js'


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


<script>
let popup = document.getElementById("popup");
function name(params) {
  
}


</script>



export default Item