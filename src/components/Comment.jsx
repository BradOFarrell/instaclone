import React, {Component} from 'react';
import styled from 'styled-components';

const IconsContainer = styled.div`
width: 25%;
display: flex;
justify-content: space-around;
img{
  width: 50px;
  height: 50px;
}
`;

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <div>
        <IconsContainer><img src={comment.profile_pic}/></IconsContainer>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </div>
    );
  }
}

export default Comment;