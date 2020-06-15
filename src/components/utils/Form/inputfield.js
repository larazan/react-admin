import React from 'react';

const InputField = ({formdata, change, id}) => {
    
    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid){
            errorMessage = (
                <div className="error_label">
                    <span className="text-danger">{formdata.validationMessage}</span>
                </div>
            )
        }

        return errorMessage;
    }

    const renderInput = () => {
        let formInput = null;

        // console.log(formdata.element);
        

        switch (formdata.element) {
            case 'input':
                formInput = (
                    <div>
                    { formdata.showlabel ?
                        <label htmlFor="{formdata.config.id}">{formdata.config.label}</label>
                        : null
                    }
                    
                    <input
                        {...formdata.config}
                        value={formdata.value}
                        className="form-control"
                        onBlur={(event)=> change({event,id,blur:true})}
                        onChange={(event)=> change({event,id}) }
                    />
                    {showError()}
                    </div>
                )
                break;
        
            default:
                formInput = null;
        }
        
        return formInput;
    }

    return (
        <div>
            {renderInput()}
        </div>
    )
}

export default InputField;