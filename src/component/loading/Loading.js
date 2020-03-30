import React from 'react';

import HashLoader from "react-spinners/HashLoader";
const Loading = (props) => {
    return (
        <div className="container pl-5 pb-5">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <HashLoader
              size={300}
              //size={"150px"} this also works
              color={"#7971ea"}
              loading={props.loading}
            />
          </div>
        </div>
      </div>
    );
};

export default Loading;