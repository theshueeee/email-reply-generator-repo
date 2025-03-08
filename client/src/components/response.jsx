import { useState } from "react";

export const Response =()=>{

  const [responseAi,setResponseAi]= useState("");

  return (
    <div>
      <p>
        {responseAi}
      </p>
    </div>
  );
}