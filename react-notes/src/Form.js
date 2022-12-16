function Form() {
    function Submit(e) {
      e.preventDefault();
      console.log("Create Note");
    }
  
    return (
      <form onSubmit={Submit}>
        <textarea></textarea>
        <button type='submit'>Create Note</button>
      </form>
    );
  
  }
  
  
  export default Form;