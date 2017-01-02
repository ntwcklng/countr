import React from 'react'
import Head from 'next/head'
export default () => (
  <header>
    <Head>
      <title>countr</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0 }
        html {
          background-color: #fff;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
          text-rendering: geometricPrecision;
          color: #424242;
          font-size: 14px;
          line-height: 24px;
          width: 100%;
          height: 100%;
        }
        a {
          color: #067df7;
          border-bottom: none;
          text-decoration: none;
        }
      `}
      </style>
    </Head>
  </header>
)