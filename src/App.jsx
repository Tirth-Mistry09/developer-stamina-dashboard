import './App.css'
import Header from './components/header.jsx'
import SkillList from './components/skillList.jsx'
import Stamina from './components/stamina.jsx'
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