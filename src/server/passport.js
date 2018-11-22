const session = require('express-session')
const SessionStore = require('session-file-store')(session)
const os = require('os')
const path = require('path')

const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const VkontakteStrategy = require('passport-vkontakte').Strategy
const OdnoklassnikiStrategy = require('passport-odnoklassniki').Strategy
const TwitterStrategy = require('passport-twitter').Strategy

passport.use(new FacebookStrategy({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: `${process.env.SITE_URL}/login/fb`,
    // scope: 'user_link',
    profileFields: ['id', 'displayName', 'profileUrl' ]
  },
  (accessToken, refreshToken, profile, done) => done(null, profile)
))

passport.use(new VkontakteStrategy({
    clientID: process.env.VK_CLIENT_ID,
    clientSecret: process.env.VK_CLIENT_SECRET,
    callbackURL: `${process.env.SITE_URL}/login/vk`,
    profileFields: ['id', 'displayName', 'profileUrl']
  },
  (accessToken, refreshToken, profile, done) => done(null, profile)
))

passport.use(new OdnoklassnikiStrategy({
    clientID: process.env.OK_CLIENT_ID,
    clientPublic: process.env.OK_CLIENT_PUBLIC,
    clientSecret: process.env.OK_CLIENT_SECRET,
    callbackURL: `${process.env.SITE_URL}/login/ok`,
    scope: "VALUABLE_ACCESS",
    profileFields: ['id', 'displayName', 'profileUrl']
  },
  (accessToken, refreshToken, profile, done) => done(null, profile)
))

passport.use(new TwitterStrategy({
    consumerKey: process.env.TW_CONSUMER_KEY,
    consumerSecret: process.env.TW_CONSUMER_SECRET,
    callbackURL: `${process.env.SITE_URL}/login/tw`,
    profileFields: ['id', 'displayName', 'profileUrl', 'username']
  },
  (accessToken, refreshToken, profile, done) =>{
    const profileWithUrl = {...profile, profileUrl: `https://twitter.com/${profile.username}`}
    return done(null, profileWithUrl)
  }
))


const providersNames = {
  fb: {
    name: 'facebook',
  },
  tw: {
    name: 'twitter',
  },
  ok: {
    name: 'odnoklassniki',
  },
  vk: {
    name: 'vkontakte',
  },
}

module.exports = (server) => {
  server.use(session({
    store: new SessionStore({
      path: process.env.EXPRESS_SESSION_STORE || path.join(os.tmpdir(), '/sessionstore'),
      ttl: 24 * 60 * 60,
      secret: process.env.EXPRESS_SESSION_STORE_SECRET,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  }))
  server.use(passport.initialize())
  server.use(passport.session())

  server.get('/login', (req, res, next) => providersNames[req.query.provider]
    ? passport.authenticate(providersNames[req.query.provider].name, { session: false })(req, res, next)
    : next())

  server.get('/login/:provider', (req, res, next) => providersNames[req.params.provider]
    ? passport.authenticate(providersNames[req.params.provider].name, { session: false })(req, res, next)
    : next(), (req, res) => {
    res.send(`
      <html>
        <body>
          <script type="text/javascript">
            var event = new CustomEvent("loginCallback", {'detail': ${JSON.stringify({name: req.user.displayName, link: req.user.profileUrl })}});
            window.opener.document.dispatchEvent(event);
            window.close();
          </script>
        </body>
      </html>
    `)
  })
}
