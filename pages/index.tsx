import Head from "next/head";

const IndexPage = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>OGPテスト</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="OGPテスト" />
      <meta property="og:description" content="next/ogpテストです。github pagesにて確認" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="github.io/next-test" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="github.com/" />
    </Head>
    <h1>POCKET OGPテスト 4</h1>
    <p>
      <a href="http://getpocket.com/edit?url=https://gcshiro.github.io/next-test&title=OGPテストです。これはタイトルとは違います。" rel="nofollow" target="_blank">
        Pocket
      </a>
    </p>
  </div>
)

export default IndexPage
