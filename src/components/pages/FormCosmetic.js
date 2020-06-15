import React, { Component } from 'react'

class FormCosmetic extends Component {

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

        const optCat = [
            {
                name: 'Cologne',
                value: 'Cologne'
            },
            {
                name: 'Perfumes',
                value: 'Perfumes'
            },
            {
                name: 'Soap',
                value: 'Soap'
            },
            {
                name: 'Skincare',
                value: 'Skincare'
            },
            {
                name: 'Foundation',
                value: 'Foundation'
            },
            {
                name: 'Lipstick',
                value: 'Lipstick'
            },
            {
                name: 'Shampoo',
                value: 'Shampoo'
            },
            {
                name: 'Lotion',
                value: 'Lotion'
            },
            {
                name: 'Tonic',
                value: 'Tonic'
            },
            {
                name: 'Hair Color',
                value: 'Hair Color'
            },
            {
                name: 'Hair Bleach',
                value: 'Hair Bleach'
            },
            {
                name: 'Mouthwash',
                value: 'Mouthwash'
            },
            {
                name: 'Eyebrow',
                value: 'Eyebrow'
            },
            {
                name: 'Eyeliner',
                value: 'Eyeliner'
            },
            {
                name: 'Eye shadow',
                value: 'Eye shadow'
            },
            {
                name: 'Mascara',
                value: 'Mascara'
            },
            {
                name: 'Moisturizing',
                value: 'Moisturizing'
            },
            {
                name: 'Tooth paste',
                value: 'Tooth paste'
            }
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
                                       {generateOpt(optCat)}
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

export default FormCosmetic;