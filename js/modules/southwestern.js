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
    <section id="hero-image-southwestern">
        <div>
            <h2 id="hero-text-south">SOUTHWESTERN ONTARIO</h2>
        </div>
        <div id="hero-p">
            <p>Arcing around Lake Ontario are a number of the Greater Toronto Area’s 'satellite' cities.</p>
        </div>
    </section>
    <!-- Activity Section 1 -->
    <section id="act-1">
        <img src="../images/SouthWestOn_2.jpg" alt="Elora Skyrider Zipline ">
        <h1 id="act-title">Elora Skyrider Zipline</h1>
        <p id="act-p">The Elora Skyrider Zip Line lets explorers soar over the massive Elora Gorge from over 100ft above! The Elora Skyrider Zip Line is run by ONE AXE Pursuits which is about a 2 hour drive from Toronto, a 6 hour drive from Ottawa, a 4 hour drive from Kingston and less than 2 hours from London. They're open only on the weekends in June and September but for July and August they'll be open daily! 
        </p>
    </section>

    <!-- Activity Section 2 -->
    <section id="act-1">
        <img src="../images/SouthWestOn_3.jpg" alt="Ancient Coral Reef">
        <h1 id="act-title">Ancient Coral Reef</h1>
        <p id="act-p">Corals are carnivorous marine organisms with stinging cells and tentacles. They are related to jellyfish and sea anemones. The term coral is also applied to their skeletons, which can be organic (soft) or composed of minerals (hard). In species with a stony exterior, the outer body wall secretes calcium carbonate (lime). </p>
    </section>

    <!-- Activity Section 3 -->
    <section id="act-1">
        <img src="../images/SouthWestOn_4.jpg" alt="Inglis Falls">
        <h1 id="act-title">Inglis Falls</h1>
        <p id="act-p">One of three waterfalls that surround the city of Owen Sound, Ontario, Canada, Inglis Falls is the largest and most impressive. It is also the most visited. Situated in the heart of the 200-hectare Inglis Falls Conservation Area, Inglis Falls is an 18-metre-high (59 ft) cascade, created by the Sydenham River meeting the edge of the Niagara Escarpment. 

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