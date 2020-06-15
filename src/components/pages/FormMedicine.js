import React, { Component } from 'react'

class FormMedicine extends Component {

    state = {
        fields:'',
        name: '',
        brand: '',
        kompos: [],
        val: [],
        komposisi:[],
        inputs: [0,1,2]
    }

    handleChange = (event) => {
        // [event.target.name] = event.target.value;
        this.setState({ [event.target.name]: event.target.value });
    }

    onKompChange = (index, e) => {
        let komposi = this.state.kompos.slice();
        
        komposi[index] = e.target.value;

        this.setState({
            kompos: komposi
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
        let arrKomposisi = [];
        for(let i = 0; i < this.state.kompos.length; i++) {
            arrKomposisi.push({
                name: this.state.kompos[i],
                value: this.state.val[i]
            })
        }
        this.setState({
            komposisi: arrKomposisi
        })
    }

    render() {
        const { inputs } = this.state;
        const inputKomposisi = inputs.length ? (
            inputs.map((index) => {
                return (
                    <div className="form-group row" key={index}>
                        <div className="col-md-6">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="label" 
                                name="kompos"
                                value={this.state.kompos[index]}
                                onChange={this.onKompChange.bind(this, index)}
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

        const optType = [
            {
                name: 'Kapsul',
                value: 'kapsul'
            },
            {
                name: 'Tablet',
                value: 'tablet'
            },
            {
                name: 'Sirup',
                value: 'sirup'
            },
            {
                name: 'Salep',
                value: 'salep'
            },
            {
                name: 'Bedak',
                value: 'bedak'
            },
            {
                name: 'Spray',
                value: 'spray'
            },
            {
                name: 'Obat tetes',
                value: 'obat tetes'
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
                                <div className="col-md-12">
                                    <select className="form-control" name="category">
                                        <option value="">please select type</option>
                                       {generateOpt(optType)}
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
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="khasiat_kegunaan" 
                                        className="form-control" 
                                        placeholder="khasiat dan kegunaan"
                                    ></textarea>
                                </div>
                            </div>
                            <label>Komposisi</label>
                            {inputKomposisi}
                            <div className="form-group row">
                                <div className="col-sm-10">
                                <button type="btn" onClick={this.addInput} className="btn btn-danger">add input</button>
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
                            <label>Further Information</label>
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
                                        name="indikasi_information" 
                                        className="form-control" 
                                        placeholder="indikasi information"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="usage_information" 
                                        className="form-control" 
                                        placeholder="usage information"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="warning_n_precaution" 
                                        className="form-control" 
                                        placeholder="warning and precaution"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="period after opening" 
                                        name="period_after_opening"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <textarea 
                                        name="store_information" 
                                        className="form-control" 
                                        placeholder="store information"
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

export default FormMedicine;