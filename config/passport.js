/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  bearer: {
    strategy: require('passport-http-bearer').Strategy
  },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: 'your-consumer-key',
      consumerSecret: 'your-consumer-secret'
    }
  },


  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '150659795651418',
      clientSecret: '52dd598f899759877206c93712258051',
      scope: ['hugo29ks@hotmail.com'] /* email is necessary for login behavior */
    }
  },

  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: '21209962370-4807s3a4vcpt5j3f8hotkva2nh4pod3m.apps.googleusercontent.com',
      clientSecret: 'JrUC3bCveFX_QMw86dCDuEwd',
      scope: ['hugo29ks@hotmail.com']
    }
  }
};
