import { useState } from "react";
import ListCard from '../../components/Product/listCard'
import ListSize from '../../components/Product/listSize'
import KetPengiriman from '../../components/Product/ketPengiriman'
import './Product.css'

const listSepatuHitams = [
  {
    id: 1,
    gambar: '../../../public/product-image/hitam1.png',
  },
  {
    id: 2,
    gambar: '../../../public/product-image/hitam2.png',
  },
  {
    id: 3,
    gambar: '../../../public/product-image/hitam3.png',
  },
  {
    id: 4,
    gambar: '../../../public/product-image/hitam4.png',
  },
  {
    id: 5,
    gambar: '../../../public/product-image/hitam5.png',
  },
  {
    id: 6,
    gambar: '../../../public/product-image/hitam6.png',
  },
  {
    id: 7,
    gambar: '../../../public/product-image/hitam7.png',
  },
  {
    id: 8,
    gambar: '../../../public/product-image/hitam8.png',
  }
];

const listWarnas = [
  {
    id: 1,
    gambar: '../../../public/product-image/air-hitam-besar.png',
  },
  {
    id: 3,
    gambar: '../../../public/product-image/air-putih-besar.png',
  },
  {
    id: 3,
    gambar: '../../../public/product-image/air-hitam-putih-besar.png',
  },
]

const listSizeProducts = [
  {
    id: 1,
    size: 'EU 40',
  },
  {
    id: 2,
    size: 'EU 40.5',
  },
  {
    id: 3,
    size: 'EU 41',
  },
  {
    id: 4,
    size: 'EU 42',
  },
  {
    id: 5,
    size: 'EU 42.5',
  },
  {
    id: 6,
    size: 'EU 43',
  },
  {
    id: 7,
    size: 'EU 44',
  },
  {
    id: 8,
    size: 'EU 44.5',
  },
  {
    id: 9,
    size: 'EU 45',
  },
  {
    id: 10,
    size: 'EU 45.5',
  },
  {
    id: 11,
    size: 'EU 46',
  },
  {
    id: 12,
    size: 'EU 47',
  },
  {
    id: 13,
    size: 'EU 47.5',
  },
]

function Product() {
  const [selectProduct, setValue] = useState(listSepatuHitams[0].gambar);
  const [pengiriman, setPengiriman] = useState(false);

  function selectListCard(value){
    setValue((selectProduct) => selectProduct=value);
  }

  function infoPengiriman(){
    if(pengiriman == true){
      setPengiriman((pengiriman) => pengiriman = false) 
    }
    else if(pengiriman == false){
      setPengiriman((pengiriman) => pengiriman = true) 
    }
  }
    return (
      <div className="container">
        <div className="aside">
            <div className='list-card overflow-auto'>
              {listSepatuHitams.map((listSepatuHitam) => (
                <ListCard key={listSepatuHitam.id} gambar={listSepatuHitam.gambar} selectListCard={selectListCard}/>
              ))}
            </div>
            <div className='big-card'>
              <img src={selectProduct} alt="" />
            </div>
        </div>
        <div className="main overflow-auto">
          <div className="nama-product"> Nike Air Max Pulse</div>
          <div className='kategori-product'>Men's Shoes</div>
          <div className='harga-product'>Rp 2,379,000</div>
          <div className='warna-product'>
            {listWarnas.map((listWarna) => (
              <ListCard key={listWarna.id} gambar={listWarna.gambar} selectListCard={selectListCard}/>
            ))}
          </div>
          <div className='select-size'>Select Size</div>
          <div className='size'>
            {listSizeProducts.map((listSizeProduct) => (
              <ListSize size={listSizeProduct.size}/>
            ))}
          </div>
          <div className='add-to-bag'><div>Add to Bag</div></div>
          <div className='favourite'><div>Favourite</div></div>
          <div className='ket-product'>
            <p>The Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and vacuum-sealed accents keep 'em looking fresh and clean, while colours inspired by the London music scene give your look the edge. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.</p>
            <div>
              <ul class="list-disc">
                <li>Colour Shown: White/Summit White/White</li>
                <li>Style: DR0453-101</li>
              </ul>
            </div>
          </div>
          <div className='pengiriman'>
            <div className='text-lg cursor-pointer pengiriman-head' onClick={infoPengiriman}>
              <h2 className="font-bold">Pengiriman dan Pengembalian Gratis</h2>
              <img src="../../../public/product-image/angle-small-down.png" alt="" />
            </div>
            <KetPengiriman pengiriman={pengiriman}/>
          </div>
        </div>
      </div>
    )
  }
  
export default Product;