import "./Gallery.css";

function Gallery() {
    return (
        <div className="gallery-container">
            <div className="row">
                <div className="gallery-text">
                    <h2>Fully Responsive Design</h2>
                    <p>
                        When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop. The page will behave responsively!
                    </p>
                </div>
                <div
                    className="gallery-image"
                    style={{
                        backgroundImage: "url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg')",
                    }}
                ></div>
            </div>
            <div className="row">
                <div
                    className="gallery-image"
                    style={{
                        backgroundImage: "url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg')",
                    }}
                ></div>
                <div className="gallery-text">
                    <h2>Updated For Bootstrap 5</h2>
                    <p>
                        Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="gallery-text">
                    <h2>Easy to Use & Customize</h2>
                    <p>
                        Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!
                    </p>
                </div>
                <div
                    className="gallery-image"
                    style={{
                        backgroundImage: "url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg')",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Gallery;
