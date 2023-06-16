import React from 'react';
// const person=[
//     {
//         Name:'Piyush',
//         Age:50
//     },
//     {
//         Name:'Amit',
//         Age:40
//     }
    
// ]
const person =[
    {
        name:"amit",
        age:19,
        course:{
            c1: "c",
            c2: "html"
        }
    },
    {
        name:"mayur",
        age:20,
        course:{
            c1: "c",
            c2: "html"
        }
    }
];

function StudentFun(props) {
    return (
        <div>
            <h1>I m Student Function Based Component</h1>

            {/* {
                person.map((v,i)=>{
                    return(
                        <>

                            <h3>{v.Name}</h3>
                            <h5>{v.Age}</h5>
                        </>
                    )
                        
                    
                }) 
            } */}

            {
              person.map((v,i)=>{
                return(
                    <>
                        <h3>Name:{v.name}</h3>
                        <h3>Age:{v.age}</h3>
                        <h3>Course c1:{v.course.c1}</h3>
                        <h3>Course c2:{v.course.c2}</h3>

                    </>
                )
              })  
            }
        </div>
    );
}

export default StudentFun;