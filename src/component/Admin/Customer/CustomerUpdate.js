import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CustomerUpdate = (props) => {
    const name=props.match.params.name;
    console.log(name);
  return (
    <div className="container">
    <React.Fragment>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom>
Cập Nhật Thông Tin Khách Hàng          </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Button className="btn-primary">
        <Link to={`/admin/danhsachkhachhang/profile/${name}`}>Xem Thông tin </Link>
    </Button>
    </Grid>
    </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="username"
            label="Tài Khoản"
            disabled
            value={name}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="name"
            label="Họ và tên "
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="phone"
            label="Số Điện Thoại"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="birthday"
            required
            label="Ngày Sinh"
            type="date"
            fullWidth
            defaultValue="2020-24-01"
            InputLabelProps={{
                shrink: true,
              }}
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="identityCard"
            required
            label="CMND / GPLX"
            fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item sm="6" xs="12">
        </Grid>
        <Button className="btn-primary white form-control">Cập nhật</Button>
      </Grid>
    </React.Fragment>
    </div>
  );
}
export default CustomerUpdate;