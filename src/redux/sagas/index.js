import { all } from '@redux-saga/core/effects';

import productSaga from './productSaga';


function* rootSaga() {
	yield all([
		...productSaga,
	]);
}

export default rootSaga;
