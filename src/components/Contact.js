import React,{ Component} from 'react'
import { Form, FormGroup, Input, Label, Button} from 'reactstrap'
import axios from 'axios' 
import { toast } from "react-toastify";

async function handleToken(token, addresses) {
    toast("Success! Check email for details")
  }
class Contact extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    async handleSubmit(e) {
        e.preventDefault()
        this.setState({name: '', email: '', message: ''})
       toast("Success! Check email for details")
        const { name, email, message, } = this.state

        const form = await axios.post('/api/form', {
            name, 
            email,
            message
        }) 
        
        
        
       
    }

    
      
    render() {
        return (<div>
            <div className="gallery">

            </div>
        <div className='contact'>
        <div><h4>We Would Love To Hear From You!
        Filling out this form will only take a few minutes. Let us know how we can help!</h4>
        </div>
        <div>
            <Form onSubmit={this.handleSubmit} name='form' id='form'>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        style={{width: '400px'}} 
                        value={this.state.name}/>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        style={{width: '400px'}} 
                        value={this.state.email}/>
                </FormGroup>


                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input
                        type='text'
                        name='message'
                        onChange={this.handleChange} 
                        style={{width: '400px'}}
                        value={this.state.message}/>
                </FormGroup>

                <Button >Submit</Button>
            </Form>
            </div>
            </div>
            </div>
        )
    }
}
export default Contact;