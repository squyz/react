import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    function addNewPost(){
        const newPost ={
            ...post, id: Date.now()
        }
        create(newPost);
    }
    return(
        <form className='form-post'>
            <MyInput  placeholder='Enter header post' type='text' value={post.title} onChange={e=>setPost({...post, title: e.target.value})}/>
            <MyInput placeholder='Enter value post' type='text' value={post.body} onChange={e=>setPost({...post, body: e.target.value})}/>
            <MyButton onClick = {addNewPost} type='button'>Enter</MyButton>
        </form>
    )
}

export default PostForm