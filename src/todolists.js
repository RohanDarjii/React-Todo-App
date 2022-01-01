import React from 'react'

function Todolists(props) {
    
    return (
        <div className='lists'>
            <li>{props.text}</li>
            <button onClick={()=>{props.onSelect(props.id)}} className="closebtn">X</button>
        </div>
    )
}

export default Todolists;
