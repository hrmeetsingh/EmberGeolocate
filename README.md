# EmberGeolocate

This is a sample app in EmberJS to demonstrate the mocking of browser geolocation in Selenium automation tests.

## Why EmberJS

It is quick - That's it!! Intent is to show the selenium automation tests behaviour.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd EmberGeolocate`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

There is a selenium test which sets up the Firefox geckodriver with the suitable values of "geo.wifi.uri" with a mock JSON having Lat-Long values, a response, which otherwise would come from Google or any other geolocating service configured for your browser. You can check the value by typing "about.config" in Firefox address bar and filter "geo.wifi.url" and can manually setup your location if you wish.

For running the selenium test:

* `npm run setup-geckodriver`
* `npm run clean`
* `npm run test`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Note

This is only a demo app to demonstrate the behaviour of browser geolocation and how you can mock this geolocation to make your Selenium tests behave as the location is the one you specified.
