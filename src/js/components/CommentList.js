import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    render() {
        let comments = this.props.data.map(comment => {
            return (
                <Comment
                    author={ comment.author }
                    uniqueID={ comment['_id'] }
                    onCommentDelete={ this.props.onCommentDelete }
                    onCommentUpdate={ this.props.onCommentUpdate }
                    key={ comment['_id'] }>
                    { comment.text }
                </Comment>
            )
        })
        return (
            <div>
                { comments }
            </div>
        )
    }
}
export default CommentList;