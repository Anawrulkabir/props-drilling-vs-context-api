import './App.css'
import GrandGrandFather from './components/GrandGrandFather/GrandGrandFather'

function App() {
  return (
    <>
      <p className="text-[50px]">Props drilling vs Context api</p>
      <div className="flex  border-orange-500 rounded-lg  font-semibold">
        <GrandGrandFather></GrandGrandFather>
      </div>
    </>
  )
}

export default App
