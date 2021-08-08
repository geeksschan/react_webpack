import { createSlice } from '@reduxjs/toolkit'

export const ArticleList = createSlice({
  name: 'articleList',
  initialState: {
    value: 0,
    list: [
      {
        id: 'list-1',
        title: 'Slipknot’s Concert in Phoenix Showed Why Mayhem Fest Died-1',
        image: 'http://mrparkerbjj.com/wp-content/uploads/2021/07/maxresdefault-1.jpg'
      },
      {
        id: 'list-2',
        title: 'Slipknot’s Concert in Phoenix Showed Why Mayhem Fest Died-2',
        image: 'http://mrparkerbjj.com/wp-content/uploads/2021/07/maxresdefault-1.jpg'
      },
      {
        id: 'list-3',
        title: 'Slipknot’s Concert in Phoenix Showed Why Mayhem Fest Died-3',
        image: 'http://mrparkerbjj.com/wp-content/uploads/2021/07/maxresdefault-1.jpg'
      },
    ]
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ArticleList.actions

export default ArticleList.reducer