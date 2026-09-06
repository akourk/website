import { Link } from 'react-router';

import Main from '../layouts/Main';
import assetUrl from '../utils/assetUrl';

const SOURCE = 'https://github.com/akourk/finledger';

const Finledger = () => (
  <Main
    title="finledger case study"
    description="How I built finledger: a local portfolio tracker that reconciles overlapping broker exports, preserves acquisition history, and produces a portable dashboard."
  >
    <article className="page case-study">
      <header className="page__header">
        <p className="case-study__eyebrow"><Link to="/projects">Projects</Link> / Case study</p>
        <h1 className="page__title" data-testid="heading">finledger</h1>
        <p className="page__standfirst">
          Making a portfolio easier to check, one transaction at a time.
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
        I built finledger to turn broker CSV exports into one ledger and a dashboard
        that can be checked against source documents. I wrote the ingestion pipeline,
        financial calculations, and browser interface. It supports nine broker formats
        and produces a single HTML file that opens locally, without a server or account.
      </p>

      <figure className="case-study__figure">
        <a href={assetUrl('/images/projects/finledger.png')} aria-label="Open full-size finledger demo screenshot">
          <img
            src={assetUrl('/images/projects/finledger.png')}
            alt="finledger overview with holdings, portfolio history, and reconciliation checks. A banner identifies the fictional demo."
            width="1440"
            height="1100"
          />
        </a>
        <figcaption>
          The public demo uses invented transactions and illustrative prices, fixed at
          June 30, 2026. These are not investment results.
        </figcaption>
      </figure>

      <div className="markdown">
        <h2>The hard part is understanding the inputs</h2>
        <p>
          Brokers use different date formats, action names, and sign conventions.
          Their exports can overlap or describe only one side of an account transfer.
          Adding every row together can produce a convincing chart with the wrong holdings.
        </p>
        <p>
          Each parser translates its broker’s vocabulary into a common transaction schema.
          I preserve the source filename and original action so a calculation can be traced
          back to the export. A shared action catalog defines how each event affects
          balances, lots, and cash flow; the dashboard receives that catalog too.
        </p>

        <ol className="case-study__pipeline" aria-label="How broker exports become a dashboard">
          <li><strong>Parse</strong><span>Translate broker formats</span></li>
          <li><strong>Reconstruct</strong><span>Deduplicate and carry lots</span></li>
          <li><strong>Check</strong><span>Compare with statements</span></li>
          <li><strong>Explore</strong><span>Open the local dashboard</span></li>
        </ol>

        <h2>Two details that change the answer</h2>
        <p>
          Deduplication needs more care than removing identical rows. Two identical trades
          in one statement may both be real. My rule keeps the largest number of occurrences
          found in any single source file. If one export contains two matching trades and
          another repeats them, the ledger keeps two. Without stable transaction IDs this
          remains an inference: splitting genuine repeats across separate files can lose one.
        </p>
        <p>
          Transfers need to preserve acquisition history. In a fictional example, moving
          ten shares from account A to account B should leave ten shares overall, with the
          original acquisition date and cost basis. It should not create a purchase or
          realized profit. The lot walker carries that history through paired transfers;
          reconstructed transfer rows identify themselves in the ledger.
        </p>
        <p>
          Reconciliation compares the reconstruction with broker figures supplied separately
          as metadata. Differences remain visible. An explained difference can be recorded,
          and a later result outside that explanation is flagged again.
        </p>

        <h2>A portable output, with a maintenance cost</h2>
        <p>
          I package the data, styles, and JavaScript into one HTML file. It needs no database,
          CDN, or live connection to view. Normal ingestion can request symbol prices and
          sectors through yfinance; broker files and the complete ledger stay local.
        </p>
        <p>
          That portability means the file contains the full ledger and should be treated as
          private. It also means maintaining some calculations in both Python and JavaScript.
          Parity tests check their agreement, alongside tests for accounting rules,
          historical cutoffs, and reconciliation failures. Browser tests exercise keyboard
          controls and the dashboard at phone sizes.
        </p>

        <h2>What the demo establishes, and what it cannot</h2>
        <p>
          The public build starts from independently constructed fictional inputs, isolated
          directories, and a fixed date, with network access disabled. CI checks the finished
          artifact before publishing that same file. This makes the demonstration reproducible
          without sharing a personal dashboard.
        </p>
        <p>
          Results still depend on complete exports and correct account classifications.
          Missing acquisition history cannot be recovered from nothing; estimated basis,
          broker lot-selection differences, and wash-sale treatment need review against
          statements. The project is a tool for inspecting a reconstructed ledger, and
          broker records remain authoritative.
        </p>
        <p>
          The most useful engineering work here is making those boundaries visible:
          where a row came from, which rule changed it, and where the result disagrees
          with an independent source.
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
