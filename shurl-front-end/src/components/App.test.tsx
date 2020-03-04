import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import axiosMock from 'axios';

import App from './App';
import URLBox from './Body/URLBox';

jest.mock('axios');

test('Rendering', () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText('Enter URL')).toBeVisible();
});

test('Input URL', async () => {
    const utils = render(<URLBox />);
    const input = utils.getByLabelText('url') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'https://neonkid.xyz' } });
    expect(input.value).toBe('https://neonkid.xyz');

    const createBtn = utils.getByText('Create');
    expect(createBtn).toBeVisible();

    fireEvent.click(createBtn, { button: 0 });

    await wait(() => utils.getByText('FAILED'));

    expect(axiosMock.post).toBeCalledTimes(1);
});
