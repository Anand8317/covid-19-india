import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import covidLogo from '../Images/covidImg.png';

const CovidCard = ({
  title, text, className,
}) => (
  <Link to={`/Covid/${title}`} key={title} className={className}>
    <div>
      <img src={covidLogo} alt="covidLogo" className="covid-img" />
    </div>
    <div className="subgrid">
      <div className="arrow-container">
        <FiArrowRightCircle className="arrow" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </Link>
);

CovidCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.number,
  className: PropTypes.string,
};

CovidCard.defaultProps = {
  title: '',
  text: 1,
  className: '',
};

export default CovidCard;
