import {useState} from 'react';

function GeneralInfo(){
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumber:'',

        isSubmitted: false
    })
    function handleChange(event){
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function handleSubmit(event){
        event.preventDefault();
        setFormData({...formData, isSubmitted: true});
    }

    return(
        <section>
            <h2>General Information</h2>
            <p>This is where we will collect your name, email and phone number</p>
            {formData.isSubmitted ? (
                <div className="preview">

                </div>
            ):(
                <form onSubmit={handleSubmit}>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                    <label htmlFor='middleName'>Middle Name:</label>
                    <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <label htmlFor='phoneNumber'>Phone Number:</label>
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
}

export default GeneralInfo;