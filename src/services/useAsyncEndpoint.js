import React, { useState, useEffect } from 'react';

import Axios from 'axios';

const useAsyncEndpoint = (fn) => {
    const [res, setRes] = useState({
        data: null,
        complete: false,
        pending: false,
        error: false,
        message: "",
        code: 1
      });
    const [req, setReq] = useState();
    useEffect(
        () => {
            if(!req) return;
          setRes({
            data: null,
            pending: true,
            error: false,
            complete: false,
            message: "",
            code: 1
          });
          Axios(req, {header: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>
              setRes({
                data: res.data,
                pending: false,
                error: false,
                complete: true,
                message: res.data.message,
                code: res.data.code
              }),
            )
            .catch(() =>
              setRes({
                data: null,
                pending: false,
                error: true,
                complete: true,
                message: res.data.message,
                code: res.data.code
              })
            );
        },
        [req]
      );
    return [res, (...args) => setReq(fn(...args))];
};

export default useAsyncEndpoint;