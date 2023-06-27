import React from "react";
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
    return ( 
        <label className={css.filter__label} htmlFor="">Find contacts by name
        <input
        className={css.filter__input}
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={filter}
        />
        </label>

    )
};

    Filter.propTypes = {
        filter: PropTypes.string,
        onFilterChange: PropTypes.func,
}

export default Filter;
