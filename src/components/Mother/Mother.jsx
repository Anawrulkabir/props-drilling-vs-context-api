import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import PropTypes from 'prop-types'

const Mother = ({ watch }) => {
  return (
    <div className="flex flex-col gap-6 border-2 border-orange-500 rounded-lg p-6 font-semibold">
      <p> Mother</p>
      <div className="flex items-center justify-center gap-4 ">
        <Brother></Brother>
        <Sister watch={watch}></Sister>
      </div>
    </div>
  )
}
Mother.propTypes = {
  watch: PropTypes.string,
}

export default Mother
