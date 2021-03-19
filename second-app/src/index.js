import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = () =>{
    return (
        <div className = "ui container comments">
            {/* PASS THE PROPS*/}
            <ApprovalCard>
                Warning!
                <div>
                    Are you sure you wanna do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Sam" 
                    timeAgo = "today at 3.45pm" 
                    commentText = "New Comment 1" 
                    image = {Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Jane" 
                    timeAgo = "today at 2.45am" 
                    commentText = "New Comment 2" 
                    image = {Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Alex" 
                    timeAgo = "yesterday at 1.00am" 
                    commentText = "New Comment 3" 
                    image = {Faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );

};

ReactDOM.render(<App />,document.querySelector('#root'));