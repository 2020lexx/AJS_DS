/*
 * Copyright (c) 2017. @pablo
 *
 * Test Code
 */


function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/common/full_navigation.html",
            data: { pageTitle: 'DS+' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.website_1', {
            url: "/website_1",
            templateUrl: "views/website/website_1.html",
            data: { pageTitle: 'Web Site' },
           
        })
        .state('index.catalog_1', {
            url: "/catalog_1",
            templateUrl: "views/catalog/catalog_1.html",
            data: { pageTitle: 'Catalog' }
        }) 
        .state('index.slides_1', {
            url: "/slides_1",
            templateUrl: "views/slides/slides_1.html",
            data: { pageTitle: 'Slides' }
        }) 
        .state('index.video_gallery_1', {
            url: "/video_gallery_1",
            templateUrl: "views/video_gallery/video_gallery_1.html",
            data: { pageTitle: 'Video' },
        })
        .state('index.menu_1', {
            url: "/menu_1",
            templateUrl: "views/menu/menu_1.html",
            data: { pageTitle: 'Restaurant Menu' },
        /*    resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'vivus',
                            files: ['js/svg/vivus.min.js']
                        }
                    ]);
                }
            }*/
        })  

        

}
angular
    .module('zx_ds')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
