import { useContext } from 'react'
import { CarContext } from '../GrandGrandFather/GrandGrandFather'
const Brother = () => {
  const car = useContext(CarContext)
  return (
    <div className="flex border-2 border-orange-500 rounded-lg p-6 font-semibold">
      <p> Brother</p>
      <span className="bg-orange-600 rounded-sm text-center text-[10px] p-1 m-1">
        {car}
      </span>
    </div>
  )
}

export default Brother
