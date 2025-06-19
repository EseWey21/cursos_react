import { useContext, createContext, useState } from 'react';
import './App.css';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme} // <-- corregido aquí
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider> {/* <-- corregido aquí */}
      <div style={{ padding: '20px' }}>
        <h1>Mi aplicación con tema dinámico</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
