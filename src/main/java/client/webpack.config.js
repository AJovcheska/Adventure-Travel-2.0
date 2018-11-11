var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      // components
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      HomePage: 'app/components/HomePage.jsx',
      Destinations: 'app/components/Destinations.jsx',
      backendApi: 'app/api/backendApi.jsx',
      Questions: 'app/components/Questions.jsx',
      Article: 'app/components/Article.jsx',
      RegistrationForm: 'app/components/RegistrationForm.jsx',
      Trip: 'app/components/Trip.jsx',
      TripList: 'app/components/TripList.jsx',
      TripDescription: 'app/components/TripDescription.jsx',
      Profile: 'app/components/Profile.jsx',
      SuccessRegistration: 'app/components/SuccessRegistration.jsx',
      TripByTag: 'app/components/TripByTag.jsx',
      Dropdown: 'app/components/Dropdown.jsx',
      LoginForm: 'app/components/LoginForm.jsx',
      ErrorPage: 'app/components/ErrorPage.jsx',
      ProfileTrip: 'app/components/ProfileTrip.jsx',
      TripListProfile: 'app/components/TripListProfile.jsx',

      // tags
      MotherNatureTag: 'app/components/tags/MotherNatureTag.jsx',
      InTheMountainTag: 'app/components/tags/InTheMountainTag.jsx',
      PhotographyBombTag: 'app/components/tags/PhotographyBombTag.jsx',
      ArchitecturalWondersTag: 'app/components/tags/ArchitecturalWondersTag.jsx',
      InspiringArtTag: 'app/components/tags/InspiringArtTag.jsx',
      IcecoldTag: 'app/components/tags/IcecoldTag.jsx',
      FascinatingFaunaTag: 'app/components/tags/FascinatingFaunaTag.jsx',
      FarFarEastTag: 'app/components/tags/FarFarEastTag.jsx',
      HistoryAndMisteryTag: 'app/components/tags/HistoryAndMisteryTag.jsx',
      BikingAndHikingTag: 'app/components/tags/BikingAndHikingTag.jsx',

      // trips
      Barcelona: 'app/components/trip/Barcelona.jsx',
      Rome: 'app/components/trip/Rome.jsx',
      Morocco: 'app/components/trip/Morocco.jsx',
      Persia: 'app/components/trip/Persia.jsx',
      Mongolia: 'app/components/trip/Mongolia.jsx',
      Everest: 'app/components/trip/Everest.jsx',
      Antarctica: 'app/components/trip/Antarctica.jsx',
      Brazil: 'app/components/trip/Brazil.jsx',
      Petra: 'app/components/trip/Petra.jsx',
      Zambia: 'app/components/trip/Zambia.jsx',
      Rwanda: 'app/components/trip/Rwanda.jsx',

      // styles
      applicationStyles: 'app/styles/app.css',
      tripStyle: 'app/styles/trip.css',
      navigationStyle: 'app/styles/navigation.css',
      footerStyle: 'app/styles/footer.css',
      aboutStyle: 'app/styles/about.css',
      registrationStyle: 'app/styles/registration.css',
      questionsStyle: 'app/styles/questions.css',
      destinationStyle: 'app/styles/destinations.css',
      tripDescriptionStyle: 'app/styles/tripDescription.css',
      homePageStyle: 'app/styles/homePage.css',
      tripsByTagsStyle: 'app/styles/tripsByTag.css',
      profileStyle: 'app/styles/profile.css',

      // trips css
      barcelonaStyle: 'app/styles/barcelona.css'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
            {
                loader: 'url-loader'
            }
        ]
      }
    ]
  }
};
