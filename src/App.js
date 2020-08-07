import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Calachua = (props) => {
  return(
    <div>
      <img src={props.imagen} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <div>{props.texto}</div>
    </div>
  )
}

const avatares = [
  {
    imagen:'https://laverdadnoticias.com/__export/1594500304799/sites/laverdad/img/2020/07/11/goku_super_saiyan_blue.png_793492074.png',
    texto: 'Goku'
  },
  {
    imagen:'https://i.pinimg.com/originals/54/9c/8a/549c8a44be4c2a946281837fbde6fde1.jpg',
    texto:'Gohan'
  },
  {
    imagen:'https://3.bp.blogspot.com/_Lko5wELeW8I/R6Fax_4kO6I/AAAAAAAAAe4/RmeIHVhZM8s/s320/mayunia.jpg',
    texto:'Picoro'
  }
]

function App() {
  return (
    <div>
      {avatares.map((e) => (
          <Calachua
            imagen={e.imagen} 
            texto={e.texto}
            abierto={!false}
          />
      ))}
      <Button variant="outlined">Default</Button>

    </div>
  );
}

export default App;
