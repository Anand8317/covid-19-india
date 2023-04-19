import React, { useEffect } from 'react';1
import { AiFillSetting } from 'react-icons/ai';
import { BsFillArrowLeftSquareFill, BsFillMicFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const CovidDetail = () => {
  const covid = useSelector((state) => state.covid);
  const covidArr = Object.keys(covid).map((key) => ({ id: key, ...covid[key] }));
  const params = useParams();
  const covidSpe = covidArr.find((c) => c.id === params.id)
  console.log(covidSpe);

  return (
    <div className="toolbar">
      <Link to="/">
        <BsFillArrowLeftSquareFill />
      </Link>
      <h1 className="title">
        <Link to="/">Covid</Link>
      </h1>
      <div className="d-row">
        <BsFillMicFill />
        <AiFillSetting />
      </div>
    </div>
  )
}