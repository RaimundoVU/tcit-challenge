import { createStore, applyMiddleware } from 'redux';
import {asyncMiddleware} from './middlewares/async';
import {reducer} from './reducers/reducer';


export const store = createStore(reducer, applyMiddleware(asyncMiddleware));
