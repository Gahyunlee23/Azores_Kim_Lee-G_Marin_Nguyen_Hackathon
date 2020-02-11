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
    <section id="hero-image-south">
        <div>
            <h2 id="hero-text-south">SOUTH ONTARIO</h2>
        </div>
        <div id="hero-p">
            <p>Southern Ontario is a primary region of the province of Ontario.</p>
        </div>
    </section>
    <!-- Activity Section 1 -->
    <section id="act-1">
        <img src="../images/SouthOn_2.jpg" alt="Bruce Peninsula National Park">
        <h1 id="act-title">Bruce Peninsula National Park</h1>
        <p id="act-p">Dramatic cliffs rise from the turquoise
            waters of Georgian Bay. In large tracts of
            forest, black bears roam and rare reptiles
            find refuge in rocky areas and diverse
            wetlands. Ancient cedar trees spiral from
            the cliff edge; a multitude of orchids and
            ferns take root in a mosaic of habitats. And
            the night is brilliant with stars in this Dark
            Sky Preserve.</p>
    </section>

    <!-- Activity Section 2 -->
    <section id="act-1">
        <img src="../images/SouthOn_3.jpg" alt="Blue Mountain">
        <h1 id="act-title">Blue Mountain</h1>
        <p id="act-p">Blue Mountain is an alpine ski resort in
            Ontario, Canada, just northwest of
            Collingwood. It is situated on a section of
            the Niagara Escarpment about 1 km (0.6
            mi.) from Nottawasaga Bay, and is a major
            destination for skiers from southern
            Ontario. The local area forms the newly
            incorporated town of The Blue Mountains,
            Ontario.</p>
    </section>

    <!-- Activity Section 3 -->
    <section id="act-1">
        <img src="../images/SouthOn_4.jpg" alt="Canada’s Wonderland">
        <h1 id="act-title">Canada’s Wonderland</h1>
        <p id="act-p">Dramatic cliffs rise from the turquoise
            Canada's Wonderland is a 134-hectare
            (330-acre) theme park located in Vaughan,
            Ontario, a suburb approximately 25
            kilometres (16 mi) north of Downtown
            Toronto. Opened in 1981 by the Taft
            Broadcasting Company and The Great-West
            Life Assurance Company as the first major
            theme park in Canada, it remains the
            country's largest.</p>
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