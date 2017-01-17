import React from 'react';

export default () => (
  <section style={{ padding: '8rem 0 7rem' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <h3>Simple, generic, and reusable</h3>
      <p>
        <b>mern-workflow</b> ─ A boilerplate for building isomorphic JavaScript applications
        using the MERN stack (Mongo, Express.js, React.js & Redux.js, and NodeJS).
      </p>
      <p>
        <a className="github-button" href="https://github.com/eddyw/mern-workflow" data-icon="octicon-star" data-style="mega" aria-label="Star eddyw/mern-workflow on GitHub">Star</a>
        {' '}
        <a className="github-button" href="https://github.com/eddyw/mern-workflow/fork" data-icon="octicon-repo-forked" data-style="mega" aria-label="Fork eddyw/mern-workflow on GitHub">Fork</a>
      </p>
    </div>
    <div className="container">
      <pre>
        <code>
          git clone https://github.com/eddyw/mern-workflow.git<br />
          cd mern-workflow/<br />
          npm install<br />
          npm start
        </code>
      </pre>
    </div>
  </section>
);
