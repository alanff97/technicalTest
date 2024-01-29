import React from 'react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('<App />', () => {
  test('should add items and remove them', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    const button = form.querySelector('button');
    expect(button).toBeDefined();

    const randomText = crypto.randomUUID();
    await user.type(input, randomText);
    await user.click(button!);

    const list = screen.getByRole('list');
    expect(list.childNodes.length).toBe(1);

    const item = screen.getByText(randomText);
    const removeButton = item.querySelector('button');
    expect(removeButton).toBeDefined(); //check si es null

    await user.click(removeButton!); // me salto la validacion de tipos por ello

    const noResults = screen.getByText('No hay elementos en la lista');
    expect(noResults).toBeDefined();
  });
});
