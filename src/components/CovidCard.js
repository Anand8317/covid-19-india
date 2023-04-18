import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const CovidCard = ({
  title, text,
}) => (
  <Link to={`/Covid/${title}`} key={title}>
    <Col md={6} className="mb-4 col">
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
};

CovidCard.defaultProps = {
  title: '',
  text: 1,
};

export default CovidCard;
