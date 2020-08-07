import React from 'react';


const Calachua = (props) => {
  return(
    <div>
      <img 
        src={props.imagen} 
        style={{
          width:'50px', 
          height:'50px',
          borderRadius:'50%'
        }}
      />
      <div>
        {props.texto}
      </div>
    </div>
  )
}
const avatares = [
  {
    imagen:'https://static1.abc.es/media/cultura/2019/11/11/nueva-cancion-billie-eilish-k82B--620x349@abc.jpg',
    texto:'Billie'
  },
  {
    imagen:'https://dam.vanidades.com/wp-content/uploads/2019/05/Cardi-b-770x513.jpg',
    texto:'Cardi B'
  }
]
function App() {
  return (
   <div>
     {avatares.map((e)=>
     (<Calachua 
     imagen={e.imagen} 
     texto={e.texto}
     />
     ))}
   </div>
   
    
  );
}

export default App;
