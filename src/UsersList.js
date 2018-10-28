import React, {Component} from 'react';

class UsersList extends Component {
    
    function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

    
    
    render() {
        return(
            <ul className="the-list">
                <CustomTextInput inputRef={input => this.fileInput = input}/>
            </ul>
        )
    }
}



export default UsersList;