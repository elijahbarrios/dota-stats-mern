const axios = require('axios')

const Match = require('../model/model')

const leagueData = async (req, res) => {

    const leagueURL = `https://api.opendota.com/api/leagues/${req.query.leagueID}/matches`

    leagueMatchesResponse = await axios({
        url: leagueURL,
        method: 'GET',
        headers: { "Accept-Encoding": "gzip,deflate,compress" }
    })

    matchIDS = leagueMatchesResponse.data.map(({match_id: id})=>id)

    for(const matchID of matchIDS) {
        const searchMatch = await Match.findOne({ match_id: matchID }).exec()
        
        if(!searchMatch) {
            console.log(`Match ${matchID} being added to the database`)
            const matchURL = `https://api.opendota.com/api/matches/${matchID}`

            matchResponse = await axios({
                url: matchURL,
                method: 'GET',
                headers: { "Accept-Encoding": "gzip,deflate,compress" }
            })

            let pickBanArray = []
            if(matchResponse.data.picks_bans) {
                for(pickBan of matchResponse.data.picks_bans) {
                    pickBanArray.push({
                        is_pick: pickBan.is_pick,
                        hero_id: pickBan.hero_id,
                        team: pickBan.team,
                        order: pickBan.order
                    })
                }
            }

            let playerArray = []

            for(player of matchResponse.data.players) {
                let determinedRole
                if(player.lane_role == 2) {
                    determinedRole = 'Mid'
                } else if(player.lane_role == 1) {
                    player.lh_t[10] > 35 ? determinedRole = 'Carry' : determinedRole = 'Hard Support'
                } else if(player.lane_role == 3) {
                    player.lh_t[10] > 25 ? determinedRole = 'Offlane' : determinedRole = 'Soft Support'
                }
                playerArray.push({
                    player_slot: player.player_slot,
                    account_id: player.account_id,
                    kills: player.kills,
                    deaths: player.deaths,
                    assists: player.assists,
                    last_hits: player.last_hits,
                    denies: player.denies,
                    gold_per_min: player.gold_per_min,
                    hero_damage: player.hero_damage,
                    camps_stacked: player.camps_stacked,
                    stuns: player.stuns,
                    tower_damage: player.tower_damage,
                    xp_per_min: player.xp_per_min,
                    courier_kills: player.courier_kills,
                    role: determinedRole,
                    name: player.name,
                    hero_id: player.hero_id
                })
            }

            await Match.create({
                league_id: matchResponse.data.leagueid,
                match_id: matchResponse.data.match_id,
                start_time: matchResponse.data.start_time,
                duration: matchResponse.data.duration,
                radiant_win: matchResponse.data.radiant_win,
                dire_kills: matchResponse.data.dire_score,
                radiant_kills: matchResponse.data.radiant_score,
                dire_team_id: matchResponse.data.dire_team_id,
                dire_team_name: matchResponse.data.dire_team?.name,
                dire_team_name_tag: matchResponse.data.dire_team?.tag,
                radiant_team_id: matchResponse.data.radiant_team_id,
                radiant_team_name: matchResponse.data.radiant_team?.name,
                radiant_team_name_tag: matchResponse.data.radiant_team?.tag,
                picks_bans: pickBanArray,
                players: playerArray
            })
        }
    }
    
    console.log(`League ${req.query.leagueID} data retrieved`)

    const matchesQuery = await Match.find({ league_id: req.query.leagueID, start_time: {$gt: 1671411600} }).exec()
    return res.status(200).json(matchesQuery)
}

module.exports = {
    leagueData
}