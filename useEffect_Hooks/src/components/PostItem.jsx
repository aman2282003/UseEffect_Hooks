import React from 'react';
import '../App.css' 

function PostItem({data}){
return(
    <>
          {data.map((e) =>(
          <div key = {e.id} id = "each">
          <p><b>Id:</b> {e.id}</p>
          <p><b>Title :</b>  {e.title}</p>
          <p><b>Body : </b>{e.body}</p>
          </div>
      ))}
      </>
)
}
export default PostItem