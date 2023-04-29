import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { fetchCovidAction } from '../redux/covid/covid';
import CovidCard from './CovidCard';
import '../App.css';

let flag = false;
const Covid = () => {
  const dispatch = useDispatch();
  console.log(flag);
  useEffect(() => {
    if (!flag) {
      dispatch(fetchCovidAction());
      flag = true;
    }
  }, [dispatch]);

  const covid = useSelector((state) => state.covid);
  console.log(covid);
  const covidArr = Object.keys(covid).map((key) => ({ id: key, ...covid[key] }));
  console.log(covid);

  return (
    <section className="homepage">
      <div className="toolbar">
        <h1 className="brand">
          <Link to="/">Covid 19 India</Link>
        </h1>
        {/* <SearchBox query={query} setQuery={setQuery} /> */}
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      <CovidCard
        key={covidArr[0].id}
        title={covidArr[0].id}
        text={covidArr[0].total.confirmed}
        className="feature-item"
      />
      <div className="main-grid">
        {covidArr.slice(1, covidArr.length).map((item) => (
          <CovidCard
            key={item.id}
            title={item.id}
            text={item.total.confirmed}
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
