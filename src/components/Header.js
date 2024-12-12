import "./Header.css";

function Header({ onSignUpClick }) {
    return (
        <div className="Header">
            <div className="bootstrap">
                <p>Start Bootstrap</p>
                </div>
                <div className="button-class">
                <button className="Button" type="button" onClick={onSignUpClick}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Header;
