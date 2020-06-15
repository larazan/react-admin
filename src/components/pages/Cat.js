import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../actions/products_actions';

class Cat extends Component {

    componentDidMount() {
        this.props.dispatch(getCategories());
    }

    render() {
        const { products } = this.props;
        
        console.log(products.category);
        
        console.log(this.props);
        
        return (
            <div>
                cuma cek reduk state kategori
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Cat);