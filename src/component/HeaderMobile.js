import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const HeaderMobile = () => {
    return (
        <div className="d-inline-block d-md-none">
        <div className="menu-open-button menu" onClick={() => {}} id="myBtn">
          <span className="lines line-1" />
          <span className="lines line-2" />
          <span className="lines line-3" />
        </div>
        <div id="myModal" style={styles.modal}>
          <div className="modal-content">
            <span className="close" />
            <nav className="menu">
              <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
              <label className="menu-open-button" htmlFor="menu-open">
                <span className="lines line-1" />
                <span className="lines line-2" />
                <span className="lines line-3" />
              </label>
              <Link to="/gioithieu" className="menu-item blue"><i class="fab fa-accusoft"></i></Link>
              <Link to="/sanpham" className="menu-item green"><i class="fas fa-cart-plus"></i></Link>
              <Link to="/lienhe" className="menu-item orange"><i class="fas fa-phone"></i></Link>
              <Link to="/trangchu" className="menu-item lightblue"><i class="fa fa-home"/></Link>
            </nav>
          </div>
        </div>
      </div>
    );
};
const styles = {
    modal:{"position":"fixed","zIndex":"2","left":"0","top":"0","overflow":"auto","backgroundColor":"rgba(0,0,0,0.6)"}
}
export default HeaderMobile;