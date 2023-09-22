import React from 'react';
import MyButton from '../UI/button/MyButton';

const Post = (props) => {
	return(
		<div className='post'>
			<h3>{props.number}</h3>	
			<div className='post-content'>
				<h2>{props.post.title}</h2>
				<h3>{props.post.body}</h3>
			</div>
			<MyButton className='delete-btn' onClick={() => props.remove(props.post)}>Delete</MyButton>
		</div>
	)
}

export default Post;