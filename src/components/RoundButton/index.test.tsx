import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import Button from './index';

it('roundButton render correctly', () => {
  const component = render(enhanceScreen(() => (
    <Button label='test-label' mode='light' />
  )));
  expect(component).toMatchSnapshot();
});

it('roundButton testing label', async () => {
  const component = render(enhanceScreen(() => (
    <Button label='test-label' mode='light' />
  )));
  const result = await component.findByText('test-label');
  expect(result).toBeDefined();
});

it('roundButton testing mode', () => {
  const component = render(enhanceScreen(() => (
    <Button label='test-label' mode='light' />
  )));
  const result = component.UNSAFE_getByProps({ mode: 'light' });
  expect(result).toBeDefined();
});

it('roundButton testing disabled', () => {
  const component = render(enhanceScreen(() => (
    <Button label='test-label' mode='light' disabled />
  )));
  const result = component.UNSAFE_getByProps({ disabled: true });
  expect(result).toBeDefined();
});

it('roundButton testing enabled', () => {
  const component = render(enhanceScreen(() => (
    <Button label='test-label' mode='light' disabled={false} />
  )));
  const result = component.UNSAFE_getByProps({ disabled: false });
  expect(result).toBeDefined();
});

it('roundButton testing id', () => {
  const component = render(enhanceScreen(() => (
    <Button label='test-label' mode='light' id='test-id' />
  )));
  const result = component.UNSAFE_getByProps({ id: 'test-id' });
  expect(result).toBeDefined();
});

it('roundButton testing click', () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Button label='test-label' mode='light' disabled={false} onPress={mockFunction} />
  )));
  const button = component.UNSAFE_getByProps({ mode: 'light', disabled: false });
  fireEvent.press(button);
  expect(mockFunction).toHaveBeenCalled();
});
