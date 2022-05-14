import React from 'react';
import styles from './Form.module.css';


// function Text(props) {
//     return <p>Yo typed in input: {props.name}</p>
// }

class Form extends React.Component {

    state = {
        input1: '',
        input2: '',
        input3: ''
        // paragraph: ''
    }


    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.json = JSON.stringify(this.state);

    }


    // parseToJson() {
        // const json = JSON.stringify(st);

    //     this.setState({
    //         this.json : this.json
    //     });
    // }
    
    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

        // const json = JSON.stringify(this.state);
        // <Text name={json}/>;


        
        // this.setState({

        //   name: json.value
        // });
    }


    render() {

        return(

            <div>
               <h2>Form with inputs</h2>
               <form className={styles.wrapper} onSubmit={this.handleSubmit}>
                   <input className={styles.input} type='text' name='input1' value={this.state.input1} onChange={this.handleChange}/> <br/>
                   <input className={styles.input} type='text' name='input2' value={this.state.input2} onChange={this.handleChange}/> <br/>
                   <input className={styles.input} type='text' name='input3' value={this.state.input3} onChange={this.handleChange}/> <br/>
                   <input className={styles.button} type='submit' value='Translate to json'/>
               </form>
               {/* <p name='paragraph' value={this.state.paragraph}>

               </p> */}
            </div>

        )
    }
}

export default Form;