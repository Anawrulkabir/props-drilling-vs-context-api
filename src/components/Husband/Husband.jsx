import PropTypes from 'prop-types'
const Husband = ({ watch }) => {
  return (
    <div className="flex border-2 border-orange-500 rounded-lg p-6 font-semibold">
      <p>Husband</p>
      <p>
        Gift :
        <span className="bg-orange-400 rounded-sm text-center text-[10px] p-1">
          {watch}
        </span>
      </p>
    </div>
  )
}
Husband.propTypes = {
  watch: PropTypes.string,
}

export default Husband
