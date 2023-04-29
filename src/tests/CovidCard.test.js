import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CovidCard from '../components/Covid';
import store from '../redux/store';

const App = () => {
  <Provider store={store}>
    <CovidCard />
  </Provider>;
};

describe('CovidCard component test', () => {
  it('Testing covid card page rendering', () => {
    const CovidCardComponent = renderer.create(<App />).toJSON();
    expect(CovidCardComponent).toMatchSnapshot();
  });
});
