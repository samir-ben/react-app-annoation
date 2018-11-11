import React, { Component } from 'react';
import { Row, Input, Button } from "react-materialize";




class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            number_verse: null,
            content: ''
        };
    }
    handleValue(e){
        this.setState({
            content : e.target.value
        })
        console.log(this.state.content)
    }
    render() {
        return (
                <div>
                     <Row>
                        <Input type="textarea" placeholder="Tapez votre commentaire..." s={12} label="Commentaire" onChange={(e) => this.handleValue(e)} />
                        <Button waves='light'>Ajouter</Button>
                     </Row>
                </div>
        );
    }
}

export default Form;