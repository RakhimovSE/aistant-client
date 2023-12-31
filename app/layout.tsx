import { ReactNode } from "react"
import { Metadata } from "next"
import Script from "next/script"
import Providers from "./providers"

export const metadata: Metadata = {
  title: process.env.title,
}

const YANDEX_METRIKA_SCRIPT_HTML = `
(function(m, e, t, r, i, k, a) {
  m[i] = m[i] || function() {
      (m[i].a = m[i].a || []).push(arguments)
  };
  m[i].l = 1 * new Date();
  for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
          return;
      }
  }
  k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(95036405, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
});
`

const YANDEX_METRIKA_NOSCRIPT_HTML = `
<div>
  <img src="https://mc.yandex.ru/watch/95036405" style="position:absolute; left:-9999px;" alt="" />
</div>
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: YANDEX_METRIKA_SCRIPT_HTML }}
        />
        <noscript
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: YANDEX_METRIKA_NOSCRIPT_HTML }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
