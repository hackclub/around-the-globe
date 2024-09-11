const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  i18n: {
    locales: [
      'en',
      'es',
      'fa',
      'fr',
      'zh',
      'kr',
      'tr',
      'hin',
      'pl',
      'el',
      'ms',
      'bn',
      'ur',
      'th',
      'de',
      'vi',
      'rw',
      'ja',
      'pa',
      'id',
      'ru',
      'uk',
      'it',
      'nl',
    ],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'pa.hackclub.com',
        defaultLocale: 'pa',
        http: true
      },
      {
        domain: 'hackclub.es',
        defaultLocale: 'es',
        http: true
      },
      {
        domain: 'fa.hackclub.com',
        defaultLocale: 'fa',
        http: true
      },
      {
        domain: 'az.hackclub.com',
        defaultLocale: 'az',
        http: true
      },
      {
        domain: 'zh.hackclub.com',
        defaultLocale: 'zh',
        http: true
      },
      {
        domain: 'fr.hackclub.com',
        defaultLocale: 'fr',
        http: true
      },
      {
        domain: 'kr.hackclub.com',
        defaultLocale: 'kr',
        http: true
      },
      {
        domain: 'tr.hackclub.com',
        defaultLocale: 'tr',
        http: true
      },
      {
        domain: 'hin.hackclub.com',
        defaultLocale: 'hin',
        http: true
      },
      {
        domain: 'pl.hackclub.com',
        defaultLocale: 'pl',
        http: true
      },
      {
        domain: 'ms.hackclub.com',
        defaultLocale: 'ms',
        http: true
      },
      {
        domain: 'gr.hackclub.com',
        defaultLocale: 'el',
        http: true
      },
      {
        domain: 'ur.hackclub.com',
        defaultLocale: 'ur',
        http: true
      },
      {
        domain: 'bn.hackclub.com',
        defaultLocale: 'bn',
        http: true
      },
      {
        domain: 'ja.hackclub.com',
        defaultLocale: 'ja',
        http: true
      },
      {
        domain: 'thai.hackclub.com',
        defaultLocale: 'th',
        http: true
      },
      {
        domain: 'de.hackclub.com',
        defaultLocale: 'de',
        http: true
      },
      {
        domain: 'vi.hackclub.com',
        defaultLocale: 'vi',
        http: true
      },
      {
        domain: 'rw.hackclub.com',
        defaultLocale: 'rw',
        http: true
      },
      {
        domain: 'pa.hackclub.com',
        defaultLocale: 'pa',
        http: true
      },
      {
        domain: 'nl.hackclub.com',
        defaultLocale: 'nl',
        http: true
      },
      {
        domain: 'it.hackclub.com',
        defaultLocale: 'it',
        http: true
      },
      {
        domain: 'ru.hackclub.com',
        defaultLocale: 'ru',
        http: true
      },
      {
        domain: 'uk.hackclub.com',
        defaultLocale: 'uk',
        http: true
      },
      {
        domain: 'id.hackclub.com',
        defaultLocale: 'id',
        http: true
      }
    ]
  }
})
