import './App.css'
import Header from './components/Header'

function App() {

  const internName = import.meta.env.VITE_INTERN_NAME

  return (
    <>
      <section>
        <h1>Developer Stamina Dashboard</h1>

        <Header />

        <h2>{internName}</h2>

        <p>React environment setup completed successfully.</p>
      </section>
    </>
  )
}

export default App