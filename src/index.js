/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom"
//import Img from 'react-image'
import './styles.css'
//import med1 from './images/medico1.jpg'

const App = () =>{
    const div1 = {margin: 'auto', width: 900, height: 200, backgroundColor: '#EEE', padding: 100,
    borderRadius: 8, }
    const nomes={
        medico1: 'José da Silva',
        medico2: 'Maria da Silva',
        medico3: 'Jaqueline Mendes'
    }
       return( 
       <div style={div1}>
                <p className="rotulo" htmlFor="nome" style={{display: 'block', 
                    marginBottom:10, textAlign: 'center', 
                    justifyContent: 'center'}}>Profissionais de Saúde:</p>
                    
                <div style={{margin: 'auto',height:20, width: 700, backgroundColor: 'black', padding: 100,
            borderRadius: 8}}>

                    <div className="left"  >
                        <img /*src={med1}*//>  
                        <h3>{nomes.medico1}</h3>
                    </div>
                    <div className="right">
                        <img /*src={process.env.PUBLIC_URL + '../public/medico2.jpg'}*//>
                    </div>
                        <h3>{nomes.medico2}</h3>
                    <div className="middle" >
                        <img /*src={"https://images.pexels.com/photos/7659690/pexels-photo-7659690.jpeg?cs=srgb&dl=pexels-thirdman-7659690.jpg&fm=jpg"}*//>
                        <h3>{nomes.medico3}</h3>
                    </div>
                    
                </div>            
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
    )