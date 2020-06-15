import React, { Component } from 'react';
import FormGrocier from './FormGrocier';
import FormCloth from './FormCloth';
import FormCosmetic from './FormCosmetic';
import FormMedicine from './FormMedicine';

class Form extends Component {

    render() {
        console.log(this.props.category);

        const { category } =  this.props;
        
        const renderForm = () => {
            let templateForm = null;

            switch(category){
                case('groceries'):
                    templateForm = (
                        <FormGrocier />
                    )
                break;
                case('clothing'):
                    templateForm = (
                        <FormCloth />
                    )
                break;    
                case('cosmetics'):
                    templateForm = (
                        <FormCosmetic />
                    )
                break; 
                case('medicine'):
                    templateForm = (
                        <FormMedicine />
                    )
                break;    
                default:
                    templateForm = null;
                break;        
            }

            return templateForm;
        }

        return(
            <>
                {renderForm()}
            </>
        )
    }
   
}

export default Form;