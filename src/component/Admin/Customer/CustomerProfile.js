import React, { useEffect, useState } from "react";
import { getDetailCus } from "../../../services/AdminService";
import { Link } from "react-router-dom";
import { alertNotify } from "../../../untils/alert";
const CustomerProfile = props => {
  const name = props.match.params.name;
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    address: {},
    phone: "",
    identityCard: "",
    birthday: ""
  });
  useEffect(() => {
    getDetailCus(name).then(async res => {
      if (res.error !== true && res.data.code === 0 && res.data.result.address !== null) {
        console.log(res.data.result);
        const result = await res.data.result;
        setCustomer({
          ...customer,
          id: result.id,
          name: result.name,
          address: result.address,
          phone: result.phone,
          identityCard: result.identityCard,
          birthday: result.birthday
        });
      }
      else{
        alertNotify("Vui lòng cập nhật thông tin để xem chi tiết");
      }
    });
  }, []);
  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{customer.name}</h5>
              <h6>{customer.phone}</h6>
              <p className="proile-rating">
                BirthDay : {customer.birthday}
                <span></span>
              </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <Link to={`/admin/danhsachkhachhang/update/${name}`}>
              <button className="btn-success">Cập nhật thông tin</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{customer.id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label> Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{customer.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Address</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {customer.address.street +
                        ", " +
                        customer.address.town +
                        ", " +
                        customer.address.ward +
                        ", " +
                        customer.address.district +
                        ", " +
                        customer.address.city}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{customer.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>BirthDay</label>
                  </div>
                  <div className="col-md-6">
                    <p>{customer.birthday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerProfile;
