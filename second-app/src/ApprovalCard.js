import React from 'react';

{/*FUNCTIONAL COMPONENT -- CONST DECLARATION */}

const ApprovalCard = (props) =>{ 
    return(
        <div className = "ui card">
            <div className = "content">
               {props.children} {/*MAKE USE OF THE CommentDetail Component*/}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;