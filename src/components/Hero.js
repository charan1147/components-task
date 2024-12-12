import "./Hero.css";
import { useState } from "react";

function Hero({ emailInputRef }) {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
    };

    return (
        <header className="Header-class">
            <div className="row">
                <h1>Generate more leads with a professional landing page!</h1>
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

export default Hero;
