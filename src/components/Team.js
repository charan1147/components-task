import "./Team.css"

function Team(){
    return(
        <div className="Team-class">
            <div class="Main-row">
                    <div class="row">
                        <div class="testimonial-item ">
                            <img className="img-fluid rounded-circle mb-3" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" alt="..."/>
                            <h5>Margaret E.</h5>
                            <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="testimonial-item ">
                            <img className="img-fluid rounded-circle mb-3" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" alt="..."/>
                            <h5>Fred S.</h5>
                            <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="testimonial-item ">
                            <img className="img-fluid rounded-circle mb-3" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" alt="..."/>
                            <h5>Sarah W.</h5>
                            <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Team