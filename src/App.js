import './App.css';

function App() {
  let requestOptions = {
    method: 'GET'
  };
  
  fetch("http://localhost:9000", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
  return (
    <div className="App">
      Prueba
    </div>
  );
}

export default App;
