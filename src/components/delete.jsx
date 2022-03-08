import React from 'react';
const Delete = (props) => {
    return ( 
        <React.Fragment>
            <i  onClick={props.onRemove} className="fa-solid fa-trash"></i>
        </React.Fragment>

     );
}
 
export default Delete;