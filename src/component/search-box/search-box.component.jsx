import React from 'react';
import '../search-box/search-box.style.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input className='search' type='search' placeholder={placeholder} onChange={handleChange}  />
)

// export function SearchBox(props){
//     return (
//         <input className='search' type='search' placeholder={props.placeholder} onChange={props.handleChange}  />
//     )
// }

