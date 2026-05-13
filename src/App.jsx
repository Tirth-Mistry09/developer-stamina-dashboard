import './App.css'
import Header from './components/Header.jsx'
import SkillList from './components/SkillList.jsx'
import Stamina from './components/Stamina.jsx'
function App() {

  const internName = import.meta.env.VITE_INTERN_NAME
  const skills = [
  {name:"JavaScript", level:95},
  {name:"React", level:80},
  {name:"Node JS", level:75}
]

  return (
    <>
      <section>
        <h1>Developer Stamina Dashboard</h1>

        <Header />
        <SkillList skills={skills} />
        <Stamina />

        <h2>{internName}</h2>

        <p>React environment setup completed successfully.</p>
      </section>
    </>
  )
}

export default App