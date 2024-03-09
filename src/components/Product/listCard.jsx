import './ProductComponents.css'

function listSize(props) {
    const {gambar, selectListCard} = props
    return (
      <div className="card-kecil cursor-pointer" onClick={() => selectListCard(gambar)}><img src={gambar} alt='' /></div>
    )
  }
  
export default listSize;