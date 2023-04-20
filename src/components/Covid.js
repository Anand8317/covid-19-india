import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row,
} from 'react-bootstrap';
import { fetchCovidAction } from '../redux/covid/covid';
import CovidCard from './CovidCard';
import '../App.css';

let flag = false;
const Covid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      dispatch(fetchCovidAction());
      flag = true;
    }
  }, [dispatch]);

  const covid = useSelector((state) => state.covid);
  const covidArr = Object.keys(covid).map((key) => ({ id: key, ...covid[key] }));

  return (
    <Container>
      <Row>
        {covidArr.map((object) => (
          <CovidCard key={object.id} title={object.id} text={object.total.recovered} />
        ))}
      </Row>
    </Container>
  );
};

export default Covid;
