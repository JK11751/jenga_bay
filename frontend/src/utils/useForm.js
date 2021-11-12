import {useState} from 'react'

export const useForm = (options) => {
    //manages state of the whole form
    const [data, setData] = useState(options?.initialValues || {});
    //to accomodate errors
    const [errors, setErrors] = useState({});
    
    /*
    The handleChange function is responsible for managing the change events of our input elements.
    We need a way to tell the function which attribute of the form it manages.
    For this reason, we call the function with the name of the attribute (key).
    handleChange then returns a function that uses the React event to update the form state.
    */
    const handleChange = (key, sanitizeFn,) => (e) => {
        const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
        setData({
          ...data,
          [key]: value,
        });
    };

    /*-------------function that handles the form submission----------*/
    const handleSubmit = async (e) => {
        e.preventDefault();//prevents form from submitting at this point

        const validations = options?.validations;
        // Check if there are validations specified
        if (validations) {
            let valid = true;
            const newErrors = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];
                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }

                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }

                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});

        if (options?.onSubmit) {
          options.onSubmit();
        }
    };

    return {
        data,
        handleChange,
        handleSubmit,
        errors,
      };
};
