import { test, expect, describe } from 'vitest';
import { add, substract, multiply } from './math.helper';

describe('add - Pruebas de suma', () => {
    test('should add two positives numbers', () => {

        // 1. Arrange
        const a = 1;
        const b = 3;

        // 2. Act
        const result = add(a, b);
        // 3. Assert
        console.log('Resultado: ', result);
        expect(result).toBe(4);
    });
});

describe('substract - Pruebas de resta', () => {
    test('should substract two positives numbers', () => {

        // 1. Arrange
        const a = 3;
        const b = 9;

        // 2. Act
        const result = substract(a, b);
        // 3. Assert
        console.log('Resultado: ', result);
        expect(result).toBe(a - b);
    });

    test('Restar numeros negastivos', () => {

        // 1. Arrange
        const a = -3;
        const b = -9;

        // 2. Act
        const result = substract(a, b);
        // 3. Assert
        console.log('Resultado: ', result);
        expect(result).toBe(a - b);
    });
});

describe('multiply - Pruebas de multiplicación', () => {
    test('should multiply two positives numbers', () => {

        // 1. Arrange
        const a = 1;
        const b = 3;

        // 2. Act
        const result = multiply(a, b);
        // 3. Assert
        console.log('Resultado: ', result);
        expect(result).toBe(multiply(a, b));
    });
});



