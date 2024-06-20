
import './App.css'
import Todos from './Components/Todos'

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='block'>
        <h1 className="text-3xl font-bold ">
          Hello world!
        </h1>
        <Todos />
      </div>
    </div>
  )
}

export default App
