import './ProductComponents.css'

function listSize(props) {
  const {size} = props
    return (
      <div className="my-auto list-size cursor-pointer">
        <div>{size}</div>
    </div>
    )
  }
  
export default listSize;