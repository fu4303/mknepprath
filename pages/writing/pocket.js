import Page from "core/page";

export default () => (
  <Page className={"container"} title={"Stay On Task with Pocket"}>
    <article>
      <header>
        <h1>Stay On task with Pocket</h1>
      </header>

      <p>
        I am constantly reading new articles about design, technology, social
        media, music, news, etc. It’s great and I enjoy it, but the sheer amount
        of content posted online can become overwhelming, and can even distract
        from the work I should be getting done.
      </p>
      <p>
        Enter stage left: <a href="http://getpocket.com/">Pocket</a>.
      </p>
      <p>
        Pocket (formerly Read It Later) was not on my grid until the name change
        and a recommendation by{" "}
        <a href="https://twitter.com/LeoWid/">Leo Widrich</a>, co-founder of{" "}
        <a
          title="I'll cover this in a future post."
          href="http://bufferapp.com/"
        >
          Buffer
        </a>
        . Here’s how it works:
      </p>
      <ol>
        <li>
          <strong>Install the Pocket extension or bookmarklet.</strong> To get
          the most out of this service, you’ll want to{" "}
          <a href="http://getpocket.com/add/">
            install the Chrome extension or bookmarklet
          </a>
          . This puts it at the top of your browser at all times. If you have
          Chrome, the extension is recommended over the bookmarklet, as the
          extension also integrates Pocket into many commonly viewed websites,
          such as Twitter.
        </li>
        <li>
          <strong>Send all articles to the Pocket queue.</strong> The goal of
          Pocket is to save all the articles you want to read for later, when
          you have time set aside to read them. This would ideally be a time
          when you have nothing else you are capable of accomplishing, like on a
          bus ride or on a plane. When you come across an article you want to
          read, click the extension or bookmarklet, and the article will be sent
          to your queue. That’s it. If you see a tweet that links to an article
          you want to read, click on the tweet, and then click Pocket. Pocket
          even claims to be integrated into 300+ different apps, including
          Flipboard. It’s extremely easy to collect articles from every source
          you might be browsing on a regular basis.
        </li>
        <li>
          <strong>Read the articles.</strong> When you want to read these saved
          articles later, Pocket allows you to view your queue on{" "}
          <a href="http://getpocket.com/">their website</a> or through their app
          for iPhone, iPad, and Android.
        </li>
      </ol>
      <p>
        That’s it! Pocket’s versatility is it’s main strength, as you’re able to
        pull articles through almost any venue, and read them later on the
        device of your choosing. Try it out and share what works best for you!
      </p>
      <p>
        Are you in need of a Pocket-like service? Have you found any
        alternatives that you like better? Let me know!
      </p>

      <p>
        <time dateTime="2012-07-10">July 10, 2012</time>
      </p>
    </article>
  </Page>
);