'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

// ember-cli ensures that `broccoli-funnel` is loaded even though we don't list it in our package.json
// so it's safe to ignore this "node/no-extraneous-require" warning.
// If someone knows an easy, clean alternative to ignoring it here, pleast let me (jacobq) know.
// eslint-disable-next-line node/no-extraneous-require
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // See https://github.com/jeffjewiss/ember-cli-postcss#usage
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            // See https://github.com/postcss/postcss-import#options
            options: {
              path: ['node_modules'],
              filter(path) {
                return [
                  // Make PostCSS aware of these files so we can `@import ...` them
                  'inter/inter.css'
                ].every(ignoredPath => !path.includes(ignoredPath));
              }
            },
          },
        ]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Add the [Inter font](https://rsms.me/inter/) to the files that Ember will output for the app
  const funnels = [
    new Funnel('node_modules/typeface-inter/Inter (web)', { destDir: './assets/fonts/inter' }),
  ];

  return app.toTree(funnels)
};
