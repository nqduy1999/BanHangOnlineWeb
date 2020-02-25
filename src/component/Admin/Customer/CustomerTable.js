import React from 'react';
import ModalUpdateCus from './ModalUpdateCus';
import ModalDetail from './ModalDetail';
const CustomerTable = () => {
    const [showCt, setShowCt] = React.useState(false);
    const [showCn,setShowCn ] = React.useState(false);
    return (
        <div>
            <table className="table table-light">
<thead>
<tr>
  <th scope="col">ID</th>
  <th scope="col">Tài khoản</th>
  <th scope="col">Email</th>
  <th scope="col">Xem chi tiết</th>
  <th> Cập Nhật
      </th>      
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>nqduy1999</td>
  <td>nqduy1999@gmail.com</td>
  <td> <button className="btn-warning" onClick={()=> setShowCt(true)}>Click !</button></td>

      <td>
        <button className="btn-primary" onClick={()=> setShowCn(true)}>Cập nhật chi tiết</button>
      </td>
</tr>
</tbody>
</table>

<ModalDetail show={showCt} onHide={()=> setShowCt(false)}/>
      <ModalUpdateCus show={showCn} onHide={()=> setShowCn(false)}/>
        </div>
    );
};

export default CustomerTable;