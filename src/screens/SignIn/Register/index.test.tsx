import { render, } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import Register from './index';

it('register screen correctly rendered', () => {
  const screen = render(enhanceScreen(Register));
  expect(screen).toMatchSnapshot();
});
