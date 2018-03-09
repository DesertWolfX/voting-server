import {expect} from 'chai';
import {List, Map} from 'immutable';

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
            let nextState = addMovie(state, 'Guardians of the Galaxy Vol 2');

            expect(nextState).to.equal(List.of(
                'Black Panther',
                'Thor Ragnarock',
                'Guardians of the Galaxy Vol 2'
            ));

        });

    });
    //Same test as above, but this is a NESTED DATA STRUCTURE 
    describe('a tree', () => {

        /*function addMovie(currentState, movie) {
            return currentState.set(
                'movies',
                currentState.get('movies').push(movie)
            }
        */
        // change the above 'get' to 'update to make the code more concise
        function addMovie(currentState, movie) {
          return currentState.update('movies', movies => movies.push(movie));
        }

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Black Panther', 'Thor Ragnarock')
            });
            let nextState = addMovie(state, 'Guardians of the Galaxy Vol 2');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Black Panther',
                    'Thor Ragnarock',
                    'Guardians of the Galaxy Vol 2'
                )

            }));

        })

    })

});

