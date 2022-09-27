import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { enhanceScreen } from '@/utils';
import Input from './index';

it('input render correctly', async () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Input label='testLabel' onChange={mockFunction} value='' />
  )));
  expect(component).toMatchSnapshot();
});

it('testing label', async () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Input label='testLabel' onChange={mockFunction} value='' />
  )));
  const result = await component.findByText('testLabel');
  expect(result).toBeDefined();
});

it('testing default value', () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Input label='testLabel' onChange={mockFunction} value='myDefaultValue' />
  )));
  const result = component.UNSAFE_getByProps({ value : 'myDefaultValue' });
  expect(result).toBeDefined();
});

it('testing placeholder', () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Input label='testLabel' onChange={mockFunction} value='myDefaultValue' placeholder='myPlaceholder' />
  )));
  const result = component.UNSAFE_getByProps({ placeholder : 'myPlaceholder' });
  expect(result).toBeDefined();
});

it('testing password mode', () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Input label='testLabel' onChange={mockFunction} value='myDefaultValue' isPassword />
  )));
  const result = component.UNSAFE_getByProps({ secureTextEntry : true });
  expect(result).toBeDefined();
});

it('testing labelFont', () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Input label='testLabel' onChange={mockFunction} value='myDefaultValue' labelFont='bold' />
  )));
  const result = component.UNSAFE_getByProps({ font : 'bold' });
  expect(result).toBeDefined();
});

it('testing password mode', () => {
  const mockFunction = jest.fn();
  const component = render(enhanceScreen(() => (
    <Input label='testLabel' onChange={mockFunction} value='myDefaultValue' isPassword />
  )));
  const input = component.UNSAFE_getByProps({ secureTextEntry: true });
  fireEvent(input, 'changeText', 'write-something');
  expect(mockFunction).toBeCalledWith('write-something');
});
