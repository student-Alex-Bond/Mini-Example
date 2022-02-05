import {reducer, StateType} from "./UncontrolledAccordion";

test('collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }

    const endState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(endState.collapsed).toBe(true)
})

test('reducer error', () => {
    const state: StateType = {
        collapsed: false
    }

    expect( () => {reducer(state, {type: "FAKE-TYPE"})}).toThrowError()

})