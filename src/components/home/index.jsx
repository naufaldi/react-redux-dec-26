
import Button from '../common/button'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
const Home = ({count, setCount}) => {
  return (
    <>
      <div>
        <a rel="noreference noreferrer" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <Button count={count} setCount={setCount} color={'white'}>
       count is
       </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home