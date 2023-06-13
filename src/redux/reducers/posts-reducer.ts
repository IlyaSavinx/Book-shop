import { IPostInfo } from "../../types";
import { SET_POSTS } from "../action-types";


const initialState = {
    posts: [] as IPostInfo[],
    myPosts: [] as IPostInfo[],
    limit: 15,
    selectedPost: {},
    ordering: 'id',
    currentPage: 1,
    total: 0,
    search: '',
}
const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_POSTS: {
            const { posts } = action;
            return {
                ...state,
                posts
            }
        }
            
    }
}