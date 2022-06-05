import { combineReducers } from 'redux'
import  { mat, asyncMac, makeFetchingReducer, makeSetReducer, reduceReducers, makeCrudReducer, makeFilterReducer} from './utils'
import { addPost, getPosts, deletePost } from '../../services/api';

const asyncPosts = mat('posts')// mat: make async types
const [setPending, setFulfilled, setError] = asyncMac(asyncPosts);
const fulfilledReducer =  makeSetReducer(['posts/fulfilled'])
const crudReducer = makeCrudReducer(['posts/add', 'posts/delete'])
const filterCrudReducer = makeFilterReducer(['filter/search'])

export const fetchingReducer = makeFetchingReducer(asyncPosts)


export const fetchThunk = () => async dispatch => {
  dispatch(setPending())
  try {
    const { data } = await getPosts(); 
    dispatch(setFulfilled(data))
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const addThunk = (post) => async dispatch => {
  try {
    const { data } = await addPost(post); 
    dispatch({type: 'posts/add', payload: post})
    return data;
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const deleteThunk = (postId) => async dispatch => {
  try {
    dispatch({type: 'posts/delete', payload: postId})
    const { data } =  await deletePost(postId); 
    return data;
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const postsReducer = reduceReducers(crudReducer, fulfilledReducer)
export const filterReducer = reduceReducers(filterCrudReducer) 

export const reducer = combineReducers({
  posts: combineReducers({
    entities: postsReducer,
    status: fetchingReducer,
    filter: filterReducer,
  }),
})

