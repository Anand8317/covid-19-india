import React from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Filter = ({ input, setInput }) => (
  <form className="filter" onSubmit={(e) => e.preventDefault()}>
    <FiSearch />
    <input
      type="text"
      className="filter-input"
      value={input}
      onChange={(e) => setInput(e.target.value.toLowerCase())}
      placeholder="Enter State Name"
    />
  </form>
);

Filter.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};

export default Filter;
