import Head from "next/head";

import Page from "core/page";

export default () => (
  <Page className={"container"}>
    <Head>
      <title key="title">Instagram Direct</title>
    </Head>

    <article>
      <header>
        <h1>Instagram Direct</h1>
      </header>

      <p>
        Instagram’s introduced it’s new direct messaging feature, along with
        some other iOS 7-y UI changes. It’s similar to Facebook Messenger in
        that it tells you when others have seen the photo you shared with them.
        Does anyone actually like read receipts?
      </p>

      <p className={"blog-time"}>
        <time dateTime="2013-12-12">December 12, 2013</time>
      </p>
    </article>
  </Page>
);
