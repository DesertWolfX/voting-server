import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

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
});