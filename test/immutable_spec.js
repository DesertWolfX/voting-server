import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {
    
    describe('a number', () => {

        function increment(currentState) {
            return currentState + 1;
        }

        it('is immutable', () => {
            // TEST IMPLEMENTATION
            let state = 42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });

        // More test can go here
    });

    describe('A List', () => {

        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable', () => {
            let state = List.of('Black Panther', 'Thor Ragnarock');
            let nextState = addMovie(state, 'Justice League');

            expect(nextState).to.equal(List.of(
                'Black Panther',
                'Thor Ragnarock',
                'Justice League'
            ));
            
        });

    });

});

