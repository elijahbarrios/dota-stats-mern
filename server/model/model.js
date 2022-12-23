const mongoose = require('mongoose')

const matchSchema = mongoose.Schema({
    league_id: Number,
    match_id: {type: Number, unique: true},
    start_time: Number,
    duration: Number,
    radiant_win: Boolean,
    dire_kills: Number,
    radiant_kills: Number,
    dire_team_id: Number,
    dire_team_name: String,
    dire_team_name_tag: String,
    radiant_team_id: Number,
    radiant_team_name: String,
    radiant_team_name_tag: String,
    picks_bans: [{
        is_pick: Boolean,
        hero_id: Number,
        team: Number,
        order: Number
    }],
    players: [{
        player_slot: Number,
        account_id: Number,
        kills: Number,
        deaths: Number,
        assists: Number,
        last_hits: Number,
        denies: Number,
        gold_per_min: Number,
        hero_damage: Number,
        tower_damage: Number,
        xp_per_min: Number,
        courier_kills: {type: Number, default: 0},
        role: String,
        name: String,
        hero_id: Number
    }]
})

module.exports = mongoose.model('Match', matchSchema)