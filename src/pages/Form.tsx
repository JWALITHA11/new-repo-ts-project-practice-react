import {ChangeEvent, useState } from 'react';
type FormInputprops = {
    firstname : string;
    lastname : string ;
    email : string;
}

const Form : React.FC = () =>{
    const [formData , setFormData] = useState<FormInputprops>({
        firstname : " ",
        lastname  : " " ,
        email : " "
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        const {id , value} = e.target;
        setFormData({...formData , [id] : value});
    };
    return (
        <div className='form-div'>
        <form className="form">
            <fieldset>

            <div className='form-group' >
            <label htmlFor='firstname'>First Name : </label>
            <input type = "text" className="input" id = "firstname" value = {formData.firstname} onChange={handleChange} required/>
            </div>
            <p>You entered : {formData.firstname} </p>
            <div className='form-group' >
            <label htmlFor='lastname'>Last Name : </label>
            <input type = "text" className="input" id = "lastname" value = {formData.lastname} onChange={handleChange} required/>
            </div>
            <p> You entered : {formData.lastname}</p>
            <div className='form-group' >
            <label htmlFor='email'>Email: </label>
            <input type = "email" className="input" id = "email" value = {formData.email} onChange={handleChange} required/>
           </div>
            <p> You entered : {formData.email} </p>
            <button type="submit" onClick={() =>{
                    confirm("Do you want to submit the form")
                }}>Submit</button>
            </fieldset>
        </form>
        </div>
        );

}
export default Form ;