import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next} from '../src/core';

describe('application logic', () => {
    describe('setEntries', () => {
        it('adds the entries to the state', () => {
            const state = Map();
            const entries = List.of('Black Panther', 'Thor Ragnarok');
            const nextState = setEntries(state, entries);
            expect(nextState).to.equal(Map({
                entries: List.of('Black Panther', 'Thor Ragnarok')
            }));
        });

        it('converts to immutable', () => {
            const state = Map();
            const entries = ['Black Panther', 'Thor Ragnarok'];
            const nextState = setEntries(state, entries);
            expect(nextState).to.equal(Map({
                entries: List.of('Black Panther', 'Thor Ragnarok')
            }));
        }); 
    });

    describe('next', () => {
        it('takes the next two entries under vote', () => {
            const state = Map({
                entries: List.of('Black Panther', 'Thor Ragnarok', 'Guardians of the Galaxy Vol 2')
            });
            const nextState = next(state);
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Black Panther', 'Thor Ragnarok')
                }),
                entries: List.of('Guardians of the Galaxy Vol 2')
            }));
        });
    });
});