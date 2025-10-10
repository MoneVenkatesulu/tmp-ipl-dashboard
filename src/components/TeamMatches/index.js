// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {PieChart, Pie, Cell, Legend} from 'recharts'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const dataList = {
      teamBannerUrl: data.team_banner_url,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      result: data.latest_match_details.result,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      competingTeam: data.latest_match_details.competing_team,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      umpires: data.latest_match_details.umpires,
      recentMatchesList: data.recent_matches,
    }
    this.setState({teamMatches: dataList, isLoading: false})
  }

  render() {
    const {teamMatches, isLoading} = this.state

    if (isLoading) {
      return (
        <div className="loader-container" data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )
    }

    return (
      <div className="team-matches-container">
        <Link to="/" className="team-matches-back-link">
          Back
        </Link>

        <img
          src={teamMatches.teamBannerUrl}
          alt="team banner"
          className="team-banner"
        />

        <div>
          <h1 className="letest-mathc-text">Latest Matches</h1>
          <LatestMatch teamMatches={teamMatches} />
        </div>

        <ul className="recent-matches-list">
          {teamMatches.recentMatchesList.map(eachMatch => (
            <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
