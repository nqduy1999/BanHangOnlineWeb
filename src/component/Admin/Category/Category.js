import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryItem from './CategoryItem';
import { getListCategory, deleteCategory, searchCategory, addCategory, updateCategory } from '../../../services/CategoryServices';
import { useForm } from 'react-hook-form';
import { alertNotify } from '../../../untils/alert';
import UpdateCategory from './UpdateCategory';
const Category = () => {
    const [category, setCategory] = useState([{}]);
    const [pageSearch, setPageSearch] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [hideButton, showButton]=useState(false);
    const [updateCate, setUpdateCategory] = useState();
    const [pages, setPages] = useState([]);
    const { register, handleSubmit } =useForm();
    let genPage = total => {
        let array = [];
        for (let index = 0; index < total; index++) {
          array.push(index);
        }
        setPages(array);
      };
      let handleMoveLeft = () => {
        return currentPage - 1 < 0 ? currentPage : currentPage - 1;
      };
      let handleMoveRight = () => {
        return currentPage + 1 > pages.length - 1 ? currentPage : currentPage + 1;
      }
      let Search = (data) => {
        console.log(data);
        searchCategory(0, data.keyword).then((res) => {
          console.log(res);
          if(res.error !== true && res.data.code === 0) {
            setPageSearch(res.data.result);
          }
      })
      }
      const handleAddCategory = value => {
        addCategory(value)
          .then(res => {
            console.log(res);
            if (res.data.code === 0) {
              alertNotify("Thông báo", res.data.message, "success");
              getListCategory(currentPage).then(res => {
                setCategory(res.data.result.content);
              });
              showButton(true);
            } else {
              alertNotify("Thông báo", res.data.message, "warning");
            }
          })
          .catch(err => {
            console.log(err);
          });
      };
      const handleUpdateCategory=(id, value)=>{
        console.log(value);
        console.log(id);
        updateCategory(id, value)
        .then((res) => {
          console.log(res);
          if(res.error !== true){
          alertNotify("Thông Báo", res.data.message, "success");
          getListCategory(currentPage).then(res => {
            setCategory(res.data.result.content);
          });
          showButton(true);
          }
          else{
            alertNotify("Thông Báo","Sai nhập liệu", "warning");
          }
        })	        
      }
      const removeCategory = id => {
        deleteCategory(id)
          .then(res => {
            if (res.error !== true && res.data.code === 0) {
              getListCategory(currentPage).then(res=>{
                setCategory(res.data.result.content);
              })
            }
          })
          .catch(err => {
            console.log(err);
          });
      };

      useEffect(() =>{
        if(pageSearch !== null){
          setCategory(pageSearch.content)
          genPage(pageSearch.totalPages);
        }
      },[pageSearch])
      useEffect(() => {
        getListCategory(currentPage).then(res => {
          if (res.error !== true && res.data.code === 0) {
            setCategory(res.data.result.content);
            genPage(res.data.result.totalPages);
          }
        });
      }, [currentPage]);
    return (
    <div>
         <div className="d-flex flex-row bd-highlight">
        <div className="p-2 bd-highlight ml-5  pl-5 pr-5">
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" onSubmit={handleSubmit(Search)}>
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Tìm kiếm "
                name="keyword"
                ref={register}
              />
              <div className="input-group-append">
                <button className=" btn btn-primary" type="submit">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="p-2 bd-highlight ml-5 ">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#capnhat"
            onClick={()=>{
              setUpdateCategory(null)
              showButton(false)
            }}
          >
            Thêm loại sản phẩm
          </button>
        </div>
      </div>
    
        <div className="table100 ver1 m-b-110">
        <table data-vertable="ver1">
          <thead>
            <tr className="row100 head">
              <th className="column100 column1" data-column="column1">
                Mã loại sản phẩm
              </th>
              <th className="column100 column2" data-column="column2">
                Tên loại sản phẩm
              </th>
              <th className="column100 column3" data-column="column2">
                  Cập Nhật
              </th>
            </tr>
          </thead>
          {category.map((item, i) => {
            return <CategoryItem key={i} category={item} deleteCategory={removeCategory} showButton={showButton} setUpdateCategory={setUpdateCategory}/>;
          })} 
          </table>
        <div></div>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="col-md-12 text-center">
          <div className="site-block-27">
            <ul>
              <li>
                <Link
                  to="admin"
                  onClick={() => {
                    setCurrentPage(handleMoveLeft());
                  }}
                >
                  <i className="fa fa-arrow-alt-circle-left"></i>
                </Link>
              </li>
              {pages.map((item, i) => (
                <li key={i} className={currentPage === item ? "active" : ""}>
                  <Link
                    to="admin"
                    onClick={() => {
                      setCurrentPage(item);
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="admin"
                  onClick={() => {
                    setCurrentPage(handleMoveRight());
                  }}
                >
                  <i className="fa fa-arrow-circle-right"></i>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      <UpdateCategory hideButton={hideButton} handleAddCategory={handleAddCategory} updateCategory={updateCate} handleUpdateCategory={handleUpdateCategory}/>
    </div>
    );
};

export default Category;