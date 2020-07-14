import React from "react";
import s from "./FormControls.module.css";

export const FormType = (FormType) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div>
                <FormType className={s.formControl + " " + (hasError ? s.error : '')}
                             {...props} {...input} />
            </div>
            {FormType === 'input' && hasError && <span className={s.textError}>{meta.error}</span>}
        </div>
    )

}