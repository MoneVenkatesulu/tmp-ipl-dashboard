// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const matchDetails = {
    competingTeamLogo: eachMatch.competing_team_logo,
    competingTeam: eachMatch.competing_team,
    result: eachMatch.result,
    matchStatus: eachMatch.match_status,
  }

  const statusClassName =
    matchDetails.matchStatus === 'Won' ? 'text-green' : 'text-red'

  return (
    <li className="match-card-container">
      <img
        src={matchDetails.competingTeamLogo}
        alt={`competing team ${matchDetails.competingTeam}`}
        className="matchDetails-logo"
      />
      <p className="match-card-text">{matchDetails.competingTeam}</p>
      <p className="match-card-text">{matchDetails.result}</p>
      <p className={statusClassName}>{matchDetails.matchStatus}</p>
    </li>
  )
}

export default MatchCard
