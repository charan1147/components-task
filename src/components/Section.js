import "./Section.css";
import { BsLayers } from "react-icons/bs";
import { BsTerminal } from "react-icons/bs";
import { BsWindow } from "react-icons/bs";

function Section() {
    return (
        <section className="section">
            <div className="text-container">
                <div className="section-item">
                    <BsWindow size={60} color="blue" />
                    <h3>Fully Responsive</h3>
                    <p>This theme will look great on any device, no matter the size!</p>
                </div>

                <div className="section-item">
                    <BsLayers size={60} color="blue" />
                    <h3>Bootstrap 5 Ready</h3>
                    <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
                </div>

                <div className="section-item">
                    <BsTerminal size={60} color="blue" />
                    <h3>Easy to Use</h3>
                    <p>Ready to use with your own content, or customize the source files!</p>
                </div>
            </div>
        </section>
    );
}

export default Section;
