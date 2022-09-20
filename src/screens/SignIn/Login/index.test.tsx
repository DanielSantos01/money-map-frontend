import React from 'react';
import { render } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import Login from './index';

it('login correctly rendered', () => {
  const screen = render(enhanceScreen(Login));
  expect(screen).toMatchSnapshot();
});
