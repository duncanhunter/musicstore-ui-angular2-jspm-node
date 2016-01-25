module.exports = function (config) {
    "use strict";

    config.set({

        basePath: "./",

        proxies: {
            "/node_modules": "/base/node_modules",
            "/jspm_packages": "/base/jspm_packages",
            "/app": "/base/app/"
        },

        jspm: {
            serveFiles: [
                "app/**/*.ts",
                'app/**/!(*.spec).ts'
            ],
            loadFiles: [
                "app/**/*.spec.ts"
            ]
        },

        files: [],

        autoWatch: true,

        frameworks: ["jspm", "jasmine"],

        browsers: ['Chrome'],

        plugins: [
            "karma-jspm",
            "karma-chrome-launcher",
            "karma-jasmine",
        ],

    });
};
