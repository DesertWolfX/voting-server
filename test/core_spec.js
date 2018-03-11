import {List, Map} from 'immutable';
import {expect} from 'chai';

//Import application logic functions for testing
import {setEntries, next, vote} from '../src/core';

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

    describe('vote', () => {
        it('creates a tally for the voted entry', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Black Panther', 'Thor Ragnarok')
                }),
                entries: List()
            });
            const nextState = vote(state, 'Black Panther');
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Black Panther', 'Thor Ragnarok'),
                    tally: Map({
                        'Black Panther': 1
                    })
                }),
                entries: List()
            }));
        });

        it('adds to existing tally for the voted entry', () => {
            const state = Map({
                vote: Map({
                    pair: List.of('Black Panther', 'Thor Ragnarok'),
                    tally: Map({
                        'Black Panther': 3,
                        'Thor Ragnarok': 2
                    })
                }),
                entries: List()
            });
            const nextState = vote(state, 'Black Panther');
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair: List.of('Black Panther', 'Thor Ragnarok'),
                    tally: Map({
                        'Black Panther': 4,
                        'Thor Ragnarok': 2
                    })
                }),
                entries: List()
            }));
        });
    });
});