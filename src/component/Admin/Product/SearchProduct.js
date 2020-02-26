import React from 'react';

const SearchProduct = () => {
    return (
        <div>
                  {/* onChange= 
           { e => {
               const keyword=e.target.value
               timer && clearTimeout(timer);
               timer = setTimeout(()=>{
                this.props._filterByString(keyword)
               },300)
        }} */}
<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
    );
};

export default SearchProduct;