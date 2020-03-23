import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';

const Update = (props) => {
  const { register, handleSubmit } = useForm();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    inventory: "",
    supplier: {
      name:"",
      description:""
    },
    category: {
      name:""
    }
  });
  const handleInput=(e)=>{
    setProduct({...product,
      [e.target.name]:e.target.value
    })
    console.log(product); // qua kia
  }
  const state = useSelector(state => state.admin);
  useEffect(() => {
    if(state.product){
      setProduct(state.product)
      console.log(product);
    }
  },[state]);
  const onSubmit = (data) =>{
    console.log(data);
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
      if(state.product !==null){
        props.handleUpdateProduct(state.product.id, product)
      }
      else{
      props.handleAddSubmit(product)
      }
  }
  
    return (
          <div
            className="modal fade right"
            id="capnhat"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            data-backdrop="false"
          >
            <div
              className="modal-dialog modal-full-height modal-right modal-notify modal-info modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  
                </div>
                {/*Body*/}
                <div className="modal-body">
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" className="white-text">
                      ×
                    </span>
                  </button>
                <h1 className="heading lead text-center">{props.updateUser ? "Sửa sản phẩm": "Thêm sản phẩm mới"}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Radio */}
                  <p>
                    <strong>Tên sản phẩm</strong>
                  </p>
                    <input
                      type="text"
                      className="md-text form-control"
                      name="name"
                      ref={register}
                      onChange={handleInput}
                      value={props.updateUser ? product.name : ""}
                      placeholder="Nhập tên sản phẩm"
                    />
                  <p>
                    <strong>Mô tả sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="description"
                      ref={register}
                      className="md-text form-control"
                      onChange={handleInput}
                      value={props.updateUser ? product.description : ""}
                      placeholder="Nhập mô tả sản phẩm"
                    />
                  </div>
                  <p>
                    <strong>Số Lượng</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="inventory"
                      required
                      ref={register}
                      className="md-text form-control"
                      onChange={handleInput}
                      value={props.updateUser ? product.inventory : ""}
                      placeholder="Nhập số lượng sản phẩm"
                    />
                  </div>
                  <p>
                    <strong>Giá</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="price"
                      required
                      ref={register}
                      className="md-text form-control"
                      defaultVaulue={""}
                      onChange={handleInput}
                      value={props.updateUser ? product.price : ""}
                      placeholder="Nhập giá sản phẩm"
                    />
                  </div>
                  <p>
                    <strong>Nhà cung cấp</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="supllierName"
                      required
                      ref={register}
                      className="md-text form-control"
                      onChange={handleInput}
                      value={props.updateUser ? product.supplier.name : ""}
                      placeholder="Nhập tên nhà cung cấp"
                    />
                  </div>
                  <div className="md-form ">
                    <textarea
                      type="text"
                      name="supllierDescription"
                      required
                      rows="3"
                      ref={register}
                      className="md-textarea form-control"
                      onChange={handleInput}
                      value={props.updateUser ? product.supplier.description : ""}
                      placeholder="Nhập mô tả nhà cung cấp"
                    />
                  </div>
                  <p>
                    <strong>Loại sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="categoryName"
                      required
                      ref={register}
                      className="md-text form-control"
                      placeholder="Nhập tên loại sản phẩm "
                      onChange={handleInput}
                      value={props.updateUser ? product.category.name : ""}
                    />
                  </div>
                  <div className="justify-content-center">
                    <hr/>
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    {props.updateUser ? "Sửa" : "Thêm"} 
                    <i class="fa fa-plus"></i>                  
                    </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary waves-effect"
                    data-dismiss="modal"
                  >
                    Cancel
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