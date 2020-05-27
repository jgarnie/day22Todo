import React from "react";

import "./style.scss";

export default class Toogle extends React.Component{
    state = {
       icon:'question'
      
     };
     changeState=()=>{
        if(this.state.icon ==='question'){

            this.setState({
            
                icon : 'check'
            })
         
        }else if(this.state.icon === 'check'){

            this.setState({
                
                icon:'cross'
            })
        }else if(this.state.icon === 'cross'){

            this.setState({
            
                icon : 'question'
            })
            
        }
     }
 render(){
        return(
             <>
             
             <div onClick={this.changeState} className={this.state.icon}>

             </div>
             
             </>
        )
     }
 }