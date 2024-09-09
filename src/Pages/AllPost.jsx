import React,{useState, useEffect} from 'react'
import  {service as apperiteService}  from "../appwrite/config"
import { Container, PostCard } from '../components/Index'
function AllPost(){

    const [posts, setPosts] = useState([])
    useEffect(()=>{}, [])
    apperiteService.getPosts([]).then((posts)=> {
        if(posts){
            setPosts(posts.documents)
        }
    })
    return(
        <div className='w-full py-8'>
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div key= {post.$id} className='p-2 w-1/4'>
                            <PostCard post={post}/>
                         </div>

                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost;