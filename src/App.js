import './App.css';
import react, { useState } from 'react';
import './todolists';
import Todolists from './todolists';
function App() {
  const [inputList, setinputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (e) => {
    setinputList(e.target.value)
  };
  const listOfItems=()=>{
    setItems((olditems)=>{
      return [...olditems, inputList];
    });
    setinputList(" ");
  };
  const deleteitems =(id)=>{
    console.log("deleted")
    setItems((olditems)=>{
      return olditems.filter((arrEle, index)=>{
        return index !==id;
      });
    });
};
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TODO LIST</h1>
        <br />
        <input type="text" placeholder='Enter Items' onChange={itemEvent} value={inputList}/>
        <button className="addbtn" onClick={listOfItems}> + </button>
        <br /><br />
          <ol>
          {
            Items.map((i, index)=>{
             return <Todolists 
              text={i}
              key={index}
              id={index}
              onSelect={deleteitems}
              />
            })
          }
          </ol>
      </div>
    </div>
  );
};

export default App;
