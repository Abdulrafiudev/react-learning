import React from "react";
import "../public/styles.css"
import emojipedia from "./emojipedia";
import Entry from "./components/Entry";

function App() {
  return (
    <>
     
     <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map((emoji) => {
          return (
            <Entry emoji = {emoji.emoji} name = {emoji.name} meaning = {emoji.meaning} key = {emoji.id} id = {emoji.id}/>
          )
        })}
       
        
       
      </dl>
    
     
    </>
     
  );
}

export default App;
