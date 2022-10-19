import { render, } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import Login from './index';

it('login screen correctly rendered', () => {
  const screen = render(enhanceScreen(Login));
  expect(screen).toMatchSnapshot();
});
