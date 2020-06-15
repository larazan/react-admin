import React, { Component } from 'react';
import axios from "axios";

class Test extends Component {

   

    componentDidMount(){
        axios.get('/api/product/brands').then(response => {
            console.log(response);
            
        })
    }

    render() {
        return (
            <div>
                sebuah tes
               
            </div>
        )
    }
}


export default Test;