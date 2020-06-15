import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import Form from './Form';

class FormLayout extends Component {

    state = {
        category: 'grocery'
    }

    handleChangeOpt = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    render() {
        const options = [
            {
                name: 'Groceries',
                value: 'groceries'
            },
            {
                name: 'Clothing',
                value: 'clothing'
            },
            {
                name: 'Cosmetics',
                value: 'cosmetics'
            },
            {
                name: 'Medicine',
                value: 'medicine'
            },
        ]

        const generateOpt = (options) => (
            options.map((item,i) => (
                <option value={item.value} key={i}>{item.name}</option>
            ))
        )

        return (
            <>
              <Navbar />  
                <div className="container">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <select className="form-control" name="category" onChange={this.handleChangeOpt}>
                                <option value="">Pilih Kategori</option>
                                {generateOpt(options)}
                            </select>
                        </div>
                    </div>
                </div>
              <Form category={this.state.category} />
            </>
        )
    }
}

export default FormLayout;