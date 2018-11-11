import React, {Component} from 'react';
// import Form from '../containers/Form';

class VerseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        
        const {verses} = this.props;
        return (
            <div>
                <p className="" >
                {verses}
                </p>
            </div>
        );
    }

    
    
    
};

export default VerseItem;

