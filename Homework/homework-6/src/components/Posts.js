import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
    .then(result=>result.json())
    .then(json=>setPosts(json))
    .catch(err=> alert(err))
  },[])

  const [addPostData, setAddPost] = useState({
    title: "",
    body: "",
    
  });

  const [editPostData, setEditPost] = useState({
    title: "",
    body: "",
    
  });

  const [editPostId, setEditPostId] = useState(null);

  //HANDLE ADD FORM INPUT CHANGES
  const addChange = (e) => {
    e.preventDefault();

    const fieldName =e.target.getAttribute("name");
    const fieldValue =e.target.value;

    const newPostData = { ...addPostData };
    newPostData[fieldName] = fieldValue;
    
    setAddPost(newPostData);
    
  };

  //ADD POST ON FORM SUBMIT
  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Math.floor(Math.random()*100),
      title: addPostData.title,
      body: addPostData.body,
      
    };

    const newPosts = [...posts, newPost];
    setPosts(newPosts);
   
  };

  // HANDLE INPUT CHANGE ON EDITED ROW
  const editChange = (e) => {
   e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newPostData = { ...editPostData };
    newPostData[fieldName] = fieldValue;

    setEditPost(newPostData);
  };

  //EDIT POST ON BUTTON CLICK
  const editPost = (e, post) => {
    e.preventDefault();
    setEditPostId(post.id);

    const postValues = {
      title: post.title,
      body: post.body,
      
    };

    setEditPost(postValues);
  };

  //CANCEL EDIT
  const cancelEdit = () => {
    setEditPostId(null);
  };

  // SAVE EDITED ROW
  const savePost = (e) => {
    e.preventDefault();

    const editedPost = {
      id: editPostId,
      title: editPostData.title,
      body: editPostData.body,
    };

    const newPosts = [...posts];
    const index = posts.findIndex((post) => post.id === editPostId);
    newPosts[index] = editedPost;

    
    setPosts(newPosts);
    setEditPostId(null);
  };

 //DELETE POST ROW
  const deletePost = (id) => {
    const removePost = posts.filter((post) => post.id !== id);
    setPosts(removePost);
  };

 
  return (
    <div className="app-container">

      {/* ADD POST FORM */}
      <h2>Add post</h2>
      <form className="post-form"onSubmit={addPost}>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter title"
          onChange={addChange}
        />
        <br /><br />
        <input
          type="text"
          name="body"
          required="required"
          placeholder="Enter body"
          onChange={addChange}
        />
        <br /><br />
        <button className="add"type="submit">Add</button>
      </form>

    {/* FORM TO RENDER EITHER READ ROW OR EDIT ROW */}
      <form onSubmit={savePost}>
        <table border={1}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <>
              {/* EDIT POST ROW */}
                {editPostId === post.id ? (
                 <tr>
                 <td>
                   <input
                     type="text"
                     required="required"
                     placeholder="Enter title"
                     name="title"
                     value={editPostData.title}
                     onChange={editChange}
                     className="input-l"
                   ></input>
                 </td>
                 <td>
                   <input
                     type="text"
                     required="required"
                     placeholder="Enter body"
                     name="body"
                     value={editPostData.body}
                     onChange={editChange}
                     className="input-l"
                   ></input>
                 </td>
                 
                 <td className="flex">
                   <button type="submit" className="add">Save</button>
                   <button type="button" onClick={cancelEdit}>
                     Cancel
                   </button>
                 </td>
               </tr>
              //  READ POST ROW
                ) : (
                  <tr>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  
                  <td className="flex">
                    <button
                      type="button"
                      className="edit"
                      onClick={(e) => editPost(e, post)}
                    >
                      Edit
                    </button>
                    <button type="button" onClick={() => deletePost(post.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>

      
    </div>
  );
};

export default Posts;