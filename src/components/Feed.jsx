import {Box} from "@mui/system"
import React from "react"
import Post from "./Posts/Post"


export default function Feed() {

  return (
    <Box flex={4} p={2} >
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}
