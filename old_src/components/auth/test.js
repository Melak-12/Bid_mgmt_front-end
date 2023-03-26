// import React,{useState} from 'react';
function Register(){

     function signup(){
            const nname="ghj";
            const eemail="bla bla";
            const pps="passssssss";
            const newUSer={nname,eemail,pps};
let result= fetch("http://127.0.0.1:8000/api/register",{
method:'POST',
body: JSON.stringify(newUSer),
headers: { 
  "Content-Type":'application/json',
  "Accept":'application/json'
}

 })
 result=  result.json();
 console.warn('result',result);
    }
 
}