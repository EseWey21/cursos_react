import Button from './components/Button'
import Counter from './components/Counter'
import './App.css'

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function App() {
  const handleClick = () => alert("Ya estoy clickeado !")
  console.log(greet("World"));

  return (
    <>
      <Button onclick={handleClick} label="Click me" />
      <Counter />
    </>
  )
}
export default App
