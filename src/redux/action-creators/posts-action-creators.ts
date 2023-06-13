import { IPostInfo, IPostsResponse } from "../../types";
import {  put, takeEvery } from "redux-saga/effects";
import { LOAD_POSTS, SET_POSTS, SET_TOTAL } from "../action-types";


const setPosts = (posts: IPostInfo[]) => ({
    type: SET_POSTS,
    posts
});

const setTotal = (total: number) => ({
    type: SET_TOTAL,
    total,
})


function* fetchPosts(action: any) {
    const { limit, ordering, currentPage, search } = action.searchInfo;
    const resp: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts?limit=${limit}&ordering=${ordering}&offset=${(currentPage - 1)*(+limit)}&search=${search}`);
    const data: IPostsResponse = yield resp.json();
    yield put(setPosts(data.results))
    yield put(setTotal(data.count))
    
}

function* watcherPost() {
    yield takeEvery(LOAD_POSTS, fetchPosts)

}

export {
    setPosts,
    watcherPost,
}


