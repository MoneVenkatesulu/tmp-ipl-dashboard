// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="team-card">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
