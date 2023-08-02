import './App.css';
import 'component-lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Angular standalone-custom-element test!
        </p>
        <form id="user-form">
          <dbs-input label="Name" type="text" value="Hello world"></dbs-input>
          <dbs-input label="Email" type="email" value="Hello world"></dbs-input>
          <dbs-input label="Message" type="text" value="Hello world"></dbs-input>
          <button onClick={getFormValues}>Submit</button>
        </form>
      </header>
      
    </div>
  );
}


function getFormValues() {
  const form = document.getElementById("user-form");

  Array.from(form.querySelectorAll("dbs-input")).forEach((input) => {
    input.addEventListener("valueChange", (e) => {
      console.log(e.target.value);
    });
  });

  const data = Array.from(form.querySelectorAll("dbs-input")).map(
    (input) => {
      return {
        label: input.label,
        value: input.value,
      };
    }
  );

  console.log(data);
}

export default App;
