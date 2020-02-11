  
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

    <!-- 404 body -->
    <section id="404page">
        <h1 class="hidden"> 404 page</h1>
        <div id="404img">
            <img src="images/404100.svg" alt="404 Image">
        </div>
        <div id="404text">
            <h2>Oops <br> Sorryyy</h2>
            <h4>The page you're looking for doesn't exist or some errors occurred.</h4>
        </div>
    </section>
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