/* eslint-env node */
/* eslint-disable camelcase */

const browsers = {
  safariMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'High Sierra',
    browserName: 'Safari',
    browser_version: 'latest'
  },
  chromeMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'High Sierra',
    browserName : 'Chrome',
    browser_version : 'latest'
  },
  firefoxMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'High Sierra',
    browserName: 'Firefox',
    browser_version: 'latest'
  },
  edgeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browserName: 'Edge',
    browser_version: 'latest'
  },
  ie11Win10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browserName: 'IE',
    browser_version: '11.0'
  },
  chromeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browserName: 'Chrome',
    browser_version: 'latest'
  },
  firefoxWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browserName: 'Firefox',
    browser_version: 'latest'
  },
  ie10Win8: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '8',
    browserName: 'IE',
    browser_version: '10.0'
  },
  iphoneXIos: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '11.0',
    device: 'iPhone X'
  },
  gs9Android: {
    base: 'BrowserStack',
    os: 'android',
    os_version: '8.0',
    device: 'Galaxy S9 Plus'
  }
}

const browsersKeys = Object.keys(browsers)

module.exports = {
  browsers,
  browsersKeys
}
