import React from 'react';

const ContactSection = () => {
    return (
        <div className="site-section text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h3 mb-3 text-black">Liên Lạc</h2>
            </div>
            <div className="col-md-7">
              <form action="#" method="post">
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">Tên <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_fname" name="c_fname" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">Họ và tên đệm <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_lname" name="c_lname" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" id="c_email" name="c_email" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_subject" className="text-black">Chủ đề </label>
                      <input type="text" className="form-control" id="c_subject" name="c_subject" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_message" className="text-black">Lời nhắn </label>
                      <textarea name="c_message" id="c_message" cols={30} rows={7} className="form-control" defaultValue={""} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-lg-12">
                      <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Gửi tin nhắn" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5 ml-auto">
              <div className="p-4 border mb-3">
                <span className="d-block text-primary h6 text-uppercase">Hồ Chí Minh</span>
                <p className="mb-0">14 đường Nguyễn Văn Bảo, Phường 4, quận Gò Vấp</p>
              </div>
              <div className="p-4 border mb-3">
                <span className="d-block text-primary h6 text-uppercase">Hà Nội</span>
                <p className="mb-0">203 Nguyễn Chí Thanh, Láng Hạ, Đống Đa </p>
              </div>
              <div className="p-4 border mb-3">
                <span className="d-block text-primary h6 text-uppercase">Cần Thơ </span>
                <p className="mb-0">101 bến Ninh Kiều, phường Ninh Kiều</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactSection;