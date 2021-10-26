import React from "react"

const PostContext = React.createContext({
    items: [],
    totalAmount: 0,
    addPost: (item) => {},
    addComment: (id, comment) => {},
    addLike: (id) => {},
})

export default PostContext;