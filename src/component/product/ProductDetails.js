import React, { useState, useEffect } from 'react';

import { useLocation, withRouter } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader";

import Loading from '../loading/Loading';
import { addProductToCart } from '../../services/CartServices';
import { getProductDetail } from '../../services/ProductServices';
import { alertNotify } from '../../untils/alert';
const ProductDetails = (props) => {
    // lấy query String
    let useQuery = () => {
      return new URLSearchParams(useLocation().search);
    }
    const id = useQuery();
    // const [quantity, setQuantity] = useState(1);
    // thông báo
    const [message, setMessage] = useState("");
    //loading
    const [loading, setLoading] = useState(true);
    // lấy thông tin chi tiết của sản phẩm
    const [product, setProduct] = useState({});
    const [orderDetail, setOrderDetail] = useState({
      product: product.data,
      unitPrice: 0,
      quantity: 1
    })
    // xử lý input nhập số lượng
    // action tăng là dấu + và giảm là dấu -
    let handleUpdateQuantity = (quantityInput, action) => {
      const quantity = orderDetail.quantity;
      const inventory = product.inventory;
      // các trường hợp tăng giảm phải dừng ở 1 hoặc số lượng tồn kho
      if(action === "tang") {
        if(quantity >= 1 && quantity < inventory) {
          setOrderDetail({...orderDetail,
            product: product,
            unitPrice: product.price * (quantity + 1),
            quantity: quantity + 1
          })
        }
      } else if(action === "giam") {
        if(quantity > 1 && quantity <= inventory) {
          setOrderDetail({...orderDetail,
            product: product,
            unitPrice:product.price * (quantity - 1),
            quantity: quantity - 1
          })

        }
      } else {
        setOrderDetail({...orderDetail,
          product: product,
          unitPrice: product.price * Number(quantityInput),
          quantity: Number(quantityInput)
        })
      }
      // khi nhập vượt quá só lượng tồn hoặc nhỏ hơn 1 sẽ set về mặc định
      if(Number(quantityInput) > inventory) {
        setOrderDetail({...orderDetail,
          product: product,
          unitPrice: product.price * inventory,
          quantity: inventory
        })
      } else if(Number(quantityInput) <= 0) {
        setOrderDetail({...orderDetail,
          product: product,
          unitPrice: product.price * 1,
          quantity: 1
        })
      }
    }
    useEffect(() => {
      setLoading(false);
      getProductDetail(id.get("id")).then((res) => {
        if(res.error !== true && res.data.code === 0) {
          setProduct(res.data.result);
          setOrderDetail({...orderDetail,
            product:  res.data.result,
            unitPrice: res.data.result.price,
            quantity: 1
          })
        }
      })
    }, []);
    // thêm chi tiết hoá đơn vào giỏ hàng
    let onAddOrderDetailsToShoppingCard = () => {
      if(orderDetail.quantity > product.inventory || product.inventory === 0) {
        alertNotify("Thông báo", "Sản phẩm không đủ số lượng" , "warning");
      } else {
        addProductToCart(orderDetail).then((res) => {
          if(res.error !== true && res.data.code !== 0) {
            setMessage(res.data.message);
          } else if(res.error !== true && res.data.code === 0) {
            props.history.push("/giohang"); // direct
          }
        });
      }
    }
    return loading ? <Loading loading={loading}/>  : (
        <div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img  alt="Image" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h2 className="text-black">{product.name}</h2>
                  <p>Mô tả sản phẩm: {product.description}</p>
                  <div>
                  </div>
                  <p className="mb-4">Nhà cung cấp: {product.supplier && product.supplier.name}</p>
                  <p className="mb-4">Mô tả: {product.supplier && product.supplier.description}</p>
                  <p className="mb-4">Số lượng còn: {product.inventory}</p>
                  <p><strong className="text-primary h4">Giá sản phẩm: {product.price}đ</strong></p>
                  <div className="mb-5 ml-5">
                    <div className="input-group mb-3" style={{maxWidth: 120}}>
                      <div className="input-group-prepend">
                        <button className=" btn-outline-primary btn" type="button" onClick={() => {handleUpdateQuantity(1, "giam");}}>−</button>
                      </div>
                      <input type="text" className="form-control text-center" onChange={e => {handleUpdateQuantity(Number(e.target.value), "");}} value={orderDetail.quantity} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <div className="input-group-append">
                        <button className=" btn-outline-primary btn" type="button" onClick={() => {handleUpdateQuantity(1, "tang");}}>+</button>
                      </div>
                    </div>
                  </div>
                  {
                    message ? (
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>) : ""
                  }
                  <p><button className="buy-now  btn btn-sm btn-primary" onClick={onAddOrderDetailsToShoppingCard}>Mua ngay</button></p>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
};

export default withRouter(ProductDetails);