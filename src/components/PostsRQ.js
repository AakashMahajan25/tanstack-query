import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"


const PostsRQ = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: () => {
            return axios.get("http://localhost:8000/posts");
        },
        staleTime: 30 * 1000;
    })

    if (isLoading) {
        return <div>Page is Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

  return (
   <div>
    {data?.data.map(post => (
        <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
    ))}
   </div>
  )
}

export default PostsRQ