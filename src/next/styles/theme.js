const responsive = (fs, lh) => ({
  fontSize: fs,
  lineHeight: lh/fs,
  vr: (n) => `${lh/fs * n }rem`,
})

const Theme = {
  xs: {
    ...responsive(12, 16),
    borderRadius: {
      default: '3px',
    },
  },

  md: {
    ...responsive(18, 24),
    borderRadius: {
      default: '6px',
      small: '4px',
    },
  },
  colors: {
    accent: '#ec6b58',
    accentSecondary: '#ebe4db',
    accentPoster: '#d8e56f',
    accentLight: '#f9d2cd',
    button: '#f95c3c',
    green: '#00a659',
    gray: '#a0a0a0',
    gray2: '#cdcdcd',
    arrowLightGray: '#b2b2b2',
    arrowGray: '#858585',
    arrowDarkGray: '#0f0f0f',
    backgroundLightGray: '#f5f5f5',
    backgroundGray: '#999999',
    backgroundAlmostWhite: '#f0f0f0',
    backgroundLightGreen: '#d8e56f',
    backgroundOrange: '#fd8b35',
    backgroundRed: '#df4b3f',
    textGray: '#6f6868',
    textDarkGray: '#4a4a4a',
    textDarkGray2: '#3c3c3c',
    textLightGray: '#999999',
    textGalleryGray: '#4b4b4b',
    textWhitePink: '#ffbdb3',
    borderGray: '#7a7a7a',
    sliderDot: '#e8e261',
    sliderDotActive: '#fd9450',
    brandFacebook: '#3b5998',
    brandTwitter: '#1da1f2',
    brandVkontakte: '#45668e',
    brandOdnoklassniki: '#ed812b',
    loader: '#ad4f40',
    backgroundSlidingPanel: '#df4b3f',
  },
}

Theme.sm = {...Theme.xs}
Theme.lg = {...Theme.md}

export default Theme
