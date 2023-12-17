import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import './Suggestions.css'
import Post from './posts/Post.js'

function Timeline() {
  const [posts, setPosts]  = useState([
    {
      user: 'redian_',
      postImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      likes: 182,
      timestamp: '1d',
    },
    {
      user: 'zishanX_',
      postImage: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      likes: 1874,
      timestamp: '12h',
    },
    {
      user: 'agunMAMA47',
      postImage: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg',
      likes: 7,
      timestamp: '16m',
    },
  ]);
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className="timeline__posts">
          {posts.map( post => (
            <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp}/>
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions/>
      </div>
    </div>
  )
}

export default Timeline