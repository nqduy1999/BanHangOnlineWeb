import React, { useState, useEffect } from "react";
import { updateProduct, getProductDetail } from "../../../services/AdminService";
import { useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { alertNotify } from "../../../untils/alert";
const Update = (props) => {
  const id = props.match.params.id;
  const { register, handleSubmit } = useForm();
  const [product, setProduct] = useState({
    name:"",
    description:"",
    price:"",
    inventory:"",
    supplier:{},
    category:{}
  })
  const handleInput=(e)=>{
    setProduct({...product,
      [e.target.name]:e.target.value
    })
    console.log(product); // qua kia
  }
  const state = useSelector(state => state.admin);
  useEffect(() => {
    if(state.product){
      console.log(state.product);
      setProduct(state.product)
    }
  },[]); // hoc react bao lau r :) a quen ,ko 
  //de rtong :) ua binh thuong t xoa cai nay no van chay dc ma :) 
  const onSubmit = (data) =>{
    setProduct(
      {
        ...product,
        name: data.name,
        description:data.description,
        price:data.price,
        inventory:data.inventory,
        supplier:{
          name:data.supllierName,
          description:data.supllierDescription
        },
        category:{
          name:data.categoryName
        }
      }
    )
    updateProduct(id, product)
    .then((res) => {
      console.log(res.data);
      if(res.data.code === 0 ){
        alertNotify("Thông Báo", res.data.message,"success")
        props.history.replace("admin/danhsachsanpham");
      }  
      else{
        alertNotify("Thông Báo", res.data.message, "warning")
      }
    })
  }
  return (
    <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
      <div className="wrapper wrapper--w680">
        <div className="card card-1">
          <div className="card-heading" />
          <div className="card-body">
            <h2 className="title">Cập nhật sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <label htmlFor="id">Mã Sản Phẩm</label>
                <input
                  className="input--style-1"
                  id="id"
                  type="text"
                  readOnly
                  value={id}
                />
              </div>
              <div className="row row-space">
                <div className="col">
                  <div className="input-group">
                  <label htmlFor="">Tên Sản Phẩm</label>
                    <input
                      className="input--style-1 js-datepicker"
                      type="text"
                      name="name"
                      ref={register}
                      onChange={handleInput}
                      value={product.name ? product.name: ""}
                    />
                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                  <label htmlFor="">Mô tả Sản Phẩm</label>
                  <input
                      className="input--style-1 js-datepicker"
                      type="text"
                      name="description"
                      onChange={handleInput}
                      ref={register}
                      value={product.description ? product.description: ""}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col">
                  <div className="input-group">
                  <label htmlFor="">Giá Sản Phẩm</label>
                    <input
                      className="input--style-1"
                      type="text"
                      name="price"
                      onChange={handleInput}
                      value={product.price ? product.price: ""}
                      ref={register}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                  <label htmlFor="">Số lượng Sản Phẩm</label>
                    <input
                      className="input--style-1"
                      type="text"
                      name="inventory"
                      onChange={handleInput}
                      value={product.inventory ? product.inventory: ""}
                      ref={register}
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-center">Nhà cung cấp</h1>
              <div className="row row-space">
                  <div className="col">
                  <div className="input-group">
                  <label htmlFor="">Tên nhà Cung Cấp</label>
                    <input
                      className="input--style-1"
                      type="text"
                      name="supplierName"
                      onChange={handleInput}
                      value={product.supplier.name ? product.supplier.name: ""}
                      ref={register}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                  <label htmlFor="">Mô tả nhà cung cấp</label>
                    <input
                      className="input--style-1"
                      type="text"
                      name="supplierDes"
                      onChange={handleInput}
                      value={product.supplier.description ? product.supplier.description: ""}
                      ref={register}
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-center">Loại Hàng</h1>
              <div className="input-group">
                  <label htmlFor="">Tên loại hàng</label>
                    <input
                      className="input--style-1"
                      type="text"
                      name="categoryName"
                      onChange={handleInput}
                      value={product.category.name ? product.category.name: ""}
                      ref={register}
                    />
                  </div>
              <div className="p-t-20">
                <button className="btn btn--radius btn--green" type="submit">
                  Cập Nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
