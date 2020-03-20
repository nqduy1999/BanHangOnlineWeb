import React from "react";
const Update = (props) => {
  const id = props.match.params.id;

  return (
    <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
      <div className="wrapper wrapper--w680">
        <div className="card card-1">
          <div className="card-heading" />
          <div className="card-body">
            <h2 className="title">Cập nhật sản phẩm</h2>
            <form method="POST">
              <div className="input-group">
                <input
                  className="input--style-1"
                  type="text"
                  placeholder="NAME"
                  name="name"
                />
              </div>
              <div className="row row-space">
                <div className="col">
                  <div className="input-group">
                    <input
                      className="input--style-1 js-datepicker"
                      type="text"
                      placeholder="BIRTHDATE"
                      name="birthday"
                    />
                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar" />
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                  <input
                      className="input--style-1 js-datepicker"
                      type="text"
                      placeholder="BIRTHDATE"
                      name="birthday"
                    />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col">
                  <div className="input-group">
                    <input
                      className="input--style-1"
                      type="text"
                      placeholder="REGISTRATION CODE"
                      name="res_code"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="input-group">
                    <input
                      className="input--style-1"
                      type="text"
                      placeholder="REGISTRATION CODE"
                      name="res_code"
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-20">
                <button className="btn btn--radius btn--green" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
