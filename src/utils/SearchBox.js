import React from 'react';

const SearchBox= ({searchChange}) => {
    return (
        <div className='padding-style'>
            <input
            type='search'
            placeholder='search robots'
            className='search-box'
            onChange={searchChange}
            />
        </div>
     );
}

export default SearchBox;