export default {
    template: `
    <body>
    <!-- Header -->
    <header id="hero-section">
        <div id="logo-header">
            <img src="images/logo_clear100.svg" alt="Ontario Summer Logo">
        </div>
        <div id="header-nav">
            <a href="twitter.com" target="_blank"><img src="images/twitter.svg" alt="Twitter"></a>
            <a href="facebook.com" target="_blank"><img src="images/facebook.svg" alt="Facebook"></a>
            <a href="instagram.com" target="_blank"><img src="images/instagram.svg" alt="Instagram"></a>
        </div>
        <div id="sign-in">
            <router-link to="/SignIn">Sign up</router-link>   
        </div>
    </header>
    <!-- Hero Image -->
    <section id="hero-image-central">
        <div>
            <h2 id="hero-text-south">CENTRAL ONTARIO</h2>
        </div>
        <div id="hero-p">
            <p>The Central Ontario Zone, as defined by the Smart Growth panel, is itself a challenge as a unit for both analysis and planning. 
            </p>
        </div>
    </section>
    <!-- Activity Section 1 -->
    <section id="act-1">
        <img src="../images/CentralOn_2.jpg" alt="Haliburton Forest and Wildlife Reserve">
        <h1 id="act-title">Haliburton Forest and Wildlife Reserve</h1>
        <p id="act-p">An outdoor lover's paradise, Haliburton Forest, features wilderness adventure activities including the Wolf Centre, the Walk in the Clouds forest canopy tour, groomed snowmobile/atv trails, mountain biking, dog sledding, fishing, hiking, astronomy, wildlife observation, wolf howls, natural history presentations, guided experiences, wilderness camping and accommodations, and an array of educational programs.  
        </p>
    </section>

    <!-- Activity Section 2 -->
    <section id="act-1">
        <img src="../images/CentralOn_3.jpg" alt="Splash">
        <h1 id="act-title">Splash</h1>
        <p id="act-p">Make your splash this summer! Enjoy hours of fun on the waterfront with the new Splash on Water Park located on Centennial Beach in the heart of downtown Barrie!  Explore the terrain and obstacles of the water park for nonstop fun for the whole family! The prime location of this awesome waterfront activity allows for a whole day of excitement for all ages to enjoy water recreation.
        </p>
    </section>

    <!-- Activity Section 3 -->
    <section id="act-1">
        <img src="../images/CentralOn_4.jpg" alt="Presqui’ile, brighton">
        <h1 id="act-title">Presqui’ile, brighton</h1>
        <p id="act-p">Presqu'ile is French for "almost an island". Presqu'ile Park is a provincial park located on piece of land (shaped like a boomerang) that sticks out into Lake Ontario. The park also has one of the longest sand beaches in Ontario. Whether you want to visit for the day, camp overnight, or rent a cottage, the park will be a highlight of your trip. There's a lot to do at Presqu'ile Park.  
        </p>
    </section>
    
    <!-- Footer -->
    <footer>
        <!-- logo -->
        <div id="footer-logo">
            <img src="images/logo_clear100.svg" alt="Ontario Summer Logo">
        </div>
        <!-- links -->
        <div id="links">
            <h1>LINKS</h1>
            <div id="separation-line"></div>
        </div>
        <!-- URL -->
        <div>
            <ul id="footer-links">
                <li><a href="Ontariossouthwest.com" target="_blank">Ontariossouthwest.com</a></li>
                <li><a href="Southeasternontario.ca" target="_blank">Southeasternontario.ca</a></li>
                <li><a href="Visitnorthwestontario.com" target="_blank">Visitnorthwestontario.com</a></li>
            </ul>
        </div>
        <!-- Social Media -->
        <div id="social-media">
            <a href="twitter.com" target="_blank"><img src="images/twitter.svg" alt="Twitter"></a>
            <a href="facebook.com" target="_blank"><img src="images/facebook.svg" alt="Facebook"></a>
            <a href="instagram.com" target="_blank"><img src="images/instagram.svg" alt="Instagram"></a>
        </div>
        <div id="copyrights">
            <h5>Copyright &copy; 2019 Ontariosummer</h5>
        </div>
    </footer>
    </body>

    `,

    created: function() {
        console.log('our LandingPage redered');
    },

    data: function() {
        return {
            message: "Welcome to my Super Awesome App!"
        }
    }
}