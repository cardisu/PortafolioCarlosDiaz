import {describe, expect, test} from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('should render firstname and lastname - screen', () => {
        //const {container} = render(<MyAwesomeApp />);
        render(<MyAwesomeApp />);
        screen.debug();

        //console.log(render);

        // Buscamos elementos utilizando etiquetas, clases o texto
        // const h1 = container.querySelector('h1');
        // const h3 = container.querySelector('h3');

        // expect(h1?.innerHTML).toBe('Carlitos');
        // expect(h3?.innerHTML).toBe('Diaz');

        // Uso de Screen
        const h1 = screen.getByRole('heading', { level: 1 });
        const h3 = screen.getByRole('heading', { level: 3 });
    });
});