import { all } from "redux-saga/effects";
import user from "./user/soga";

function* rootSaga() {
  yield all([...user]);
}

export default rootSaga;
