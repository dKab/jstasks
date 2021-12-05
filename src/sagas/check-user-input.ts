import { call, put, takeLatest } from 'redux-saga/effects'
import { sendCheckUserInputRequest } from '../request';
import * as actions from '../actions/check-user-input';
import type {ICheckUserInputActionPayload} from '../actions/check-user-input';


interface CheckUserInputApiError {
   status: 'Error',
   error: string;
}

interface CheckUserInputApiSuccess {
   status: 'OK',
   failed: string[],
   succeded: string[],
   result: 'Passed' | 'Failed', 
}

type CheckUserInputApiResponse = CheckUserInputApiError | CheckUserInputApiSuccess;

function* checkUserInput({payload}: {payload: ICheckUserInputActionPayload}) {
   try {
      const response: CheckUserInputApiResponse = yield call(sendCheckUserInputRequest, payload.suiteId, payload.functionBody);
      yield put({type: "CHECK_USER_INPUT/SUCCESS", response});

      console.log(response);
   } catch (e) {
      yield put({type: "CHECK_USER_INPUT/ERROR", message: e.message});

      console.log(e);
   }
}


function* checkUserInputSaga() {
    yield takeLatest(actions.checkUserInput, checkUserInput);
  }
  
  export default checkUserInputSaga;