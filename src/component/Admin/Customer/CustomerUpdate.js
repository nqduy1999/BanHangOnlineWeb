import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import Address from "../../profile/Address";
import { updateCus } from "../../../services/AdminService";
import {  alertNotify } from "../../../untils/alert";
const CustomerUpdate = props => {
  const username = props.match.params.name;
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const stateAddress = useSelector(state => state.address)
  const renderRedirect = () => {
    if (redirect === true) {
      console.log("hihi");
      return <Redirect to='/' />
    }
  }
  const onSubmit = (value) => {
    let customerUp = {
      name:value.name,
      phone:value.phone,
      identityCard:value.identityCard,
      birthday:value.birthday,
      address:stateAddress.address
      }
    updateCus(username, customerUp)
    .then((res)=>{
      alertNotify("Cập Nhật Thành Công ");
      setRedirect(true);
    })
  };
  return (
    <div className="container">
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Cập Nhật Thông Tin Khách Hàng {username}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button className="btn-primary">
              <Link to={`/admin/danhsachkhachhang/profile/${username}`}>
                Xem Thông tin{" "}
              </Link>
            </Button>
          </Grid>
        </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <label className="mr-4">Tài Khoản</label>
            <input
              required
              name="username"
              label="Tài Khoản"
              disabled
              fullWidth
              value={username}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <label className="mr-5">Tên</label>
            <input
              required
              name="name"
              ref={register}
              label="Họ và tên "
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <label className="mr-2">Số điện thoại</label>
            <input
              required
              name="phone"
              ref={register}
              label="Số Điện Thoại"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <label className="mr-2">Ngày sinh</label>
            <input
              name="birthday"
              label="Ngày Sinh"
              type="text"
              ref={register}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
          <label className="mr-5">CMND</label>
            <input
              name="identityCard"
              ref={register}
              label="CMND / GPLX"
              fullWidth
            />
          </Grid>
          <Grid item sm="12" xs="12">
            <Address  />
          </Grid>
          <Button className="btn-primary white form-control" type="submit" onClick={renderRedirect}>Cập nhật</Button>
        </Grid>
      </form>
      </React.Fragment>
    </div>
  );
};
export default withRouter(CustomerUpdate);
