// concept-1->// Real time clock-->

// import React, {useState} from 'react';

// const App = ()=>{
//   let time = new Date().toLocaleTimeString();
//   const [ctime, setCtime] = useState(time);
//   const getTime =()=>{
//     let time = new Date().toLocaleTimeString();
//     setCtime(time);

//   }
//   setInterval(getTime,1000) ;
//   return(
//     <>
//       <h1 style={{color:"red",textAlign:"center",width:"50%",margin:"auto",padding:"10px",backgroundColor:"black"}} >{ctime}</h1>
//       {/* <button onClick={getTime}>Get Time</button> */}
//     </>
//   );
// }

// export default App;

//// concept-2-> changing the background image by clicking some switch-->

// import React, {useState} from 'react';

// const App = ()=>{

//   const purple = "#8e44ad"
//   const currName = "click me"
//   const [color, setColor] = useState(purple)
//   const [name, setName] = useState(currName)

//   const bgChange = ()=>{
//     let name = "Boom changed"
//     let newColor = '#34495e';
//     setColor(newColor);
//     setName(name);
//   }

//   const bgBack =()=>{
//     setColor(purple);
//     setName("Returned!!")
//   }

//   return(
//     <>
//       <div style={{backgroundColor:color}}>
//         <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
//       </div>
//     </>
//   )
// }

// export default App;

//// concept-3-> process to get the name from the user and set the name in site which user has given-->

// import React ,{useState} from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [fullName, setFullName] = useState("")
//   const inputEvent =(event)=>{
//     // console.log(event.target.value);
//     setName(event.target.value);
//   }


//   const changeName = ()=>{
//     setFullName(name);
//   }
//   return (
//     <>
//       <div>
//         <h1>Hello {fullName}</h1>
//         <input type="text" placeholder="Enter Your Name" 
//         onChange={inputEvent}
//         value={name}
//         />
//         <button onClick={changeName}>Submit</button>
//       </div>
//     </>
//   );
// };

// export default App;

// //// concept-3-> process to get the fist name and last name from the user with the help of form and seting the name in the site which user has given-->

// import React ,{useState} from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const [fullName, setFullName] = useState("")
//   const [fullLatName, setFullLastName] = useState("")

//   const inputEvent =(event)=>{
//     // console.log(event.target.value);
//     setName(event.target.value);
//   }
//   const inputEventTwo =(event)=>{
//     setLastName(event.target.value)
//   }


//   const changeName = (event)=>{
//     event.preventDefault(); // use to change default behaviour of html(refresh kore dai page ta so ure jay data) ata na dile name ta show kore chole jeto kichukhonei so ata ota theke atkay
//     setFullName(name);
//     setFullLastName(lastName);
//   }
//   return (
//     <>
//       <div className="main_div">
//         <form onSubmit={changeName}>
//           <div>
//             <h1>Hello {fullName} {fullLatName}</h1>
//             <input type="text" placeholder="Enter Your Name" 
//             onChange={inputEvent}
//             value={name}
//             />
//             <input type="text" placeholder="Enter Your Last Name" 
//             onChange={inputEventTwo}
//             value={lastName}
//             />
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default App;


//// concept-4-> making form using state hooks 


import React ,{useState} from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fName:'',
    lName:'',
  });

  const inputEvent =(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue)=>{
      if(name==='fName'){
        return{
          fName:value,
          lName:preValue.lName,
        };
      }
      else if(name==='lName'){
        return{
          fName:preValue.fName,
          lName:value,
        };
      }
    })

    // setName(event.target.value);
  }


  const changeName = (event)=>{
    event.preventDefault(); // use to change default behaviour of html(refresh kore dai page ta so ure jay data) ata na dile name ta show kore chole jeto kichukhonei so ata ota theke atkay
    alert("form Submited")
  }
  return (
    <>
      <div className="main_div">
        <form onSubmit={changeName}>
          <div>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <input type="text" placeholder="Enter Your Name" 
            name="fName"
            onChange={inputEvent}
            value={fullName.fName}
            />
            <input type="text" placeholder="Enter Your Last Name" 
            name="lName"
            onChange={inputEvent}
            value={fullName.lName}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
