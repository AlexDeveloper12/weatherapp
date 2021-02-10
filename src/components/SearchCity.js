import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
width: 30%;
border: none;
font-family:Montserrat;
background-color: #ffffff;
font-size: 16px;
padding: 10px 15px 10px 40px;
color: #c5c5c5;
transition: 0.2s;
border-radius: 20px;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
&:focus {
  color: #191919;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  outline: none;
}
`;

function SearchCity({ value, onChangeCity }) {

    return (
        <div>
            <SearchInput
                placeholder="Search city..."
                autoFocus={true}
                value={value}
                onChange={onChangeCity}

            />
        </div>
    )
}

export default SearchCity;