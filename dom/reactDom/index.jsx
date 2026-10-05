const container=document.getElementById('root');
console.log(container);

const root=ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red'}},'Abes Engineering College');
// // root.render(h2);
// const img=React.createElement('img',{src:'https://www.abes.ac.in/assets/HomePage/About%20ABES.webp',style:{height:'100px',width:'100px'}});
// const div=React.createElement('div',{style:{border:'2px dotted black',height:'200px',width:'200px'}},[h2,img]);
// root.render(div);
// root.render(img);

// const h1=React.createElement('h1',{},'Resume');
// const h2=React.createElement('h1',{},'Name: Sujeet Kumar');
// const h3=React.createElement('h1',{},'Resume');
// const h4 =React.createElement('h1',{},'Resume');
//  const div=React.createElement('div',{style:{border:'2px dotted black',height:'200px',width:'200px'}},[h1,h2]);
 const h21=<h2>Welcome to JSX</h2>
 const h22=<h1>ABES Engineering College</h1>
 const wrapper=<div style={{border:`2px solid red`}}>{h21}{h22}</div>
 const div=
 <div style={{color:"greenyellow"}}>
 {wrapper}
 <h2>Heyyy..using JSX</h2>
 <img src="" alt="" />
 
 
 </div>
 root.render(div);
 


// root.render(h1);
