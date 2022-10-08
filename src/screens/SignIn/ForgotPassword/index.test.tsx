import { render, } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import ForgotPassword from './index';

it('forgotPassword screen correctly rendered', () => {
  const screen = render(enhanceScreen(ForgotPassword));
  expect(screen).toMatchSnapshot();
});
