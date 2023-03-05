import React, { useState } from "react";

const Header = () => {
  return (
    <>
      <h1 style={{ color: "darkblue" }}>Hello Style!</h1>
      <p>Add a little style !</p>
    </>
  );
};

function Inlinecss() {
  const [ptag, setPtag] = useState("this is p tag");
  function EditTag() {
    setPtag("now! this tag edit");
  }
  return (
    <div>
      <p onClick={() => EditTag()} style={{ backgroundColor: "yellow" }}>
        {ptag}
      </p>
    </div>
  );
}

//javascript object

const Obj = () =>{

    const myStyle = {
        color:"yellow",
        backgroundColor: "darkblue",
        padding: "20px",
        fontFamily: "Sans-Serif"
    }
    return (
        <>
        <h1 style={myStyle}>Hello Style!</h1>
        <p>Add a little style</p>
        </>
    )
}


//javascript object


const Myobj = () =>{

    const Mytag = {
        
        backgroundColor: "lightpink",
        padding: "10px",
         fontSize: "20px",
         fontWeight: "bold"
        
    }
    return (
      <p style={Mytag}>this is a p tag</p>
    )
}
export { Header, Inlinecss,Obj,Myobj};
