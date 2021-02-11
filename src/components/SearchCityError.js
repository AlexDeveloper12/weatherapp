import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const SearchCityError = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faFrown} size={"3x"} />
            <span>Apologies, the city could not be found...</span>
        </div>

    )

}

export default SearchCityError;