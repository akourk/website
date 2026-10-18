import { Link } from 'react-router';

import Main from '../layouts/Main';
import assetUrl from '../utils/assetUrl';

const SOURCE = 'https://github.com/akourk/finledger';

const Finledger = () => (
  <Main
    title="finledger case study"
    description="How I built finledger: combining broker exports, checking the calculations, and designing a local dashboard for exploring the results."
  >
    <article className="page case-study">
      <header className="page__header">
        <p className="case-study__eyebrow"><Link to="/projects">Projects</Link> / Case study</p>
        <h1 className="page__title" data-testid="heading">finledger</h1>
        <p className="page__standfirst">
          Combining broker exports into a portfolio you can trace back to the source.
        </p>
        <p className="case-study__scope">
          Personal project · Python, JavaScript, CSS and SVG
        </p>
        <div className="page__actions">
          <a className="button" href="https://akourk.github.io/finledger/">Explore fictional demo</a>
          <a className="button button--quiet" href={SOURCE}>View source</a>
        </div>
      </header>

      <p>
        A portfolio spread across brokers is hard to review as a whole. I built finledger
        to combine their CSV exports and make the resulting figures easier to check.
        I wrote the Python ingestion pipeline, financial calculations, and JavaScript
        interface. It supports nine broker formats and produces one HTML file you can
        open locally.
      </p>

      <figure className="case-study__figure">
        <a href={assetUrl('/images/projects/finledger.png')} aria-label="Open full-size finledger demo screenshot">
          <img
            src={assetUrl('/images/projects/finledger.png')}
            alt="finledger overview with portfolio value, reconciliation status, and portfolio history. A banner identifies the fictional demo."
            width="1440"
            height="1100"
          />
        </a>
        <figcaption>
          The demo uses fictional transactions and illustrative prices, fixed at
          June 30, 2026.
        </figcaption>
      </figure>

      <div className="markdown">
        <h2>One ledger from different formats</h2>
        <p>
          Brokers use different date formats, action names, and sign conventions.
          Their exports can overlap or describe only one side of an account transfer.
          Adding every row together can produce a convincing chart with the wrong holdings.
        </p>
        <p>
          Each parser translates its broker’s vocabulary into the same transaction format.
          I keep the source filename and original action with each row so the result can
          be traced back to the export.
        </p>

        <ol className="case-study__pipeline" aria-label="How broker exports become a dashboard">
          <li><strong>Parse</strong><span>Translate broker formats</span></li>
          <li><strong>Reconstruct</strong><span>Preserve transaction history</span></li>
          <li><strong>Check</strong><span>Compare with supplied figures</span></li>
          <li><strong>Explore</strong><span>Open the local dashboard</span></li>
        </ol>

        <h2>Preserving the transaction history</h2>
        <h3>Overlapping exports</h3>
        <p>
          Two identical trades in one statement may both be real. When merging overlapping
          exports, I keep the largest number of occurrences found in any single file.
          If one export contains two matching trades and another repeats them, the ledger
          keeps two. Without stable transaction IDs, identical transactions split across
          files can still be ambiguous.
        </p>
        <h3>Transfers between accounts</h3>
        <p>
          Moving ten shares from account A to account B should leave ten shares overall,
          with the original purchase date and cost basis. I carry that acquisition history
          through paired transfers so a move between accounts does not become a new
          purchase or realized profit. Any transfer rows reconstructed by the pipeline
          are marked in the ledger.
        </p>

        <h2>Checking the result</h2>
        <p>
          You can supply balances or tax figures from broker statements for finledger to
          compare with its reconstructed ledger. Differences stay visible for review.
          An expected difference can have a recorded explanation; any further drift is
          flagged again.
        </p>

        <h2>Making the figures easier to inspect</h2>
        <p>
          I kept headline balances and charts in the overview, with data checks and detailed
          controls in expandable sections. Someone can start with the overall portfolio,
          then open a statement comparison or the transactions behind an income or realized
          gain figure when it needs attention.
        </p>
        <p>
          Historical views show holdings at an earlier date, and individual holdings expand
          to show their purchase lots. The history chart supports touch and arrow-key
          inspection. Allocation charts have values listed beside them, so color and
          pointer position are not the only ways to read the data.
        </p>

        <figure className="case-study__figure case-study__figure--detail">
          <a href={assetUrl('/images/projects/finledger-reconciliation.jpg')} aria-label="Open full-size fictional reconciliation example">
            <img
              src={assetUrl('/images/projects/finledger-reconciliation.jpg')}
              alt="Six statement comparisons in the fictional demo: five match and the Roth IRA has an explained difference. Reported and calculated balances remain side by side."
              width="628"
              height="258"
              loading="lazy"
            />
          </a>
          <figcaption>
            Statement checks in the fictional demo. The Roth IRA keeps an explained
            $142.60 difference visible; its zero delta is the remaining difference after
            that explanation.
          </figcaption>
        </figure>

        <h2>Portable output and checks that support it</h2>
        <p>
          The dashboard uses plain JavaScript, CSS, and SVG, packaged with the data in one
          HTML file. It opens without a server, account, or live connection. Importing broker
          exports can fetch market prices through yfinance, but the exports and ledger stay
          local. The generated file contains the ledger and needs to stay private too.
        </p>
        <p>
          Some calculations run in both Python and JavaScript, so tests compare their
          results. Other checks cover repeated imports, transferred cost basis, historical
          views, and reconciliation failures. Browser tests exercise keyboard controls and
          phone layouts. The public demo is built from fixed fictional inputs and checked
          before publication.
        </p>
        <p>
          Results still depend on complete exports and correct account types. Missing
          acquisition history, differing tax-lot choices, and wash-sale treatment can cause
          disagreements. Broker statements remain the reference for reviewing them.
        </p>
      </div>

      <aside className="case-study__further" aria-label="Further reading">
        <p>
          More implementation detail: <a href={`${SOURCE}/blob/main/docs/ARCHITECTURE.md`}>architecture</a>,{' '}
          <a href={`${SOURCE}/blob/main/docs/ENGINEERING_CASE_STUDY.md`}>the transfer example</a>, and{' '}
          <a href={`${SOURCE}/blob/main/docs/DEMO.md`}>demo construction and validation</a>.
        </p>
        <Link to="/projects">Back to projects</Link>
      </aside>
    </article>
  </Main>
);

export default Finledger;
