export default function HowToPlay() {
  return (
    <div className="page">
      <h1 className="condensed" style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '1.5rem' }}>
        ℹ️ How to Play
      </h1>

      <section style={sectionStyle}>
        <h2 className="condensed" style={headingStyle}>Getting Started</h2>
        <p style={textStyle}>
          You received a personal access code from the pool organizer. Enter it on the home screen to log in — no email or password needed. Your name and picks are tied to that code, so keep it to yourself.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 className="condensed" style={headingStyle}>Making Your Picks</h2>
        <p style={textStyle}>
          Go to <strong style={{ color: 'var(--text)' }}>My Picks</strong> and select any group or round from the tab bar at the top. For each match, enter your predicted score — home goals on the left, away goals on the right.
        </p>
        <p style={{ ...textStyle, marginTop: '0.5rem' }}>
          You can change your picks at any time <strong style={{ color: 'var(--text)' }}>up until 1 hour before kickoff</strong>, when picks lock automatically. Once a pick is locked you cannot edit it.
        </p>
        <div style={noteStyle}>
          🔒 Picks lock <strong>1 hour before each match's kickoff</strong>. Plan ahead — especially for early kick-offs.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 className="condensed" style={headingStyle}>Match Scoring</h2>
        <p style={textStyle}>All match predictions are scored on the <strong style={{ color: 'var(--text)' }}>90-minute result only</strong>. Extra time and penalty shootouts do not affect individual match scores.</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.4rem', marginTop: '0.75rem' }}>
          <ScoreRow pts={2} label="Correct result" desc="You got the right winner, or correctly called a draw" />
          <ScoreRow pts={5} label="Exact score" desc="Both teams' goals match exactly — includes the correct result" />
        </div>
        <div style={noteStyle}>
          💡 Exact score (5 pts) already includes the result points — you don't double-dip.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 className="condensed" style={headingStyle}>Bonus Picks</h2>
        <p style={textStyle}>
          Under the <strong style={{ color: 'var(--text)' }}>★ Bonus</strong> tab you'll find tournament-wide picks worth extra points. These are about <strong style={{ color: 'var(--text)' }}>who advances</strong>, not individual match scores — so the 90-minute rule does not apply here.
        </p>
        <p style={{ ...textStyle, marginTop: '0.5rem' }}>
          If you picked Brazil as a Semifinalist and they squeeze through on a penalty shootout, that bonus pick is still credited. It doesn't matter how they got there — only that they did.
        </p>
        <p style={{ ...textStyle, marginTop: '0.5rem' }}>
          Bonus picks lock before the first match of each relevant round — group picks lock when the group stage begins, knockout picks lock before the Round of 16 starts, etc.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.4rem', marginTop: '0.75rem' }}>
          <ScoreRow pts={25} label="Champion" desc="1 pick — the team that wins the tournament" />
          <ScoreRow pts={15} label="Finalist" desc="2 picks — teams you think reach the Final (either order)" />
          <ScoreRow pts={12} label="3rd place" desc="1 pick — winner of the 3rd place match" />
          <ScoreRow pts={10} label="Semifinalist" desc="4 picks — teams you think reach the semis" />
          <ScoreRow pts={6}  label="Quarterfinalist" desc="8 picks — teams you think reach the quarters" />
          <ScoreRow pts={4}  label="Group winner" desc="12 picks — who finishes 1st in each group (Groups A–L)" />
          <ScoreRow pts={2}  label="Group runner-up" desc="12 picks — who finishes 2nd in each group" />
        </div>
        <div style={noteStyle}>
          💡 Each correct bonus pick scores independently of any other pick.
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 className="condensed" style={headingStyle}>Standings</h2>
        <p style={textStyle}>
          The <strong style={{ color: 'var(--text)' }}>Standings</strong> tab shows the live leaderboard, updated automatically as match results come in. Points from match predictions and bonus picks are combined into a single total. In case of a tie, the player who scored more bonus points ranks higher.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 className="condensed" style={headingStyle}>Schedule</h2>
        <p style={textStyle}>
          The <strong style={{ color: 'var(--text)' }}>Schedule</strong> tab shows all matches in chronological order with their current status, scores (once played), and kickoff times in Mountain Time.
        </p>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 0 }}>
        <h2 className="condensed" style={headingStyle}>Quick Tips</h2>
        <ul style={{ ...textStyle, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column' as const, gap: '0.35rem' }}>
          <li>Fill in bonus picks early — they lock before you expect.</li>
          <li>Don't forget the 3rd Place match tab for that extra prediction.</li>
          <li>Exact score picks are high-risk, high-reward — worth targeting in low-scoring knockout games.</li>
          <li>Group stage picks are the bulk of the points: 72 matches × up to 5 pts each.</li>
        </ul>
      </section>
    </div>
  );
}

function ScoreRow({ pts, label, desc }: { pts: number; label: string; desc: string }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--surface2)',
      borderRadius: 'var(--radius)', padding: '0.5rem 0.75rem',
      display: 'flex', alignItems: 'center', gap: '0.75rem',
    }}>
      <span style={{
        fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
        fontSize: '1.1rem', color: 'var(--gold)', minWidth: '36px', textAlign: 'center' as const,
      }}>
        {pts}
      </span>
      <div>
        <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{desc}</div>
      </div>
    </div>
  );
}

const sectionStyle: React.CSSProperties = {
  marginBottom: '1.75rem',
};

const headingStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  color: 'var(--gold)',
  marginBottom: '0.5rem',
  borderBottom: '1px solid var(--surface2)',
  paddingBottom: '0.25rem',
};

const textStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--text-dim)',
  lineHeight: 1.6,
};

const noteStyle: React.CSSProperties = {
  marginTop: '0.5rem',
  background: 'rgba(240,165,0,0.07)',
  border: '1px solid rgba(240,165,0,0.2)',
  borderRadius: 'var(--radius)',
  padding: '0.4rem 0.75rem',
  fontSize: '0.78rem',
  color: 'var(--text-dim)',
};
