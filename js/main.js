//create a couple of components we can request and render
import Component1 from "./modules/Component1.js";
import Component2 from "./modules/Component2.js";
import ErrorComponent from "./modules/ErrorComponent.js";


//these are the same as Express routes -> router.get('/, ... do something with the request)
const routes = [
    { path: '/', name: 'Component1', component: Component1 },
    { path: '/Component2', name: 'Component2', component: Component2 },
    { path: '*', name: 'error', component: ErrorComponent }
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
}).$mount("#Component1");