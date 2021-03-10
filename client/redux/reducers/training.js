import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const GET_IMAGES = 'GET_IMAGES'

const initialState = {
  courses: [],
  images: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        courses: action.courses
      }
    }
    case GET_IMAGES: {
      return {
        ...state,
        images: action.images
      }
    }
    default:
      return state
  }
}

export function getCoursesData() {
  return (dispatch) => {
    axios('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
      dispatch({ type: GET_POSTS, courses: data })
    })
  }
}
