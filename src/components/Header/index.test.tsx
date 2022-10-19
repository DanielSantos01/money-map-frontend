import React from 'react';
import { render } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import Header from './index';

it('header render correctly', () => {
  const component = render(enhanceScreen(() => (
    <Header
      profilePictureUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png'
      username='Paulinha'
      money={50.15}
    />
  )));
  expect(component).toMatchSnapshot();
});

it('header test url', async () => {
  const component = render(enhanceScreen(() => (
    <Header
      profilePictureUrl='https://test.url'
      username='Paulinha'
      money={50.15}
      testID='test-id'
    />
  )));
  const result = await component.UNSAFE_getByProps({ id: 'test-id' });
  expect(result.props.source.url).toBe('https://test.url');
});

it('header test username', async () => {
  const component = render(enhanceScreen(() => (
    <Header
      profilePictureUrl='https://test.url'
      username='Paulinha'
      money={50.15}
    />
  )));
  const result = await component.findByText('Olá, Paulinha');
  expect(result).toBeDefined();
});

it('header test money value', async () => {
  const component = render(enhanceScreen(() => (
    <Header
      profilePictureUrl='https://test.url'
      username='Paulinha'
      money={50.15}
    />
  )));
  const result = await component.findByText('R$ 50,15');
  expect(result).toBeDefined();
});
