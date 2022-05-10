import React from 'react';

class Form extends React.Component {

    state = {
        input1: '',
        input2: '',
        input3: ''
    }


    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.json = JSON.stringify(this.state);
    }
    
    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        // this.json;

            // const json = JSON.stringify(this.state);

            // this.setState({
            //     json
            // });
        }


    render() {

        // console.log(this.state.value);

        return(

            <div>
               <h2>Form with inputs</h2>
               <form onSubmit={this.handleSubmit}>
                   <input type='text' name='input1' value={this.state.input1} onChange={this.handleChange}/> <br/>
                   <input type='text' name='input2' value={this.state.input2} onChange={this.handleChange}/> <br/>
                   <input type='text' name='input3' value={this.state.input3} onChange={this.handleChange}/> <br/>
                   <input type='submit' value='Translate to json'/>
               </form>
               <p >
                   {this.json}
               </p>
            </div>

        )
    }
}

export default Form;