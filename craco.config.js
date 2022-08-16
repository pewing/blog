const path = require('path');

module.exports = {
    //...
    webpack: {
        configure: (webpackConfig, { env, paths }) => { return webpackConfig; },
        configure: {
            resolve: {
                alias: {
                    Components: path.resolve(__dirname, 'src/components/'),
                    Images: path.resolve(__dirname, 'src/images/')
                }
            }
        }
    }
};