// import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'

function* getLogin() {
  const { data } = yield axios.get('/user_login.json')
  yield put({ type: 'getlogin_success', data })
}
function* getList() {
  const { data } = yield axios.get('/timeline.json')
  yield put({ type: 'initlist_success', data })
}
function* loadmoreList() {
  const { data } = yield axios.get('/more_timeline.json')
  yield put({ type: 'loadmore_success', data })
}
function* getComments() {
  const { data } = yield axios.get('/comments.json')
  yield put({ type: 'getcomments_success', data })
}

function* watchIncrementAsync() {
  yield takeEvery('getlogin', getLogin)
  yield takeEvery('initlist', getList)
  yield takeEvery('loadmore', loadmoreList)
  yield takeEvery('getcomments', getComments)
}


export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}