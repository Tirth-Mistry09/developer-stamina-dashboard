import './App.css'

function App() {
  const internName = import.meta.env.VITE_INTERN_NAME

  return (
    <>
      <section>
        <h1>Developer Stamina Dashboard</h1>
        <h2>{internName}</h2>
        <p>React environment setup completed successfully.</p>
      </section>
    </>
  )
}

export default App