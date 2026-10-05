import React from 'react'
import ICard from './ICard'
// import studentimage from '../images/studentimage.jpg'
import studentImage from "../../images/download.jpg";
function ICardGallery() {

    const student=
    [
    {
        pic:studentImage,
        roll:"787878",
        name:"Rahul Kumar",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:studentImage,
        roll:"8989000",
        name:"Manish Kumar",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:studentImage,
        roll:"125656",
        name:"Sanjay Tomer",
        branch:"CSE-AIML",
        college:"ABES Engineering College"
    },
    {
        pic:studentImage,
        roll:"54329",
        name:"Pankaj Kumar",
        branch:"CSE-DS",
        college:"ABES Engineering College"
    },
    {
        pic:studentImage,
        roll:"78431",
        name:"Alka Singh",
        branch:"CSE",
        college:"ABES Engineering College"
    }
  ]


  return (
    <div style={{height:'400px', display:'flex',justifyContent:'space-evenly', border:'2px solid black'}}>
{/* <ICard pic={studentimage} roll="8808" name="Ankit Kumar" branch="CSE" college="ABES Engineering College" />
<ICard roll="34365" name="Rahul" branch="CSE" college="ABES Engineering College" />
<ICard roll="876788" name="Amit Tomer" branch="CSE" college="ABES Engineering College" /> */}
   
  {/* <ICard data={student[1]} />  */}

  {
    student.map((ele)=>(
      <ICard data={ele} />

    ))
  }
   
    </div>
  )
}

export default ICardGallery;