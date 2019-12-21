import Prism from "prismjs";

import BlogPage from "core/blog-page";

class CreateAWebsite extends React.Component {
  componentDidMount() {
    // Syntax highlighting needs to be triggered after the page is rendered.
    // - TODO: Do this lesson again:
    //   https://nextjs.org/learn/excel/lazy-loading-components
    Prism.highlightAll();
  }
  render() {
    return (
      <BlogPage
        dateTime="2019-07-22"
        description="A quick guide for setting up a new website with GitHub."
        ogImage="/assets/create-a-website1.jpg"
        title="Create a Simple Website with GitHub Pages"
      >
        <img
          alt="Illustration of a browser window"
          className="blog-image"
          src="/assets/create-a-website1.jpg"
        />

        <header>
          <h1>Create a Simple Website with GitHub Pages</h1>
        </header>

        <p>
          GitHub offers a free way to host websites called{" "}
          <a alt="Illustration of Octocat" href="https://pages.github.com/">
            GitHub Pages
          </a>
          .
        </p>

        <h2>Requirements</h2>
        <ul>
          <li>
            A GitHub account. Sign up here:{" "}
            <a href="https://github.com/join">https://github.com/join</a>
          </li>
          <li>That's it!</li>
        </ul>

        <img
          alt="Octocat's face"
          className="blog-image"
          src="/assets/create-a-website2.jpg"
        />

        <h2>Create a Repository</h2>
        <p>
          A GitHub Repository (repo) is where you store your code for a specific
          project. For instance, the code for my personal website is stored in a
          repo. Feel free to reference the GitHub Help{" "}
          <a href="https://help.github.com/en/articles/create-a-repo">
            Create a repo
          </a>{" "}
          page.
        </p>
        <ol>
          <li>
            Click the "+" icon at the top right and select{" "}
            <strong>New repository</strong>.
          </li>
          <li>
            Type in a <strong>Repository name</strong>.
          </li>
          <li>
            Click <strong>Create repository</strong>.
          </li>
        </ol>

        <h2>Build Your Website</h2>
        <p>
          You are now on the main page of your new repo. For now, you can ignore
          everything on this page except where it says "Get started by creating
          a new file..."
        </p>
        <ol>
          <li>
            Click <strong>creating a new file</strong>.
          </li>
          <li>
            Where it says <strong>Name your file...</strong>, enter{" "}
            <code className="language-text">index.html</code>.
          </li>
          <li>
            Populate the page with some HTML. See{" "}
            <strong>index.html Example</strong> below.
          </li>
          <li>
            Click <strong>Commit new file</strong> at the bottom.
          </li>
        </ol>

        <h2>index.html Example</h2>
        <pre>
          <code className="language-markup">
            {`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>My New Website</title>
    </head>

    <body>
      <h1>Welcome!</h1>
    </body>
  </html>
              `}
          </code>
        </pre>

        <img
          alt="Illustration of rocketship"
          className="blog-image"
          src="/assets/create-a-website3.jpg"
        />

        <h2 id="deploy-your-website">Deploy Your Website</h2>
        <p>
          You should be back on the main page of your repo, and you should see
          the new <code className="language-text">index.html</code> file you
          created.
        </p>
        <ul>
          <li>
            Go to <strong>Settings</strong> at the top right.
          </li>
          <li>
            Scroll all the way down to the <strong>GitHub Pages</strong> section
            - it will now display a URL that looks similar to this:
            https://github.com/username/example-site.
          </li>
          <li>Click on it to see your website.</li>
        </ul>

        <h2>Add a Custom Domain</h2>
        <p>
          Under the <strong>GitHub Pages</strong> section, there is a{" "}
          <strong>Custom domain</strong> section.
        </p>
        <ul>
          <li>Enter the domain you purchased into that field.</li>
          <li>
            On the domain provider side of things, GitHub provides{" "}
            <a href="https://help.github.com/en/articles/setting-up-an-apex-domain">
              some guidance here
            </a>
            . It's different for every provider, but it comes down to setting
            some records.
          </li>
        </ul>
      </BlogPage>
    );
  }
}

export default CreateAWebsite;
