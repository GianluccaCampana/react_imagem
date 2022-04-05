import React from "react";
import ReactDOM from "react-dom"
import  './styles.css'

const App = () =>{
    const div1 = {margin: 'auto', width: 800, height: 200, backgroundColor: '#EEE', padding: 100,
    borderRadius: 8, }
       return( 
       <div style={div1}>
                <h3 className="rotulo" htmlFor="nome" style={{display: 'block', 
                    marginBottom:10, textAlign: 'center', 
                    justifyContent: 'center'}}>Profissionais de Saúde:</h3>
                    
                <div style={{margin: 'auto',height:20, width: 600, backgroundColor: 'black', padding: 100,
            borderRadius: 8}}>

                    <div className="div3" style={{margin: 'auto',height:20, width: 50, backgroundColor: 'yellow', padding: 50,
            borderRadius: 8, float: 'left'}}></div>
             <      div className="div3" style={{margin: 'auto',height:20, width: 50, backgroundColor: 'green', padding: 50,
            borderRadius: 8,  }}></div>
                    <div className="div3" style={{margin: 'auto',height:20, width: 50, backgroundColor: 'green', padding: 50,
            borderRadius: 8, float: 'right' }}></div>
                </div>            
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
    )