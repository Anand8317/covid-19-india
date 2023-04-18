import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const CovidCard = ({
  key, title, text,
}) => (
  // <Link to={`/Covid/${title.common}`} key={key}>
    <Col md={6} className="mb-4 col">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  // </Link>
);

CovidCard.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

CovidCard.defaultProps = {
  key: '',
  title: '',
  text: '',
};

export default CovidCard;
