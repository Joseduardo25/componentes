import React from 'react';
const Calachua = (props) => {
  return(
    <div>
      <img src={props.imagen} style={{width:'50px', heigth:'50px', borderRadius:'50%'}}/>
  <div>{props.texto}</div>    
    </div>
  )
}
const avatares = [
  {
    imagen:'https://upload.wikimedia.org/wikipedia/commons/d/d9/J_Balvin_2019.png',
    texto:'J Balvin'
  },
  {
    imagen:'https://mui.today/__export/1583369932727/sites/mui/img/2020/03/04/mezca-ozuna-foto-main-1234-1_x1x.jpg_423682103.jpg',
    texto:'Ozuna'
  }
]

function App() {
  return (
  <div>
    {avatares.map((e)=>(<Calachua imagen={e.imagen} texto={e.texto}/>))}
  </div>
   
    
  );
}

export default App;
