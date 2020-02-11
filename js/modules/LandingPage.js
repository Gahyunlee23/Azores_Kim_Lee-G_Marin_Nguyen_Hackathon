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
    <section>
        <div id="hero-image">
            <h2 id="hero-text">FIND YOURSELF AT HOME</h2>
        </div>
    </section>
    <!-- About us -->
    <section id="about-section">
       <h1 class="hidden">About Us</h1>
       <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus soluta nisi voluptatibus temporibus est corrupti deleniti dolores distinctio molestiae voluptas sit tenetur illo in facere sint, veniam deserunt laudantium iure!
       </p>
    </section>
    <!-- Promo Video -->
    <section id="promo-video">
        <img src="images/fake_video.jpg" alt="Promo Video">
    </section>
    <!-- Call To Action -->
    <section id="cta">
        <h3>So, where do you want to travel to?</h3>
    </section>
    <!-- Map -->
    <section id="map-banner">
        <h2 class="hidden">Ontario Regions Map</h2>
        <div id="map-mobile">
        </div>
        <div id="regions">
            <h1 id="southern_ON">SOUTHERN ONTARIO</h1>
            <h1 id="southwestern_ON">SOUTHWESTERN ONTARIO</h1>
            <h1 id="northern_ON">NORTHERN ONTARIO</h1>
            <h1 id="central_ON">CENTRAL ONTARIO</h1>
            <h1 id="southern_ON">EASTERN ONTARIO</h1>
        </div>
        <div id="map-desktop">
        </div>
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