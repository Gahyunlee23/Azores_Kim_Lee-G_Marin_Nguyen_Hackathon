export default {
    template: `<h1>{{ message }}</h1>`,

    created: function() {
        console.log('our component1 redered');
    },

    data: function() {
        return {
            message: "Welcome to my Super Awesome App!"
        }
    }
}