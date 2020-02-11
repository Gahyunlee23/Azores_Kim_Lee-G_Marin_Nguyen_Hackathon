export default {
    template: `
    <body>
    <!-- Header -->
    <header id="hero-section">
        <div id="logo-header">
            <img src="images/logo_clear100.svg" alt="Ontario Summer Logo">
        </div>
        <div id="header-nav">
            <img src="images/twitter.svg" alt="Twitter">
            <img src="images/facebook.svg" alt="Facebook">
            <img src="images/instagram.svg" alt="Instagram">
        </div>
        <div id="sign-in">
            <router-link to="/SignIn">Sign up</router-link>   
        </div>
    </header>
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
        <div id="regions">
            <h1 id="southern_ON">SOUTHERN ONTARIO</h1>
            <h1 id="southwestern_ON">SOUTHWESTERN ONTARIO</h1>
            <h1 id="northern_ON">NORTHERN ONTARIO</h1>
            <h1 id="central_ON">CENTRAL ONTARIO</h1>
            <h1 id="southern_ON">EASTERN ONTARIO</h1>
        </div>
        <div id="map">
            <img src="images/map.svg" alt="Ontario Map">
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
            <h1>Links</h1>
            <h3>Ontariossouthwest.com</h3>
            <h3>Southeasternontario.ca</h3>
            <h3>Visitnorthwestontario.com</h3>
        </div>
        <!-- social media -->
        <div>
            <h1>FOLLOW US</h1>
            <ul>
                <li><a href="facebook.com" target="_blank">FACEBOOK</a></li>
                <li><a href="instagram.com" target="_blank">INSTAGRAM</a></li>
                <li><a href="twitter.com" target="_blank">TWITTER</a></li>
            </ul>
        </div>
        <div>
            <h5>Copyrights &copy; Awesome Team</h5>
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