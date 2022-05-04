import './App.css'
import Init from './components/Init'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa.js';
import List from './components/List';
import Event from './components/Event';
import Forms from './components/Forms';


function App() {

  const name = "Guilherme";
  const newname = name.toUpperCase();

  function sum(...num){
    
    let som = 0;  

    for(let i of num) 
    {som += i} 
    return som

}

  const url = 'https://via.placeholder.com/150'

  return (
    
    <div className="App">

    <h2>Alterando o JSX</h2>
    <p>Olá, {newname}</p>
    <p>soma: {sum(2, 3)}</p>
    <img src={url} alt="Minha Imagem"/>
    <Init/>
    <Event/>
    <Forms/>
    </div>

  );
}

export default App;
