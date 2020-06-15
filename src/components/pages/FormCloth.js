import React, { Component } from 'react'

class FormCloth extends Component {

    state = {
        name: '',
        brand: ''
    }

    handleChange = (event) => {
        // [event.target.name] = event.target.value;
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
        
    }

    render() {

        const optSize = [
            {
                name: 'Extra Small (XS)',
                value: 'XS'
            },
            {
                name: 'Small (S)',
                value: 'S'
            },
            {
                name: 'Medium (M)',
                value: 'M'
            },
            {
                name: 'Large (L)',
                value: 'L'
            },
            {
                name: 'Extra Large (XL)',
                value: 'XL'
            },
            {
                name: 'Double Extra Large (XXL)',
                value: 'XXL'
            }
        ]

        const optColor = [
            {
                name: 'Black',
                value: 'black'
            },
            {
                name: 'Red',
                value: 'red'
            },
            {
                name: 'Blue',
                value: 'blue'
            },
            {
                name: 'Green',
                value: 'green'
            },

            {
                name: 'Yellow',
                value: 'yellow'
            },
            {
                name: 'White',
                value: 'white'
            },
        ]

        const generateOpt = (options) => (
            options.map((item,i) => (
                <option value={item.value} key={i}>{item.name}</option>
            ))
        ) 

        return (
            <div className="container">
                <div className="row">
                    <div className="form">
                        <form className="" onSubmit={this.handleSubmit}>
                            <h4>Detail Product</h4>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="product name" 
                                        name="name" 
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="brand name" 
                                        name="brand"
                                        onChange={this.handleChange}
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="sku" 
                                        name="sku"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="price" 
                                        name="price"
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="weight" 
                                        name="weight"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <select className="form-control" name="color">
                                        <option> Select Color </option>
                                        {generateOpt(optColor)}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control" name="size">
                                        <option> Select Size </option>
                                        {generateOpt(optSize)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="description" 
                                        className="form-control" 
                                        placeholder="description"
                                    ></textarea>
                                </div>
                            </div>
                            
                            <label>further information</label>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="country of origin" 
                                        name="country_of_origin"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="fabric" 
                                        className="form-control" 
                                        placeholder="fabric"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="safety_instruction" 
                                        className="form-control" 
                                        placeholder="safety instruction"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="other_information" 
                                        className="form-control" 
                                        placeholder="other information"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="manufacturer" 
                                        name="manufacturer"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="barcode" 
                                        name="barcode"
                                    ></input>
                                </div>
                            </div>
                            
                            <br />
                            

                            <div className="form-group row">
                                <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">submit</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormCloth;