import React from 'react'

function ICard({data}) {
  return (
    <div style ={{border:"2px solid red", width:"400px", margin:"12px", padding:"12px", height:"300px"}}>
<div>< img src={data.pic} height="100px" width="100px" alt="profile pic" />

</div>
      <h2>College: {data.college}</h2>
      <h2>Roll : {data.roll}</h2>
      <h2>Name : {data.name}</h2>
      <h2>Branch: {data.branch}</h2>
      <h2>Section: {data.section}</h2>
    </div>
  )
}

export default ICard
