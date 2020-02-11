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
    <section id="hero-image-northern">
        <div>
            <h2 id="hero-text-south">NORTHERN ONTARIO</h2>
        </div>
        <div id="hero-p">
            <p>'Big' is a theme in Northern Ontario. The area is so vast that it could fit six Englands and still have room for a Scotland or two. 
            </p>
        </div>
    </section>
    <!-- Activity Section 1 -->
    <section id="act-1">
        <img src="../images/NorthOn_2.jpg" alt="Agawa Canyon Tour Train">
        <h1 id="act-title">Agawa Canyon Tour Train</h1>
        <p id="act-p">Agawa Canyon Tour Train and experience a one day wilderness rail excursions to Agawa Canyon, operates from early June to mid October. Please contact us for information on exact dates. Algoma is ablaze with colour during autumn and for decades the Canyon Tour has been a favourite way for fall ‘leaf peepers’ to experience some of the most spectacular fall colour in North America.  
        </p>
    </section>

    <!-- Activity Section 2 -->
    <section id="act-1">
        <img src="../images/NorthOn_3.jpg" alt="Slate Islands">
        <h1 id="act-title">Slate Islands</h1>
        <p id="act-p">Slate Islands Provincial Park is our brilliant gem on the waters of Lake Superior. Approximately 12 km (7.5 miles) south of Terrace Bay, on the Canadian North Shore of the Lake, Slate Islands Provincial Park is a 7 km-wide (0.6-miles) archipelago touched by a history of logging, mining, early Oneota and Iroquoian campsites, and a resilient herd of woodland caribou that migrated over by ice bridge most recently in 1907. </p>
    </section>

    <!-- Activity Section 3 -->
    <section id="act-1">
        <img src="../images/NorthOn_4.jpg" alt="Old Woman Bay">
        <h1 id="act-title">Old Woman Bay</h1>
        <p id="act-p">A long sandy beach populated with driftwood surrounds you with the true beauty of Algoma at Old Woman Bay. Looking towards the horizon, the face of the Old Woman can be seen within the 200-metre standing cliffs to the left. The bay horseshoes out to the main body of Superior to the north, leading you to Entrance Island.  
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