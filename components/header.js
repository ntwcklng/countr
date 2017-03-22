import Head from 'next/head'
export default () => (
  <header>
    <Head>
      <title>countr</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <style jsx global>{`
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
      .app {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 35px;
        padding-bottom: 100px;
      }
      h1 {
        color: #067df7;
      }
      h2 {
        color: rgba(0,0,0,.2);
        margin: 60px auto;
        padding: 13px;
        font-size: 14px;
        text-align: center;
      }
      h6 {
        font-size: 16px;
        font-weight: normal;
        color: #067df7;
      }
      `}
      </style>
  </header>
)
