import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CovidDetail from '../components/CovidDetail';
import store from '../redux/store';

const App = () => {
  <Provider store={store}>
    <CovidDetail />
  </Provider>;
};

describe('CovidDetail component test', () => {
  it('Testing CovidDetail page rendering', () => {
    const CovidDetailComponent = renderer.create(<App />).toJSON();
    expect(CovidDetailComponent).toMatchSnapshot();
  });
});
