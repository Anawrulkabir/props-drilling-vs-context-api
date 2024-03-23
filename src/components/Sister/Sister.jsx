import Husband from '../Husband/Husband'
import PropTypes from 'prop-types'

const Sister = ({ watch }) => {
  return (
    <div className="flex flex-col gap-6 border-2 border-orange-500 rounded-lg p-6 font-semibold">
      <p> Sister</p>
      <div className="flex items-center justify-center gap-4 ">
        <Husband watch={watch}></Husband>
      </div>
    </div>
  )
}
Sister.propTypes = {
  watch: PropTypes.string,
}

export default Sister
