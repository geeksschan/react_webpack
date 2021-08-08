import { configureStore } from '@reduxjs/toolkit'
import ArticleListReducer from './features/article/articleList';

export default configureStore({
  reducer: {
    articleList: ArticleListReducer
  },
});