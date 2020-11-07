import React from 'react'
export default function posts({posts,loading}) {
  if(loading){
  return <h2>loading...</h2>
  }
    return(

       <tbody>
          {posts.map((post)=>(
          <tr>
            <td key={post.id}>{post.idNumber}</td>
            <td >{post.domainName}</td>
            <td>{post.apiKey}</td>
            <td>{post.emailLimit}</td>
            <td>Active</td>
            <td>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>

              <i
                style={{ paddingLeft: "1.5rem" }}
                class="fa fa-share-square-o"
                aria-hidden="true"
              ></i>
            </td>
          </tr>
          ))}
      </tbody>
   

    )
}
