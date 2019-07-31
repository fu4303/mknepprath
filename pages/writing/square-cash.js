import Head from "next/head";

import Page from "core/page";

export default () => (
  <Page className={"container"}>
    <Head>
      <title key="title">Square Cash</title>
    </Head>

    <article>
      <header>
        <h1>Square Cash</h1>
      </header>

      <p>
        <a href="http://allthingsd.com/20131015/the-money-is-in-the-email/">
          Walter S. Mossberg
        </a>
        :
      </p>
      <blockquote>
        <p>
          The people helping me test were generally wowed. One called it
          “slick.” Another replied: “Done. Two secs.” A third, with whom I had
          trouble using PayPal last year, said she’d use it “1,000 percent.”
        </p>
      </blockquote>
      <p>
        <a href="https://squareup.com/">Square</a> now lets you email cash to
        anyone free of charge. Sounds too good to be true, but judging from the
        quotes above, it’s really that magical. Keep an eye on Square – it seems
        that they will be playing a defining role in how we work with our money
        in the future.
      </p>

      <p>
        <time dateTime="2013-10-16">October 16, 2013</time>
      </p>
    </article>
  </Page>
);
