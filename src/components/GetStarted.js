import {useState} from "react"
import "./GetStarted.css"


function GetStarted({ emailInputRef }){
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
    };

    return (
        <header className="GetStarted-class">
            <div className="row">
                <h1>Ready to get started? Sign up now!</h1>
                <form className="form-class" onSubmit={handleSubmit}>
                    <div className="form">
                        <input
                            id="email"
                            ref={emailInputRef} 
                            className="form-input"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <button className="form-button" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                {isSubmitted && (
                    <p className="message">Form submission successful!</p>
                )}
            </div>
        </header>
    );
}

export default GetStarted