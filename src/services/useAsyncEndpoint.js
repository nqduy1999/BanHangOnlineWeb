import React, { useState, useEffect } from 'react';

import Axios from 'axios';

const useAsyncEndpoint = (fn) => {
    const [res, setRes] = useState({
        data: null,
        complete: false,
        pending: false,
        error: false,
      });
    const [req, setReq] = useState();
    Axios.defaults.withCredentials = true;
    useEffect(
        () => {
            if(!req) return;
          setRes({
            data: null,
            pending: true,
            error: false,
            complete: false,
          });
          Axios(req)
            .then(res =>
              setRes({
                data: res.data,
                pending: false,
                error: false,
                complete: true
              }),
            )
            .catch((err) =>
              setRes({
                data: null,
                pending: false,
                error: true,
                complete: true,
                messError: err
              })
            );
        },
        [req]
      );
    return [res, (...args) => setReq(fn(...args))];
};

export default useAsyncEndpoint;