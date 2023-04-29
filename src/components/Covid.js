import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row,
} from 'react-bootstrap';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
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
    <section className="homepage">
      <div className="toolbar">
        <h1 className="brand">
          <Link to="/">Covid 19 India</Link>
        </h1>
        <SearchBox query={query} setQuery={setQuery} />
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      <div className="main-grid">
        {covidArr.slice(1, count).map((item) => (
          <CovidCard
            title={c.name.common}
            text={}
            className="grid-item"
          />
        ))}
      </div>
    </section>
    // <Container>
    //   <Row>
    //     {covidArr.map((object) => (
    //       <CovidCard key={object.id} title={object.id} text={object.total.recovered} />
    //     ))}
    //   </Row>
    // </Container>
  );
};

export default Covid;
