import React, { Component } from 'react';
import { connect } from 'react-redux';
import VerseItem from '../components/Verse-item';


class VerseList extends Component {
    renderVerseList =() =>{
        const {verses} = this.props;
        if(verses){
            return verses.map(verse => {
                return <VerseItem key={verse.id} verses={verse.verse}/>
            })
        }
    }
    
    render() {
        return (
            <div className="row">
                <div className="col s6 offset-s6">
                    <div className="card-panel teal lighten-1">
                        {this.renderVerseList()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { 
        verses : state.verses
     }
}



export default connect(mapStateToProps)(VerseList)