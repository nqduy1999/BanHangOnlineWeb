/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import useAsyncEndpoint from './useAsyncEndpoint';

const postToDoEndpoint = (url, config) => {
    return useAsyncEndpoint(data => ({
        url: url,
        method: "POST",
        data: data,
        headers: config
    }))
};

export default postToDoEndpoint;