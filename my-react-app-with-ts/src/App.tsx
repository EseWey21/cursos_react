import Button from './components/Button'
import './App.css'

function App() {
  const handleClick = () => alert("Ya estoy clickeado !")


  return <Button onclick={handleClick} label="Click me"/>
}
  export default App
