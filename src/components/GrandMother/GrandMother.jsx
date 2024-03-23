import Father from '../Father/Father'
import Mother from '../Mother/Mother'
import PropTypes from 'prop-types'

const GrandMother = ({ watch }) => {
  return (
    <div className="flex flex-col gap-6 border-2 border-orange-500 rounded-lg p-6 font-semibold">
      <p>GrandMother</p>
      <div className="flex items-center justify-center gap-4 ">
        <Father></Father>
        <Mother watch={watch}></Mother>
      </div>
    </div>
  )
}
GrandMother.propTypes = {
  watch: PropTypes.string,
}

export default GrandMother
