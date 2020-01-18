import React from 'react';
import bao_thu_a3 from '../../resource/images/bao_thu_a3.jpg';
import { Link } from 'react-router-dom';
const Shop = () => {
    return (
        <div>
<div className="site-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={bao_thu_a3} alt="Image" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2 className="text-black">Bao thư A3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
        <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
        <p><strong className="text-primary h4">4000đ</strong></p>
        <div className="mb-5 ml-5">
          <div className="input-group mb-3" style={{maxWidth: 120}}>
            <div className="input-group-prepend">
              <button className=" btn-outline-primary js-btn-minus" type="button">−</button>
            </div>
            <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div className="input-group-append">
              <button className=" btn-outline-primary js-btn-plus" type="button">+</button>
            </div>
          </div>
        </div>
        <p><Link to="/giohang" className="buy-now  btn btn-sm btn-primary">Thêm vào giỏ</Link></p>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Shop;