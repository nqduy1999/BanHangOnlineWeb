import React from 'react';

const AdminFooter = (props) => {
    return (
        <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            Nhóm 4 - Admin trang quản lý {props.name}
          </nav>
        </div>
      </footer>
    );
};

export default AdminFooter;