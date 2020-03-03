import React from 'react';
import App from './App';

import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

let container: HTMLElement;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

test('can render and create URL', () => {
    const onClick = jest.fn();

    act(() => {
        render(<App />, container);
    });

    const button = container.querySelector('[data-testid=button]');
    expect(button?.innerHTML).toBe('Create');

    act(() => {
        button?.dispatchEvent(new MouseEvent('click'));
    });

    const modal = container.querySelector('[data-testid=modal]');
    expect(modal).not.toBeInTheDocument();
});
