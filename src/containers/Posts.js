import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from "react-materialize";


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.sendPostValue.bind(this);
    }
    renderPostList =() =>{
        const {posts} = this.props.posts;
        if(posts){
            return posts.map(post => {
                return <div className="card" key={post.id}>
                            <h6>Commentaires de : "{post.selection}"</h6>
                            <p>{post.content}</p>
                            <span>Numéro du vers : {post.number_verse}</span><br/>
                            <Link to={'/' + post.id}>
                                <Button>Voir</Button>
                            </Link>
                        </div>
            })
        }
    }
    render() {
        return (
            <div className="container">
               {this.renderPostList()}
            </div>
        );
    }
    sendPostValue(post){
        this.props.callbackpostvalue(post);
    }
    
}



const mapStateToProps = state => {
    return {
            posts : state.posts 
        }
}



export default connect(mapStateToProps)(Posts)