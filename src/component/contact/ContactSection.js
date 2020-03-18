import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import HashLoader from "react-spinners/HashLoader";

import { sendEmail } from '../../services/EmailSerivces';
import { alertNotify } from '../../untils/alert';
const ContactSection = () => {
  const { handleSubmit, register } = useForm();
   //loading
   const [loading, setLoading] = useState(true);
  let onSubmit = (data) => {
    const contentEmail = {
      emailTo: "hinatosss111@gmail.com",
      subject:  data.subject,
      content: `Họ và tên: ${data.firstname + " " + data.lastname} \nTừ: ${data.email} \n${data.content}`
    }
    setLoading(true);
    sendEmail(contentEmail).then((res) => {
      if(res.error === false && res.data.code === 0) {
        setLoading(false);
        alertNotify("Thông báo", "Cảm ơn bạn đã liên lạc với chúng tôi, chúng tôi trả lời bạn sớm nhất có thể", "success");
      }
    });
  }
  useEffect(() => {
    setLoading(false);
  }, []);
    return loading ?
    (
      <div className="container pl-5 pb-5">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <HashLoader
            size={300}
            //size={"150px"} this also works
            color={"#7971ea"}
            loading={loading}
            />
          </div>
        </div>
      </div>
    ): (
        <div className="site-section text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h3 mb-3 text-black">Liên Lạc</h2>
            </div>
            <div className="col-md-7">
              <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
                <div className="p-3 p-lg-5 border">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">Tên <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="name" name="lastname" ref={register({required: true})}/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">Họ và tên đệm <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_lname" name="firstname"  ref={register({required: true})}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                      <input className="form-control" name="email" type="email" ref={register({required: true, pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Vui lòng nhập đúng định dạng email"
                      }})} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_subject" className="text-black">Chủ đề </label>
                      <input type="text" className="form-control" id="subject" name="subject" ref={register({required: true})} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_message" className="text-black">Lời nhắn </label>
                      <textarea name="content" id="content" cols={30} rows={7} className="form-control" ref={register({required: true})} defaultValue={""} />
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