import { numberFormatter } from '../src/components/numberFormatter';
import { expect } from 'chai';
import 'mocha';

describe('main acceptance tests', () => {
    const notANumber = 'g';
    describe('numberFormatter("' + notANumber + '")', () => {
        // it('should have tests');
        const errorString = 'Parameter is not a number';
        it('should error and include the string "' + errorString + '"', () => {
            const result = numberFormatter.bind(this, notANumber);
            expect(result).to.throw(errorString);
        });
    });
    const number = 55555;
    describe('numberFormatter(' + number + ')', () => {
        it('should be a string', () => {
            const result = typeof numberFormatter(number);
            expect(result).to.equal('string');
        });
        it('should have one comma', () => {
            const result = numberFormatter(number).split(',').length - 1;
            expect(result).to.equal(1);
        });
    });
});