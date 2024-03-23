import { createContext } from 'react'
import GrandFather from '../GrandFather/GrandFather'
import GrandMother from '../GrandMother/GrandMother'
import PropTypes from 'prop-types'

export const CarContext = createContext('Audi') // using context api

const GrandGrandFather = () => {
  const watch = 'Rolex' // using props drilling
  const car = 'Audi'
  return (
    <div className=" flex flex-col gap-6 border-2 border-orange-500 rounded-lg p-6 m-6 font-semibold">
      <CarContext.Provider value="Audi">
        <p>
          GrandGrandFather{' '}
          <span className="bg-orange-400 rounded-sm text-center text-[10px] p-1">
            {watch}
          </span>
          <span className="bg-orange-600 rounded-sm text-center text-[10px] p-1 m-1">
            {car}
          </span>
        </p>

        <div className="flex items-center justify-center gap-4 ">
          <GrandFather></GrandFather>
          <GrandMother watch={watch}></GrandMother>
        </div>
      </CarContext.Provider>
    </div>
  )
}
GrandGrandFather.propTypes = {
  watch: PropTypes.string,
}

export default GrandGrandFather
