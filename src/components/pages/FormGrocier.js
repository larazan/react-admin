import React, { Component } from 'react'

class FormGrocier extends Component {
    state = {
        fields:'',
        name: '',
        brand: '',
        nut: [],
        val: [],
        nutri:[],
        inputs: [0,1,2]
    }

    handleChange = (event) => {
        // [event.target.name] = event.target.value;
        this.setState({ [event.target.name]: event.target.value });
    }

    onNutChange = (index, e) => {
        let nutris = this.state.nut.slice();
        
        nutris[index] = e.target.value;

        this.setState({
            nut: nutris
        })
    }

    onValChange = (index, e) => {
        let values = this.state.val.slice();
        
        values[index] = e.target.value;

        this.setState({
            val: values
        })
    }

    addInput = (e) => {
        e.preventDefault();
        let newInput = this.state.inputs.length;
        this.setState({
            inputs: this.state.inputs.concat(newInput)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // let arrNut = [];
        // let arrVal = [];
        // event.target.querySelectorAll('[name="nut"]').forEach((e,i) => {
        //     arrNut.push(e.value);
        // });
        // event.target.querySelectorAll('[name="val"]').forEach((e,i) => {
        //     arrVal.push(e.value);
        // });

        // let arrNutri = [];
        // for(let i = 0; i < arrNut.length; i++) {
        //     arrNutri.push({
        //         name: arrNut[i],
        //         value: arrVal[i]
        //     })
        // }

        // this.setState({
        //     nutri: arrNutri
        // })

        // // console.log(arrNutri);
        // console.log(this.state.nutri);
        console.log('submit enter');

        // another result
        let arrNutrition = [];
        for(let i = 0; i < this.state.nut.length; i++) {
            arrNutrition.push({
                name: this.state.nut[i],
                value: this.state.val[i]
            })
        }
        this.setState({
            nutri: arrNutrition
        })
    }

   

    render() {
        console.log(this.state);
        const { inputs } = this.state;
        const inputNutri = inputs.length ? (
            inputs.map((index) => {
                return (
                    <div className="form-group row" key={index}>
                        <div className="col-md-6">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="label" 
                                name="nut"
                                value={this.state.nut[index]}
                                onChange={this.onNutChange.bind(this, index)}
                            ></input>
                        </div>
                        <div className="col-md-6">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="value" 
                                name="val"
                                value={this.state.val[index]}
                                onChange={this.onValChange.bind(this, index)}
                            ></input>
                        </div>
                    </div>
                )
            })
        ) : null

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
                                <div className="col-md-12">
                                    <textarea 
                                        name="description" 
                                        className="form-control" 
                                        placeholder="description"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <select className="form-control" name="category">
                                        <option value="">please select category</option>
                                        <option value="milk">Milk</option>
                                        <option value="beef">Beef</option>
                                        <option value="fish">Fish</option>
                                        <option value="sauce">Sauce</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="ingredients" 
                                        className="form-control" 
                                        placeholder="ingredients"
                                    ></textarea>
                                </div>
                            </div>
                            <label>Nutricion Fact</label>
                            {/* <div className="form-group row">
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="label" 
                                        name="nut"
                                       
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="value" 
                                        name="val"
                                       
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="label" 
                                        name="nut"
                                      
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="value" 
                                        name="val"
                                       
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="label" 
                                        name="nut"
                                       
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="value" 
                                        name="val"
                                       
                                    ></input>
                                </div>
                            </div> */}
                            {inputNutri}
                            <div className="form-group row">
                                <div className="col-sm-10">
                                <button type="btn" onClick={this.addInput} className="btn btn-danger">add input</button>
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
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="packaging" 
                                        name="packaging"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="preparation_n_usage" 
                                        className="form-control" 
                                        placeholder="preparation and usage"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="storage_information" 
                                        className="form-control" 
                                        placeholder="storage information"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="safety_information" 
                                        className="form-control" 
                                        placeholder="safety information"
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

export default FormGrocier;