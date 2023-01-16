import { useEffect, useState } from 'react'

import Stack from "react-bootstrap/Stack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Spinner from 'react-bootstrap/Spinner'

import Tables from './Tables'

const Page = ({leagueID}) => {
  
  const [loadingLeague, setLoadingLeague] = useState(true)
  const [selectedStatGroup, setSelectedStatGroup] = useState('')
  const [teamData, setTeamData] = useState([])
  const [playerData, setPlayerData] = useState([])
  const [draftData, setDraftData] = useState([])
  
  useEffect(() => {
    
    setLoadingLeague(true)
    setSelectedStatGroup('')
    setTeamData([])
    setPlayerData([])
    setDraftData([])
    
    fetchLeagueData()
  }, [leagueID])
  
  const fetchLeagueData = async () => {
    const data = await fetch(`/api/league?leagueID=${leagueID}`)
    const dataJSON = await data.json()
    calculateTeamData(dataJSON)
    calculatePlayerData(dataJSON)
    calculateDraftData(dataJSON)
    setLoadingLeague(false)
  }
  
  const calculateTeamData = (matches) => {
    
    let teams = []
    
    for(const match of matches) {
      let victory = 0;
      if(match.radiant_win) victory++
      
      var radiantPicks = []
      var direPicks = []
      
      match.players.forEach((player, index) => {
        if(index < 5) radiantPicks.push(player.hero_id)
        if(index >= 5) direPicks.push(player.hero_id)
      })
      
      if(teams.some(e => e.id === match.radiant_team_id)) {
        
        
        let index = teams.findIndex(e => e.id === match.radiant_team_id)
        
        teams[index].winrate.push(victory)
        teams[index].matchDuration.push(match.duration)
        teams[index].kills.push(match.radiant_kills)
        teams[index].heroesPicked = teams[index].heroesPicked.concat(radiantPicks)
        
        
      } else {
        teams.push({
          name: match.radiant_team_name,
          id: match.radiant_team_id,
          gamesPlayed: 0,
          winrate: [victory],
          matchDuration: [match.duration],
          kills: [match.radiant_kills],
          heroesPicked: radiantPicks,
        })
      }
      
      victory = 0
      if(!match.radiant_win) victory++
      
      if(teams.some(e => e.id === match.dire_team_id)) {
        
        let index = teams.findIndex(e => e.id === match.dire_team_id)
        
        teams[index].winrate.push(victory)
        teams[index].matchDuration.push(match.duration)
        teams[index].kills.push(match.dire_kills)
        teams[index].heroesPicked = teams[index].heroesPicked.concat(direPicks)
        
      } else {
        teams.push({
          name: match.dire_team_name,
          id: match.dire_team_id,
          gamesPlayed: 0,
          winrate: [victory],
          matchDuration: [match.duration],
          kills: [match.dire_kills],
          heroesPicked: direPicks,
        })
      }
    }
    
    for(const team of teams) {
      team.gamesPlayed = team.winrate.length
      team.winrate = Math.round((team.winrate.reduce((a,b) => a+b) / team.winrate.length ) * 100)
      
      const matchDurationAvg = ((team.matchDuration).reduce((a,b) => a+b) / team.matchDuration.length / 60)
      const minutes = Math.round(matchDurationAvg)
      var seconds = Math.round((matchDurationAvg * 100) % 100 * 60 / 100)
      if(seconds < 10) seconds = "0" + seconds
      team.matchDuration = minutes + ":" + seconds
      
      team.kills = Math.round((team.kills.reduce((a,b) => a+b) / team.kills.length ))
      
      team.heroesPicked = team.heroesPicked.reduce((allHeroes, hero) => {
        return {...allHeroes, [hero] : (allHeroes[hero] || 0) + 1}
      }, {})
      
      
      team.heroesPicked = Object.entries(team.heroesPicked).sort((a,b) => b[1] - a[1])
      team.numPicks = Object.entries(team.heroesPicked).length
    }
    
    setTeamData(teams)
  }
  
  const calculatePlayerData = (matches) => {
    const players = []
    
    for(const match of matches) {
      match.players.forEach((player, slot) => {
        if(players.some(e => e.id === player.account_id)) {
          let index = players.findIndex(e => e.id === player.account_id)
          players[index].kills.push(player.kills)
          players[index].deaths.push(player.deaths)
          players[index].assists.push(player.assists)
          players[index].lastHits.push(player.last_hits)
          players[index].denies.push(player.denies)
          players[index].gpm.push(player.gold_per_min)
          players[index].xpm.push(player.xp_per_min)
          players[index].heroDamage.push(player.hero_damage)
          players[index].towerDamage.push(player.tower_damage)
          players[index].couriers.push(player.courier_kills)
          players[index].heroes.push(player.hero_id)
          players[index].role.push(player.role)
          players[index].matches.push(match.match_id)
          
        } else {
          let teamArray = ["", ""]
          slot < 5 ? 
          teamArray = [match.radiant_team_name, match.radiant_team_name_tag, match.radiant_team_id]
          :
          teamArray = [match.dire_team_name, match.dire_team_name_tag, match.dire_team_id]
          players.push({
            name: player.name,
            id: player.account_id,
            team: teamArray,
            kills: [player.kills],
            deaths: [player.deaths],
            assists: [player.assists],
            lastHits: [player.last_hits],
            denies: [player.denies],
            gpm: [player.gold_per_min],
            xpm: [player.xp_per_min],
            heroDamage: [player.hero_damage],
            towerDamage: [player.tower_damage],
            couriers: [player.courier_kills],
            heroes: [player.hero_id],
            role: [player.role],
            matches: [match.match_id]
          })
        }
      })
    }
    
    for (const player of players) {
      player.kills = Math.round((player.kills.reduce((a,b) => a + b) / player.kills.length ) * 100) / 100
      player.deaths = Math.round((player.deaths.reduce((a,b) => a + b) / player.deaths.length) * 100) / 100
      player.assists = Math.round((player.assists.reduce((a,b) => a + b) / player.assists.length) * 100) / 100
      player.lastHits = Math.round((player.lastHits.reduce((a,b) => a + b) / player.lastHits.length) * 100) / 100
      player.denies = Math.round((player.denies.reduce((a,b) => a + b) / player.denies.length) * 100) / 100
      player.gpm = Math.round((player.gpm.reduce((a,b) => a + b) / player.gpm.length) * 100) / 100
      player.xpm = Math.round((player.xpm.reduce((a,b) => a + b) / player.xpm.length) * 100) / 100
      player.heroDamage = Math.round((player.heroDamage.reduce((a,b) => a + b) / player.heroDamage.length) * 100) / 100
      player.towerDamage = Math.round((player.towerDamage.reduce((a,b) => a + b) / player.towerDamage.length) * 100) / 100
      player.couriers = Math.round((player.couriers).reduce((a,b) => a+b))
      player.role = player.role.reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
      }), {})
      player.role = Object.entries(player.role).sort((a,b) => b[1] - a[1])
      player.heroes = player.heroes.reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
      }), {})
      player.heroes = Object.entries(player.heroes).sort((a,b) => b[1] - a[1])
    }
    
    setPlayerData(players)
  }
  
  const calculateDraftData = (matches) => {
    const data = []
    
    for(const match of matches) {
      for(const pick of match.picks_bans) {
        if(data.some(e => e.heroId === pick.hero_id)) {
          let index = data.findIndex(e => e.heroId === pick.hero_id)
          if(pick.is_pick) {
            data[index].pickCount++
            
            let player = match.players.find(e => e.hero_id === pick.hero_id)
            
            data[index].role.push(player.role)
            
            if(match.radiant_win && match.players.slice(0,5).some(e => e.hero_id === pick.hero_id)) {
              data[index].wins === -1 ? data[index].wins = 1 : data[index].wins++
            } else if(!match.radiant_win && match.players.slice(5).some(e => e.hero_id === pick.hero_id)) {
              data[index].wins === -1 ? data[index].wins = 1 : data[index].wins++
            }
            data[index].playedBy.push({
              "playerName": player.name,
              "playerID": player.account_id,
              "teamName": match.players.findIndex(e => e.hero_id === pick.hero_id) < 5 ? match.radiant_team_name : match.dire_team_name,
              "teamTag": match.players.findIndex(e => e.hero_id === pick.hero_id) < 5 ? match.radiant_team_name_tag : match.dire_team_name_tag,
              "teamID": match.players.findIndex(e => e.hero_id === pick.hero_id) < 5 ? match.radiant_team_id : match.dire_team_id,
              "match_id": match.match_id,
            })
          } else data[index].banCount++
          data[index].contestRate = Math.round(((data[index].banCount + data[index].pickCount) / matches.length) * 100)
          data[index].order.push(pick.order)
          data[index].firstPhase = Math.round((data[index].order.filter(e => {
            if(e < 8) { 
               return true
            }
            return false
         }).length / matches.length) * 100)
        } else {

          let win = -1
          if(match.radiant_win && match.players.slice(0,5).some(e => e.hero_id === pick.hero_id)) {
            win = 1
          } else if(!match.radiant_win && match.players.slice(5).some(e => e.hero_id === pick.hero_id)) {
            win = 1
          } else win = 0

          let pickObj = {
            heroId: pick.hero_id,
            pickCount: Number(pick.is_pick),
            banCount: Number(!pick.is_pick),
            order: [pick.order],
            contestRate: Math.round(((Number(pick.is_pick) + Number(!pick.is_pick)) / matches.length) * 100),
            wins: win,
            role: [],
            playedBy: [],
            firstPhase: Math.round((pick.order.filter(e => {
              if(e < 8) { 
                 return true
              }
              return false
           }).length / matches.length) * 100)
          }
          
          if(pick.is_pick) {
            let player = match.players.find(e => e.hero_id === pick.hero_id)
            pickObj.role.push(player.role)
            pickObj.playedBy.push({
              "playerName": player.name,
              "playerID": player.account_id,
              "teamName": match.players.findIndex(e => e.hero_id === pick.hero_id) < 5 ? match.radiant_team_name : match.dire_team_name,
              "teamTag": match.players.findIndex(e => e.hero_id === pick.hero_id) < 5 ? match.radiant_team_name_tag : match.dire_team_name_tag,
              "teamID": match.players.findIndex(e => e.hero_id === pick.hero_id) < 5 ? match.radiant_team_id : match.dire_team_id,
              "match_id": match.match_id,
            })
          }
          data.push(pickObj)
        }
      }
    }
    
    setDraftData(data)
  }
  
  return (
    <div>
    <div className="buttons">
    <Container>
    <Row className="align-items-center">
    <Col></Col>
    <Col md="auto">
    {loadingLeague &&
      <Spinner animation="border" variant="primary" className="my-5"/>
    }
    {!loadingLeague && 
      <Stack direction="horizontal" gap={3} className="mx-auto mt-4">
      <Button variant="outline-primary" onClick={() => { setSelectedStatGroup('Team'); } }>Team Statistics</Button>
      <Button variant="outline-primary" onClick={() => { setSelectedStatGroup('Player');  }}>Player Statistics</Button>
      <Button variant="outline-primary" onClick={() => { setSelectedStatGroup('Draft');  }}>Draft Statistics</Button>
      </Stack>}
      </Col>
      <Col></Col>
      </Row>
      </Container>
      </div>
      
      <Tables
      selectedStatGroup={selectedStatGroup}
      teamData={teamData}
      playerData={playerData}
      draftData={draftData}
      />
      
      </div>
      )
    }
    
    export default Page