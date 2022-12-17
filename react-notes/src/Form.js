import { useRef, useState } from "react";
function Form() {
    let counter = 0;
    const textnote = useRef(null);
    const colours = useRef(null);
    const[selectColour, setSelectColour] = useState('');
    const [notes, setNotes] = useState(['','']);
  
    function Submit(e) {
        e.preventDefault();
        setNotes(current => [...current, textnote.current.value])
        console.log(colours.current.value)
        
        
    }

    function handleChange(e) {
      setSelectColour(e.target.value);
    }
    
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
                <div key={index}>
                    <p>{element}</p>
                </div>
            );
        })}
        </div>
      </form>
    );
  
  }
  
  
  export default Form;