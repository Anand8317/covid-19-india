import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { fetchCovidAction } from '../redux/covid/covid';
import CovidCard from './CovidCard';
import Filter from './Filter';
import covidLogo from '../Images/covidImg.png';
import '../App.css';

let flag = false;
const Covid = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      dispatch(fetchCovidAction());
      flag = true;
    }
  }, [dispatch]);

  const covid = useSelector((state) => state.covid);
  const covidArr1 = Object.keys(covid).map((key) => ({ id: key, ...covid[key] }));

  const covidArr = input.trim()
    ? [...covidArr1].filter((state) => state.id.toLowerCase().includes(input))
    : [...covidArr1];

  return (
    <section className="homepage">
      <div className="toolbar">
        <h1>
          <Link to="/" className="header">Covid 19 India</Link>
        </h1>
        <Filter input={input} setInput={setInput} />
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      <Link to={`/Covid/${covidArr.length ? covidArr[0].id : 0}`} key={covidArr.length ? covidArr[0].id : 0} className="feature">
        <div>
          <img src={covidLogo} alt="covidLogo" className="covid-img" />
        </div>
        <div className="subgrid">
          <h3>{covidArr.length ? covidArr[0].id : 0}</h3>
          <p>{covidArr.length ? covidArr[0].total.confirmed : 0}</p>
        </div>
      </Link>
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
  );
};

export default Covid;
