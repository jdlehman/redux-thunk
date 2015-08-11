import expect from 'expect';
import thunkMiddleware from '../';

describe('thunkMiddleware', () => {
  it('it calls action if it is a function', () => {
    const thunk = thunkMiddleware({
      dispatch: 'dispatch',
      getState: 'getState'
    });
    const next = (action) => action;
    const action = (dispatch, getState) => ({dispatch, getState});

    const retVal = thunk(next)(action);
    expect(retVal.dispatch).toBe('dispatch');
    expect(retVal.getState).toBe('getState');
  });

  it('it calls next if action is not a function', () => {
    const thunk = thunkMiddleware({
      dispatch: 'dispatch',
      getState: 'getState'
    });
    const next = (action) => action;
    const action = 'action';

    const retVal = thunk(next)(action);
    expect(retVal).toBe('action');
  });
});
