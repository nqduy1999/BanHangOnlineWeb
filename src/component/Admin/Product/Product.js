import React from "react";
import { useState, useEffect } from "react";
import { getListProduct, removeProduct, addProduct } from "../../../services/AdminService";
import ProductItem from "./ProductItem";
import UpdateProduct from "./UpdateProduct";
const Product = () => {
    const [listdata, setData] = useState([
        {
            maSanPham: "",
            tenSanPham: "",
            moTa: "",
            giaSanPham: 0,
            soLuongTon: 0,
            nhaCungCap: null,
            hinhAnh: null,
            loaiSanPham: null
        }
    ]);
    let removePd = id => {
        removeProduct(id)
            .then(async res => {
                if (res.error !== true && res.data.code === 0) {
                    const resutl = await res.data.result;
                    console.log(resutl);
                    setData(resutl);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
    const handleAddProduct=(value)=>{
        addProduct(value)
        .then(() => {
            console.log("Them san pham thanh cong")            
        })
        .catch(err =>{
            console.log(err);     
        })
    }
    useEffect(() => {
        getListProduct().then(res => {
            if (res.error !== true) {
                setData(res.data.result);
            }
        });
    }, []);

    return (
        <div>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                    <h1>Danh sách sản phẩm </h1>
                </div>
                <div className="p-2 bd-highlight ml-5 mt-2 pl-5 pr-5">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
                <div className="p-2 bd-highlight ml-5">
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Thêm sản phẩm
          </button>
                </div>
            </div>
            <div>
                <table className="table table-light">
                    <thead>
                        <tr>
                            <td scope="col">Mã Sản Phẩm</td>
                            <td scope="col">Tên</td>
                            <td scope="col">Mô Tả</td>
                            <td scope="col">Giá</td>
                            <td scope="col">Số Lượng</td>
                            <td scope="col">Hình Ảnh</td>
                            <td> Cập Nhật</td>
                        </tr>
                    </thead>
                    {listdata.map((item, i) => {
                        return (
                            <ProductItem
                                key={i}
                                product={item}
                                removePd={removePd}
                            />
                        );
                    })}
                </table>
            </div>
            <UpdateProduct handleSubmit={handleAddProduct}/>
        </div>
    );
};

export default Product;
