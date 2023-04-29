import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const CovidCard = ({
  title, text, className,
}) => (
  <Link to={`/Covid/${title}`} key={title} className={className}>
    <Col md={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
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
