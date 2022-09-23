import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchCommentsRequest } from '../actions/CommentsActions';

export const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.CommentsReducer.comments);
    const poraka = useSelector(state=>state.CommentsReducer.error);

    useEffect(()=>{
        dispatch(fetchCommentsRequest())
    },[dispatch])

    return(
        <div id="comments">
            {comments.map((comment)=>{
                return(
                <React.Fragment key={comment.id}>
                    <p>Name: {comment.name}</p>
                    <p>Email: {comment.email}</p>
                    <p>Body: {comment.body}</p>
                    <hr/>
                </React.Fragment>
            )})}
            {poraka && <p>{poraka}</p>}
        </div>
    )
}