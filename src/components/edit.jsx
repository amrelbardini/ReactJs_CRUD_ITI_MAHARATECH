import React from 'react';
const Edit = (props) => {
    return ( 
        <React.Fragment>
            <i onClick={props.onEdit} className="fa-solid fa-pen-to-square"></i>
        </React.Fragment>
     );
}
 
export default Edit;