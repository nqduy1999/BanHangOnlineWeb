import React from 'react';

import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
        <div className="block-4 text-center border">
          <figure className="block-4-image">
          <Link to={"/chitiet?id="+ props.id}><img style={{width: '100%', height: "15rem"}} src={props.url} alt={props.content} className="img-fluid" /></Link>
          </figure>
          <div className="block-4-text" style={{height: "7rem"}}>
            <h3><Link to={"/chitiet?id="+ props.id}>{props.name}</Link></h3>
            <div className="d-inline">
            <p className="text-warning font-weight-bold">{props.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;
