//create a couple of components we can request and render
import LandingPage from "./modules/LandingPage.js";
import SignIn from "./modules/SignIn.js";
import ErrorComponent from "./modules/ErrorComponent.js";
import southern from "./modules/southern.js";
import southwestern from "./modules/southwestern.js";
import northern from "./modules/northern.js";
import central from "./modules/central.js";
import eastern from "./modules/eastern.js";




//these are the same as Express routes -> router.get('/, ... do something with the request)
const routes = [
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/SignIn', name: 'SignIn', component: SignIn },
    { path: '*', name: 'error', component: ErrorComponent },
    { path: '/southern', name: 'southern', component: southern },
    { path: '/southwestern', name: 'southwestern', component: southwestern },
    { path: '/northern', name: 'northern', component: northern },
    { path: '/central', name: 'central', component: central },
    { path: '/eastern', name: 'eastern', component: eastern }

]

const router = new VueRouter({
    routes //short for routes: routes
})


const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");