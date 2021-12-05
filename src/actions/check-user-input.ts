import { createAction } from '@reduxjs/toolkit';

export interface ICheckUserInputActionPayload {
    suiteId: string;
    functionBody: string;
}


export const checkUserInput = createAction<ICheckUserInputActionPayload>('CHECK_USER_INPUT');

export const checkUserInputError = () => ({
    type: 'CHECK_USER_INPUT/ERROR'
});

export const checkUserInputSuccess = () => ({
    type: 'CHECK4_USER_INPUT/SUCCESS'
});
