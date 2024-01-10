import React, { useState, useRef, useCallback } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";



const Password = () => {
  const [length, setLength] = useState(8);
  const [spl, setSpl] = useState(false);
  const [num, setNum] = useState(false);
  const [password, setPassword] = useState("");
  const inpRef = useRef(null);

  // generate random password
  const onGeneratePass = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const splChar = "!@#$%^&*()+_=+{}[]|";
    let valid = chars;

    if (spl) valid += splChar;
    if (num) valid += number;
    let genPass = "";
    for (let index = 0; index < length; index++) {
      let index = Math.floor(Math.random() * (valid.length - 1));
      genPass += valid.charAt(index);
    }
    setPassword(genPass);
  }, [length, spl, num]);


   

   return (
     <div className=" flex flex-col font-serif border-2 border-black shadow-md shadow-black p-2 ">
       <label className="m-5 bg-gray-300  p-3 rounded-md">
         Length of Password :
         <input
           className="text-center mx-3 rounded-sm"
           type="number"
           value={length}
           onChange={(e) => {
             setLength(e.target.value);
           }}
         ></input>
       </label>
       <div className=" bg-green-300 p-3 rounded-md">
         <label className="flex flex-row font-serif justify-items-center">
           Include Special
           <input
             className="text-center rounded-sm mx-4"
             type="checkbox"
             value={length}
             checke={spl}
             onChange={(e) => {
               setSpl(e.target.value);
             }}
           ></input>
         </label>
         <label className="flex flex-row font-serif justify-items-center">
           Include Numbers
           <input
             className="text-center rounded-sm mx-4"
             type="Checkbox"
             value={length}
             checked={num}
             onChange={(e) => {
               setNum(e.target.value);
             }}
           ></input>
         </label>
       </div>
       <div className="flex justify-center items-center">
         <button
           className="p-4 bg-green-600 m-4 rounded-lg  hover:bg-green-300 hover:text-black"
           onClick={onGeneratePass}
         >
           Generate Password
         </button>
       </div>
       <strong className="p-3 bg-black rounded-sm text-white">
         Generated Password:{" "}
         <span
           className="   
        px-4 text-green-500"
           ref={inpRef}
         >
           {password}
         </span>
       </strong>

       <CopyToClipboard text={password}>
         <button className="p-3 bg-gray-300 text-black-700 font-bold my-4 rounded-md">Copy to clipboard</button>
       </CopyToClipboard>
     </div>
   );
 };

export default Password;