import React, { Component } from 'react';
import marked from 'marked';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state= {
            toBeUpdated: false,
            author: '',
            text: ''
        };
        this.deleteComment = this.deleteComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }
    updateComment(e) {
        e.preventDefault();
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }
    handleCommentUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        let author = (this.state.author) ? this.state.author : null;
        let text = (this.state.text) ? this.state.text : null;
        let comment = { author: author, text: text};
        this.props.onCommentUpdate(id, comment);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            author: '',
        text: ''
    })
    }
    deleteComment(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onCommentDelete(id);
        console.log('Comment deleted');
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div>
                <h3>{this.props.author}</h3>
                <span dangerouslySetInnerHTML={ this.rawMarkup() } />
                <a href='#' onClick={ this.updateComment }>Modifier </a>
                <a href='#' onClick={ this.deleteComment }> Supprimer</a>
                { (this.state.toBeUpdated)
                    ? (<form onSubmit={ this.handleCommentUpdate }>
                        <input
                            type='text'
                            placeholder='Modifier le nom…'
                             value={ this.state.author }
                             onChange= { this.handleAuthorChange } />
                        <input
                            type='text'
                            placeholder='Modifier le commentaire…'
                            value={ this.state.text }
                            onChange={ this.handleTextChange } />
                        <input
                            type='submit'
                            value='Modifier' />
                    </form>)
                    : null}
            </div>
        )
    }
}
export default Comment;