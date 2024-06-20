
import './App.css'
import Counter from './Components/Counter'

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='block'>
        <h1 className="text-3xl font-bold ">
          Hello world!
        </h1>
        <Counter />
      </div>
    </div>
  )
}

export default App
