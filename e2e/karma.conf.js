const webpack = require('webpack');

module.exports = config => {

    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files:[{ pattern: './karma.shim.js', watched: false }],
        exclude: [],
        preprocessors: {
            'karma.shim.js': ['webpack', 'sourcemap']
        },
        webpack: {
            mode: 'development',
            devtool: 'inline-source-map',
            output: {},
            resolve: {
                extensions: ['.ts', '.js']
            },
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        loaders: ['awesome-typescript-loader?configFileName=./e2e/tsconfig.e2e.json'],
                        exclude: [/node_modules/]
                    }
                ]
            }
        },
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true
    });

};
