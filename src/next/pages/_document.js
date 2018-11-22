import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class SiteDocument extends Document {
  render() {
    return (<html>
      <Head>
        <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width, height=device-height"/>

        <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/static/favicon.ico" />

        <link rel='stylesheet' href={`/_next/static/style.css?${BUILD_TS}`} />

        <script language="JavaScript" type="text/javascript" src="//family3.justclick.ru/jsapi/click.js"></script>
      </Head>
      <body>
        <Main/>
        <NextScript/>

        {/* Yandex.Metrika counter */}
        {/* <script src={`/static/yandex-metrika.js?${BUILD_TS}`} type="text/javascript"></script> */}
        <script dangerouslySetInnerHTML={{__html: `
          (function (d, w, c) {
              (w[c] = w[c] || []).push(function() {
                  try {
                      w.yaCounter50284909 = new Ya.Metrika2({
                          id:50284909,
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true,
                          webvisor:true,
                          trackHash:true
                      });
                  } catch(e) { }
              });

              var n = d.getElementsByTagName("script")[0],
                  s = d.createElement("script"),
                  f = function () { n.parentNode.insertBefore(s, n); };
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://mc.yandex.ru/metrika/tag.js";

              if (w.opera == "[object Opera]") {
                  d.addEventListener("DOMContentLoaded", f, false);
              } else { f(); }
          })(document, window, "yandex_metrika_callbacks2");
        `}}></script>
        <noscript><div><img src="https://mc.yandex.ru/watch/50284909" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
        {/* End Yandex.Metrika counter */}

        {/* Facebook Pixel Code */}
        <script dangerouslySetInnerHTML={{__html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '100641093899121');
          fbq('track', 'PageView');
        `}}>
        </script>
        <noscript>
        <img height="1" width="1" alt="" src="https://www.facebook.com/tr?id=100641093899121&ev=PageView&noscript=1"/>
        </noscript>
        {/* End Facebook Pixel Code */}

        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
          !function() {
            var t = document.createElement("script");
            t.type = "text/javascript",
            t.async = !0,
            t.src = "https://vk.com/js/api/openapi.js?159",
            t.onload = function() {
              VK.Retargeting.Init("VK-RTRG-289575-48n40"),
              VK.Retargeting.Hit()
            },
            document.head.appendChild(t)
          }();
        `}}></script>
        <noscript><img src="https://vk.com/rtrg?p=VK-RTRG-289575-48n40" style={{position: 'fixed', left: '-999px'}} alt=""/></noscript>
      </body>
    </html>)
  }
}
