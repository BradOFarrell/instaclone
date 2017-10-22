import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

const PostUser = styled.div`
display: flex;
justify-content: flex-start;
align-items: right;
padding: 16px;
img{
  height: 30px;
  width: 30px;
  border-radius: 100%;
}
span{
  padding-left: 5px;
  font-weight: bold;
}
`;

const PostContent = styled.div`
img{
  max-width: 600px;
  margin: 0 auto;
}
`;

const PostContainer = styled.div`
background-color: #fff;
border-radius: 3px;
width: 95vw;
max-width: 600px;
margin: 20px auto;
border: 1px solid #e6e6e6;
`;

class Post extends Component{
  render(){
    const { post } = this.props;
    return(
      <div>
        <PostContainer>
        <PostContent>
        <div>
          <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
          </PostUser>
        </div>
        <div>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </div>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </PostContent>
        </PostContainer>
      </div>
    )
  }
}

export default Post;