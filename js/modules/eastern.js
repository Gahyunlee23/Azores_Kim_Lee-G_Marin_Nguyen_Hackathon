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
    <section id="hero-image-eastern">
        <div>
            <h2 id="hero-text-south">EASTERN ONTARIO</h2>
        </div>
        <div id="hero-p">
            <p>Eastern Ontario encompasses the countryside east of Toronto as far as the Québec border. Within weekending distance of Toronto, Prince Edward County's fertile pastures support a long farming tradition and young wine industry. 
            </p>
        </div>
    </section>
    <!-- Activity Section 1 -->
    <section id="act-1">
        <img src="../images/EastOn_2.jpg" alt="Rideau Canal">
        <h1 id="act-title">Rideau Canal</h1>
        <p id="act-p">The Rideau Canal Skateway is open between Waverley and Bank, including Patterson Creek and between Bronson and Library, including the Dows Lake Loop. Due to last night’s precipitation, the ice surface could not be flooded. Sweeping operations are in progress therefore, please use caution as maintenance equipment will be present on the ice.
        </p>
    </section>

    <!-- Activity Section 2 -->
    <section id="act-1">
        <img src="../images/EastOn_3.jpg" alt="Thousand Islands">
        <h1 id="act-title">Thousand Islands</h1>
        <p id="act-p">The Thousand Islands are a group of more than 1,800 islands in the St. Lawrence River, straddling the border of the U.S. and Canada. A fashionable retreat for the elite in the late 19th century, today the area is a hub for outdoor activities. It’s home to elaborate island mansions such as the German-style Boldt Castle on Heart Island, and Singer Castle on Dark Island, with its Gothic windows and secret passageways.
        </p>
    </section>

    <!-- Activity Section 3 -->
    <section id="act-1">
        <img src="../images/EastOn_4.jpg" alt="Springer Market Square, Kingston">
        <h1 id="act-title">Springer Market Square, Kingston</h1>
        <p id="act-p">Downtown Kingston’s central hub, Springer Market Square has been a place for vendors to sell their wares for more than 200 years. The open space at King Street and Brock Street serves as an outdoor movie theatre on summer evenings and a skating rink in the winter with Kingston City Hall as a backdrop. Brick roads add to the period feel.
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