import React from "react";

export default function CustomerForm(props) {

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="inputs">
                <label>Full Name 
                    <input 
                        name="fullName"
                        type="text"
                        placeholder="Jack Nunnink"
                        maxLength="50"
                        value={props.values.fullName}
                        onChange={handleChange}
                    />
                </label>
                <label>Phone Number
                    <input 
                        name="phoneNumber"
                        type="tel"
                        placeholder="123-456-7890"
                        value={props.values.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>Email
                    <input 
                        name="email"
                        type="email"
                        placeholder="email@email.com"
                        value={props.values.email}
                        onChange={handleChange}
                    />
                </label>
                <label>Tell us what kind of website you want
                    <select value={props.values.websiteType} name="websiteType" onChange={handleChange}>
                        <option value="">Select a Website</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="Shop">Shop</option>
                        <option value="Buisness">Buisness</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <div className="submit">
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}