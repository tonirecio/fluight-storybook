import { DefaultTheme } from 'styled-components'

export const appTheme: DefaultTheme = {

  dimensions: {
    headerHeight: '60px',
    resultsHeaderHeight: '45px',
    footerHeight: '50px',
    filtersWidth: '310px',
    resultsWidth: '100%',
  },

   colors: {
    primary: {
      normal : '#969332',
      light: '#E3DD40',   
      tint: {
        tint80: 'rgba(150 147 50 / 0.8)',
        tint60: 'rgba(150 147 50 / 0.6)',
        tint40: 'rgba(150 147 50 / 0.4)',
        tint20: 'rgba(150 147 50 / 0.2)',
        tint10: 'rgba(150 147 50 / 0.1)',
      },

      softBlackTint: {
        tint80: 'rgba(136 136 136 / 0.8)',
        tint60: 'rgba(136 136 136 / 0.6)',
        tint40: 'rgba(136 136 136 / 0.4)',
        tint20: 'rgba(136 136 136 / 0.2)',
        tint10: 'rgba(136 136 136 / 0.1)',
      }   
    },

    secondary: {
      normal: '#56B4E3',
      light: '#87D4FA',
      tint: {
        tint80: 'rgba(86 180 227 / 0.8)',
        tint60: 'rgba(86 180 227 / 0.6)',
        tint40: 'rgba(86 180 227 / 0.4)',
        tint20: 'rgba(86 180 227 / 0.2)',
        tint10: 'rgba(86 180 227 / 0.1)',
      },
    },

    accent: {
      normal: '#FF5E6F',
      light: '#FF9AA5',
      tint: {
        tint80: 'rgba(255 94 111 / 0.8)',
        tint60: 'rgba(255 94 111 / 0.6)',
        tint40: 'rgba(255 94 111 / 0.4)',
        tint20: 'rgba(255 94 111 / 0.2)',
        tint10: 'rgba(255 94 111 / 0.1)',
      },
    },

    controlsBorder: '#CBCBCB',
    defaultContentBackground: '#FEFEFE',

  },

  fonts: {
    headlines: 'Impact, system-ui, sans-serif',
    bodyText: 'Arial, Helvetica, system-ui, sans-serif',

    sizes: {
      largeHeadings: {
        size: '16px'
      },

      smallHeadings: {
        size: '14px'
      },

      bodyText: {
        size: '12px'
      },

      smallText: {
        size: '10px'
      }
    }
  },

  imageSizes: {
    logoMinWidth: '200px',
    symbolMinWidth: '32px'
  },

  borders: {
    width: '0.3pt'
  },

  spacing: {
    small: '10px',
    medium: '15px',
    large: '20px',
    none: '0px',
  },

  paddings: {
    none: '0px',
    small: '2px',
    regular: '5px',
    medium: '10px',
    large: '15px',
    xlarge: '20px',
    xxlarge: '25px',
  },

  margins: {
    small: '2px',
    regular: '5px',
    medium: '10px',
    large: '15px',
    xlarge: '20px',
    xxlarge: '25px',
    none: '0px',
  },
  
}

