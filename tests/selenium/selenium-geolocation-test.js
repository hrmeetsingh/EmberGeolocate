/* jshint ignore:start */
var {Builder, By, until} = require('selenium-webdriver');
 var test = require('selenium-webdriver/testing');
 var firefox = require('selenium-webdriver/firefox');
 var assert = require('assert');

 test.describe('Geolocation Search', function() {
  var driver;
  var profile = new firefox.Profile();
  profile.setPreference("geo.prompt.testing", true);
  profile.setPreference('geo.prompt.testing.allow', true);
  profile.setPreference('geo.enabled', true);
  profile.setPreference('geo.wifi.uri', 'data:application/json,{"location": {"lat": 31.63661, "lng": 74.87476}, "accuracy": 100.0}');
  var options = new firefox.Options().setProfile(profile);


   test.before(function() {
    this.timeout(4000);
    driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
   });

   test.after(function() {
     driver.quit();
   });

   test.it('should get the mocked geolocation coordinates of Amritsar(India)', function() {
    this.timeout(15000);
     driver.get('http://localhost:4200/');
     driver.wait(until.titleIs('EmberGeolocate'), 3000);
     driver.findElement(By.id('locateBtn')).click();
     
      driver.wait(until.elementLocated(By.xpath(".//label[@id='lat' and contains(text(),'.')]")),8000).then(function(){
        driver.findElement(By.id('lat')).getText().then(function(lat){
          assert.equal(lat,'31.63661');
        });
      });

       driver.wait(until.elementLocated(By.xpath(".//label[@id='long' and contains(text(),'.')]")),8000).then(function(){
        driver.findElement(By.id('long')).getText().then(function(lng){
          assert.equal(lng,'74.87476');
        });
      });
   });
 });

/* jshint ignore:end */