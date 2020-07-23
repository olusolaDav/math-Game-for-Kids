import React, { Component } from 'react'

class Count extends Component {
    
    
        state = {
            num1: 3,
            num2: 4,
            response: "",
            score: 9,
            counter: 0,
            level: 1,
            s: ""
        }

        onChangeEvent = (event) => {
            this.setState({
            response: (event.target.value)
        })
        }

         onClickEvent = () => {
           //setInterval(() => this.timer(), 1000) 
           this.addSletter() 
        }  

        onKeyEvent = (event) => {
            event.preventDefault()
            if (event.key === "Enter" || event.click ==="click") {
                const answer = parseInt(this.state.response)
                if (answer === this.state.num1 * this.state.num2 ){
                    this.setState({
                        score: this.state.score + 1,
                        response: "",
                        counter: 0,
                        num1: Math.ceil(Math.random() * 10),
                        num2: Math.ceil(Math.random() * 10)

                    })
                    
                }  else {
                        this.setState({
                            score: this.state.score -1,
                            response: "",
                            counter: 0
                        })   
                    }
                    
            }          
        }

        componentWillMount() {
           this.TimerId= setInterval(() => this.timer(), 1000) 
           
        }

        
       
        timer= () =>{
            this.setState({
                counter: this.state.counter +1
            })
        }

        

     

       
 

       
       
        

    render() {
        if (this.state.counter >= 10){
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })
        }

         if (this.state.score >= 10) {
            this.setState({
                level: this.state.level +1
            })
            return(
                <div className= "level">
                    Next level!
                </div>
            )

        }

        if (this.state.counter >=2) {
            this.setState({
                s: "s"
            })
        }  
        return (
        
            <React.Fragment>
            <h3>Level {this.state.level}</h3>
            <p>{this.state.counter}second{this.state.s}</p>
            <h1>{this.state.num1} x {this.state.num2}</h1>
            <form onSubmit={this.onKeyEvent}>
            <input onKeyUp={this.onKeyEvent} onChange={this.onChangeEvent} value={this.state.response}></input>
            <button type="submit">SUBMIT</button>
            </form>
            
            <h2 >Your Score: {this.state.score} </h2>
            </React.Fragment>   
        )
    }
}

    


export default Count