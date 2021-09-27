import React from 'react'
import s from './Post.module.css'
import NewPost from './NewPost/NewPost'



export default function Post(props) {

const Postinfo = props.postData.map( p => <NewPost like={p.like} message={p.message} />)

	return (
		<div>
			<div className={s.post}></div>
			<textarea></textarea>
			<button>добавить</button>
			{Postinfo}
			{/* <NewPost like={postData[0].like} message={postData[0].message} /> */}
		</div>
	)
}
