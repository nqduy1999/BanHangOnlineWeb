import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = (props) => {
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
  const [] = useState();
  useEffect(() => {
  })
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
      props.handleAddSubmit(product)
  }
    return (
          <div
            className="modal fade right"
            id="modalPoll-1"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="false"
          >
            <div
              className="modal-dialog modal-full-height modal-right modal-notify modal-info"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <p className="heading lead">Thêm sản phẩm mới</p>
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
                </div>
                {/*Body*/}
                <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-center">
                    <i className="fa fa-book-dead fa-4x mb-3 animated rotateIn" />
                  </div>
                  <hr />
                  {/* Radio */}
                  <p className="text-center">
                    <strong>Tên sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      className="md-text form-control"
                      name="name"
                      ref={register}
                      placeholder="Nhập tên sản phẩm"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Mô tả sản phẩm</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="description"
                      ref={register}
                      className="md-text form-control"
                      defaultValue={""}
                      placeholder="Nhập mô tả sản phẩm"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Số Lượng</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="inventory"
                      required
                      ref={register}
                      className="md-text form-control"
                      defaultValue={""}
                      placeholder="Nhập số lượng sản phẩm"
                    />
                  </div>
                  <p className="text-center">
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
                      placeholder="Nhập giá sản phẩm"
                    />
                  </div>
                  <p className="text-center">
                    <strong>Nhà cung cấp</strong>
                  </p>
                  <div className="md-form form">
                    <input
                      type="text"
                      name="supllierName"
                      required
                      ref={register}
                      className="md-text form-control"
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
                      placeholder="Nhập mô tả nhà cung cấp"
                    />
                  </div>
                  <p className="text-center">
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
                    />
                  </div>
                  <div className="justify-content-center">

                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Thêm 
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

export default AddProduct;