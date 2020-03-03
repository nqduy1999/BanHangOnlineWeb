import React from 'react';

import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
        <div className="block-4 text-center border">
          <figure className="block-4-image">
          <Link to={"/chitiet?id="+ props.id}><img src={`data:image/jpeg;base64,${props.data}`} alt={props.content} className="img-fluid" /></Link>
          </figure>
          <div className="block-4-text p-4">
            <h3><Link to={"/chitiet?id="+ props.id}>{props.name}</Link></h3>
            <p className="mb-0">{props.description}</p>
            <p className="text-primary font-weight-bold">{props.price}</p>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;