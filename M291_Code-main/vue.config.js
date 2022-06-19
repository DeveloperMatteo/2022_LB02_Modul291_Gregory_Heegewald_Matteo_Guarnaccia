const path = require('path')
module.exports = {
    pages: {
        'index': {

            //entry: './01a_Basics/02_Exercises/src/main.js',
            //entry: './01c_Basics/02_Exercises/src/main.js',
            //entry: './02b_Watchers/02_Exercises/src/main.js',
            //entry: './04a_Routing-Advanced/02_Exercises/src/main.js',
            //entry: './06a_StateMgmt/02_Exercises/src/main.js',
            entry: './09a_Client+Server/02_Exercises/client/src/main.js',

            template: 'public/index.html',
            title: 'State in vue'
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set(
            'vue$',
            // If using the runtime only build
            path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
            // Or if using full build of Vue (runtime + compiler)
            // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
        )
    }
}
