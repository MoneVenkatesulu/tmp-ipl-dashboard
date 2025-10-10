// Write your code here
import './index.css'

const LatestMatch = props => {
  const {teamMatches} = props

  return (
    <div className="latest-match-details-container">
      <div className="own-team-details-container">
        <div className="own-team-details">
          <p className="latest-match-text">{teamMatches.competingTeam}</p>
          <p className="latest-match-text">{teamMatches.date}</p>
          <p className="latest-match-text">{teamMatches.venue}</p>
          <p className="latest-match-text">{teamMatches.result}</p>
        </div>
        <img
          src={teamMatches.competingTeamLogo}
          alt={`latest match ${teamMatches.competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="innings-container">
        <h1 className="latest-match-text">First Innings</h1>
        <p className="latest-match-text">{teamMatches.firstInnings}</p>
        <h1 className="latest-match-text">Seconds Innings</h1>
        <p className="latest-match-text">{teamMatches.secondInnings}</p>
        <h1 className="latest-match-text">Man of The Match</h1>
        <p className="latest-match-text">{teamMatches.manOfTheMatch}</p>
        <h1 className="latest-match-text">Umpires</h1>
        <p className="latest-match-text">{teamMatches.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
