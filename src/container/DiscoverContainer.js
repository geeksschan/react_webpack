import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import PostItem from '../presentation/components/postItem/PostItem'
import PostItemInner from '../presentation/components/postItemInner/PostItemInner'
import PostList from '../presentation/components/postList/PostList'

const DiscoverContainer = ({children}) => {
  const articleList = useSelector((state) => state.articleList.list)
  const dispatch = useDispatch();

  axios.get('/api/posts')
  .then((Response)=>{console.log(Response.data)})
  .catch((Error)=>{console.log(Error)});


  return (
    <PostList>
      {articleList.map((item) => {
        return (
          <PostItem key={item.id}>
            <PostItemInner title={item.title} image={item.image} />
          </PostItem>
        )
      })}
    </PostList>
  )
}

export default DiscoverContainer
