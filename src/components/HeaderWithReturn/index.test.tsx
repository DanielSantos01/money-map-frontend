import React from 'react';
import { render } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import Header from './index';

it('headerWithReturn render correctly', async () => {
  const component = render(enhanceScreen(() => (
    <Header title='some-title'/>
  )));
  expect(component).toMatchSnapshot();
});

it('headerWithIcon testing title', async () => {
  const component = render(enhanceScreen(() => (
    <Header title='test-title'/>
  )));
  const result = await component.findByText('test-title');
  expect(result).toBeDefined();
});
