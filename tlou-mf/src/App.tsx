import './App.css'
import reactLogo from './assets/react.svg'
import { TlouCharacters } from './TlouCharacters'
import viteLogo from '/vite.svg'

export const App = () => (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>The last of us microfrontend</h1>
      <div className="card">
        <TlouCharacters characters={[]} />
      </div>
    </>
  )

