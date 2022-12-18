import { useRef, useState} from "react";
import React from "react";


function Notes() {
    const textnote = useRef(null);
    const colours = useRef(null);
    const[selectColour, setSelectColour] = useState('');
    const[selectBg, setSelectBg] = useState('')
    const [notes, setNotes] = useState(['','']);
    function Submit(e) {
        e.preventDefault();
        setNotes(current => [...current, textnote.current.value])
        console.log(colours.current.value)
        const colour = colours.current.value;
        setSelectBg(colour)
        
        
        
    }

    function handleChange(e) {
      setSelectColour(e.target.value);

    }

    const deleteNote = (index) => {
      console.log(index)
      setNotes((notes) => 
        notes.filter((_, i) => i !== index)
      );
      

  };

    
    return (
      <form onSubmit={Submit}>
        <select
          ref={colours}
          id="colours"
          value={selectColour}
          onChange={handleChange}
          >
            <option value={'blue'}>Blue</option>
            <option value={'red'}>Red</option>
            <option value={'yellow'}>Yellow</option>
            <option value={'Green'}>Green</option>
        </select>
        <input 
        ref={textnote} 
        type="text" 
        id="text-note"/>
        <button type='submit'>Create Note</button>
        <div>
          
        {notes.map((element,index) => {
            return (
                <div contentEditable={true} key={index}  id='note' style={{ backgroundColor: selectBg}}>
                  {element}
                  <div >
                  <button onClick={() => deleteNote(index)}>Delete</button>  
                  </div>
                </div>
                
            );
            
        })}
        
        </div>
      </form>
    );
    
  }
  
 
  
  export default Notes;