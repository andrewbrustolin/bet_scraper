import xpath from 'xpath';


const houses_obj = {
    houses: [
        {
            name: "bet365",
            url: "https://www.bet365.com/#/AC/B1/C1/D1002/E71022033/G40/",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
            
        },
        {
            name: "Betano",
            url: "https://br.betano.com/",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        },
        {
            name: "Betfair",
            url: "https://www.betfair.com/br",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        },
        {
            name: "1xBet",
            url: "https://br.1xbet.com/pt",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        },
        {
            name: "Betmotion",
            url: "https://www.betmotion.com/br/S",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){

            }
        },
        {
            name: "Dafabet",
            url: "https://www.dafabet.com/pt",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        },
        {
            name: "Betsson",
            url: "https://www.betsson.com/br",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        },
        {
            name: "Betway",
            url: "https://betway.com/pt/sports",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        },
        {
            name: "Sportsbet.io",
            url: "https://sportsbet.io/pt/sports",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        },
        {
            name: "LeoVegas",             
            url: "https://www.leovegas.com/pt-br/",
            parent_xpath: "/html/body/div[1]/div/div[3]/div[3]/div/div/div/div[1]/div/div/div[2]/div/div/div[2]/div[2]/div",
            id_group: {
                date_dom_id: "rcl-MarketHeaderLabel rcl-MarketHeaderLabel-isdate",
                home_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                away_team_dom_id: "rcl-ParticipantFixtureDetailsTeam_TeamName",
                home_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                draw_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds",
                away_odds_dom_id: "sgl-ParticipantOddsOnly80_Odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            ordered_events_array: [],
            rawArrayProcessing: function(){
                
            }
        }
    ],
   
    xpathAssembler: function(parent_xpath, id_group) {

        return (parent_xpath + "[@class='" + id_group + "']");
        
    },

    xpathGroupSetter: function() {

         for(i = 0; i < houses_obj.houses.length; i++){
            for(j = 0; j < Object.keys(houses_obj.houses[i].id_group).length; j++){

                houses_obj.houses[i].xpath_group[j] = houses_obj.xpathAssembler(houses_obj.houses[i].parent_xpath, Object.values(houses_obj.houses[i].id_group)[j]);
    
                //console.log(this.houses[i].xpath_group[j]);

            }
        }
    },


    urlArrayGetter: function() {

        url_array = [];
        for(i = 0; i < houses_obj.houses.length; i++){
            url_array[i] = houses_obj.houses[i].url;
        }
        return url_array;
    },


    rawEventArrayBuilder: function(xpath_group, url_array){

        for(i = 0; i < url_array.length; i++){
            for(j = 0; j < xpath_group; j++){
                houses_obj.houses[i].raw_events_array[j] = xpath.select(xpath_group[j], url_array[i]).data;
            }
        }
        
    },

    processedEventArrayBuilder: function(rawArrayProcessing){

        rawArrayProcessing();

    }
}

//houses_obj.xpathGroupSetter();

//houses_obj.urlGetter();



module.exports = houses_obj;


/*

for(n = 0; n < houses.length; n++){






    while(event.date = "13 agosto"){

        let event[i] = new event_construct(date[x], home_team[x], away_team[x], home_odds[x], draw_odds[x], away_odds[x]);

        houses[n].house_events.push(event[i]);



    }
}



for(index = 1; index <= date.length; index++){



}


*/
/*eventConstruct: function(date, home_team, away_team, home_odds, draw_odds, away_odds){

        this.date = date;
        this.home_team = home_team;
        this.away_team = away_team;
        this.home_odds = home_odds;
        this.draw_odds = draw_odds;
        this.away_odds = away_odds;

    },*/
