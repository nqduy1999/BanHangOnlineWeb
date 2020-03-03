import React, { useState, useEffect } from 'react';

import Axios from 'axios';

const useEndpoint = (req) => {
    const [res, setRes] = useState({
        data: null,
        complete: false,
        pending: false,
        error: false
      });
      Axios.defaults.withCredentials = true;
    useEffect(
        () => {
          setRes({
            data: null,
            pending: true,
            error: false,
            complete: false
          });
          Axios(req, {header: {'Access-Control-Allow-Origin': "*"}})
            .then(res =>
              setRes({
                data: res.data,
                pending: false,
                error: false,
                complete: true
              }),
            )
            .catch(() =>
              setRes({
                data: null,
                pending: false,
                error: true,
                complete: true
              }),
            );
        },
        [req.url]
      );
    return res;
};

export default useEndpoint;