import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"


const PostsRQ = () => {

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: () => {
            return axios.get("http://localhost:8000/posts");
        },
        staleTime: 30 * 1000,
        refetchInterval: 1000,
        refetchIntervalInBackground: true,
        enabled: false,
    })

    if (isLoading) {
        return <div>Page is Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

  return (
   <div>
    <button onClick={refetch}>Fetch</button>
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