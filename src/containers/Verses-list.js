import React, { Component } from 'react';
import { connect } from 'react-redux';
import VerseItem from '../components/Verse-item';
import Quote from '../components/Quote';
import { Modal, Button } from "react-materialize";
import { Link } from 'react-router-dom';
import Form from './Form';


class VerseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedText: null,
        };
    }
    componentDidMount(){
        this.selectionHighLight()
    }    
    // Récupérer la valeur sélectionnée
    handleSelection(){
        this.initializeSelectedText.bind(this);
            let selection = window.getSelection().toString()
            this.setState({
                selectedText: selection,
            })     
    }
    // Initialise le state avant sélection
    initializeSelectedText() {
        this.setState({
            selectedText: null,
        })
    }
    // Affiche les versets principaux
    renderVerseList =() =>{
        const {verses} = this.props.verses;
        if(verses){
            return verses.map(verse => {
                return <VerseItem key={verse.id} verses={verse.verse}   />
            })
        }
    }
    // Si sélection, bouton modal disponible, sinon bouton désactivé
    renderButtonModal = () =>{
        if(!this.state.selectedText){
            return <div className="fixed-action-btn"><Button className='btn-floating btn-large disabled'><i className="material-icons">create</i></Button></div>
        } else {
            return <div className="fixed-action-btn"><Button className="btn-floating btn-large blue pulse" ><i className="material-icons">create</i></Button></div>
        }
    }
    reiceiveCallback(e){
        e = null;
        this.setState({
            selectedText: e
        })
    }
    renderPostList =() =>{
        const {posts} = this.props.posts;
        if(posts.length){
            return posts.map(post => {
                return <div className="card" key={post.id}>
                            <h6>Commentaires de : "{post.selection}"</h6>
                            <p>{post.content}</p>
                            <span>Numéro du vers : {post.number_verse}</span><br/>
                            <div>
                            <Link to={'/' + post.id}>
                                <Button>Voir</Button>
                            </Link>
                            </div>
                        </div>
            })
        }
    }
    // Cherche si il y a des selections commentées, si oui, ajout de surbrillance texte principal
    selectionHighLight(){
        var arrayText= []
        var text= this.props.verses.verses.map(verse => {
            return `${verse.verse}`
        })
        arrayText.push(text)
        let arrayComment = [];
        const comment = this.props.posts.posts.map(post=>{
            return `${post.selection}`
        })
        //
        console.log(text)
        arrayComment.push(comment)
        comment.map(com => {
            return document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.replace(com,`<span class="highligth tooltipped" data-position="top" data-tooltip="Passage commenté">${com}</span>`)

        })
        ///////////////Reste if number_verse = number_verse: alors...
        // if((text) in ((comment)) ){
        //     return console.log("oui", comment, text)
        // } else {
        //     console.log("non", comment, text)
        // }
        // if(this.props.posts){
        //    console.log(this.props.posts.posts[0].selection)
        //    console.log(this.props.verses.verses)
        // }
        
    }
    render() {
        if(this.state.selectedText){
            console.log(this.state.selectedText)
        }
        return (
            <div >
                <Quote quote={this.state.selectedText} callback={this.reiceiveCallback.bind(this)}/>
                <div className="row">
                    <div className="col s6">
                        <Modal
                            header={this.state.selectedText}
                            fixedFooter
                            trigger={this.renderButtonModal()}>
                            <Form/>
                        </Modal> 
                        <div id="text" className="main-card card-panel z-depth-2" onClickCapture={this.handleSelection.bind(this)}  >
                            {this.renderVerseList()}
                        </div>
                    </div>
                    <div className="col s6">
                        {this.renderPostList()}
                    </div>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { 
        verses : state.verses,
        posts : state.posts
     }
}





export default connect(mapStateToProps)(VerseList);