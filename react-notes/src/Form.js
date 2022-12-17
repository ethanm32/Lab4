import { useRef, useState } from "react";

function Form() {
    let counter = 0;
    const textnote = useRef(null);
    const [notes, setNotes] = useState(['','']);
    function Submit(e) {
        e.preventDefault();
        setNotes(current => [...current, textnote.current.value])

    }
  
    return (
      <form onSubmit={Submit}>
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