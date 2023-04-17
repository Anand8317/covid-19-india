import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidAction } from '../redux/covid/covid';

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

  return (
    <div>
      {covid}
    </div>
  );
};

export default Covid;