/*
This module contains action creators. They are functions which will return an object describing the actions.
These actions are imported by Redux-aware components who need them, in our case it is just Home.
*/

import constants  from './constants';

export default {
    reset() {
        // A normal action creator, returns a simple object describing the action.
        return {
            type: constants.RESET
        };
    },
    duckDown(who) {
        // here we take advantage of Redux-thunk; instead of returning an object describing an action,
        // we return a function that takes dispatch and getState as arguments. This function can then
        // invoke dispatch, now or later using setTimeout or similar.
        return (dispatch, getState) => {
            dispatch({
                type: constants.DUCK_DOWN,
                coward: who
            });

            setTimeout(() => {
                dispatch({
                    type: constants.STAND_UP,
                    coward: who
                });
            },2000);
        };
    },
    nuke(who, killable) {
        return (dispatch, getState) => {
            dispatch({
                type: constants.TAKE_NUKE_STEP,
                coward: who
            });

            setTimeout(() => {
                dispatch({
                    type: constants.TAKE_NUKE_STEP,
                    coward: who
                });

                setTimeout(() => {
                    dispatch({type: constants.TAKE_NUKE_STEP,
                        coward: who
                    });

                    setTimeout(() => {
                        dispatch({
                            type: constants.TAKE_NUKE_STEP,
                            coward: who,
                            killable: killable
                        });
                    }, 5000);
                }, 3000);
            }, 4000);
        };
    },
    aimAt(killer, victim) {
        // Another async action using the Redux-thunk syntax
        return (dispatch, getState) => {
            dispatch({
                type: constants.AIM_AT,
                killer: killer,
                victim: victim
            });

            setTimeout(() => {
                dispatch({
                    type: constants.KILL_HERO,
                    killer: killer,
                    victim: victim
                });
            },2000);
        };
    },
    bombAt(killer, victim) {
        // Another async action using the Redux-thunk syntax
        return (dispatch,getState) => {
            dispatch({
                type: constants.BOMB_AT,
                killer: killer,
                victim: victim
            });

            setTimeout(() => {
                dispatch({
                    type: constants.END_BOMB,
                    killer: killer,
                    victim: victim
                });
            }, 2000);
        };
    }
};
