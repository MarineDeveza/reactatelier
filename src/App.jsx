import './App.css'
import houses from "./data/houses";
import HouseCard from './components/HouseCard';

const App = ()=> {

  return (
    <div className="App">
        {houses.map((house) => (
          <HouseCard house={house} key={house.id}/>
        ))}
    </div>
  )
}

export default App
