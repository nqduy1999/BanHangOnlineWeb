/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import useAsyncEndpoint from './useAsyncEndpoint';

const postToDoEndpoint = (url) => {
    return useAsyncEndpoint(data => ({
        url: url,
        method: "POST",
        data
    }))
};

export default postToDoEndpoint;