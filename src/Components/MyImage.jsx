import React from 'react';

const MyImage = () => {
    const name = "Munna";
    const about = "i want to learn programming";
    // eslint-disable-next-line no-unused-vars
    const rating ="12"
  let age= 20;
  let movie = "not available";
  if(age>16){
    movie = "watch now"
  }
    const result = ()=>{
      const result = "1";
      return result;
    }
    return (
        <div>
             <div className=" flex items-center justify-center ">
    <div className="text-center "> 
       <img className=" w-1/2 h-1/2 mx-auto" src="mypic.jpg" alt="" />
      <h1 className="font-bold text-2xl"> Name:{name}</h1>
      <h1 className="font-bold text-2xl">Rating:{30}</h1>
      <h2 className="font-semibold">About{about} </h2>
      <h2 className="font-semibold">result{result()} </h2>
      <button> movie:{movie}</button>
      <br />
      <button>age: {age >18 ? "watch Movie":"not available"} </button>
      </div>
    </div>
        </div>
    );
};

export default MyImage;
