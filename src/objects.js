export const houses_obj = {
    houses: [
        {
            name: "Betano",
            url: "https://br.betano.com/sport/futebol/brasil/brasileirao-serie-a/10016/",
            parent_xpath: "/html/body/div[1]/div/section[2]/div[5]/div[2]/section/div[5]/div[2]/div[1]/div[2]/table//*",
            id_group: {
                home_team_dom_id: "events-list__grid__info__main__participants__participant-name",
                away_team_dom_id: "events-list__grid__info__main__participants__participant-name",
                home_odds_dom_id: "selections__selection__odd",
                draw_odds_dom_id: "selections__selection__odd",
                away_odds_dom_id: "selections__selection__odd"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            
            rawArrayProcessing: function(raw_events_array){

                const hometeam_array = [];
                const awayteam_array = [];
                const homeodds_array = [];
                const drawodds_array = [];
                const awayodds_array = [];

                (function hometeam_table(){
                    
                    for (let j = 0; j < raw_events_array[0].length; j++){
                        if ((j % 2) == 0){
                            hometeam_array.push(raw_events_array[0][j]);
                        }
                    }
                })();
                (function awayteam_table(){
                    
                    for (let j = 0; j < raw_events_array[1].length; j++){
                        if ((j % 2) != 0){
                            awayteam_array.push(raw_events_array[1][j]);
                        }                     
                    }
                })();
                (function homeodds_table(){
                    
                    for (let j = 0; j < raw_events_array[2].length; j = j + 3){
                        homeodds_array.push(raw_events_array[2][j]);
                    }                   
                })();
                (function drawodds_table(){
                    
                    for (let j = 1; j < raw_events_array[3].length; j = j + 3){
                        drawodds_array.push(raw_events_array[3][j]);
                    }                   
                })();
                (function awayodds_table(){
                    
                    for (let j = 2; j < raw_events_array[4].length; j = j + 3){
                        awayodds_array.push(raw_events_array[4][j]);
                    }                   
                })();
                
                const processed_array = [];
                const processed_array_size = (raw_events_array[0].length)/2;
                for (let i = 0; i < processed_array_size; i++) {
                        processed_array[i] = [];
                    
                }
                
                for (let i = 0; i < processed_array_size; i++){
                    processed_array[i].push(hometeam_array[i]);
                    processed_array[i].push(awayteam_array[i]);
                    processed_array[i].push(homeodds_array[i]);
                    processed_array[i].push(drawodds_array[i]);
                    processed_array[i].push(awayodds_array[i]);
                }

                return processed_array;
            }
        },
        {
            name: "Betfair",
            url: "https://www.betfair.com/sport/football/brasil-s%C3%A9rie-a/13",
            parent_xpath: "/html/body/div[2]/div/div/div[1]/div/div[2]/div/div/div/div/div[3]/div/ul//div//span",
            id_group: {
                home_team_dom_id: "team-name",
                away_team_dom_id: "team-name",
                home_odds_dom_id: "ui-runner-price",
                draw_odds_dom_id: "ui-runner-price",
                away_odds_dom_id: "ui-runner-price"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            

            rawArrayProcessing: function(raw_events_array){

                const hometeam_array = [];
                const awayteam_array = [];
                const homeodds_array = [];
                const drawodds_array = [];
                const awayodds_array = [];

                (function hometeam_table(){
                    
                    for (let j = 0; j < raw_events_array[0].length; j++){
                        if ((j % 2) == 0){
                            hometeam_array.push(raw_events_array[0][j]);
                        }
                    }
                })();
                (function awayteam_table(){
                    
                    for (let j = 0; j < raw_events_array[1].length; j++){
                        if ((j % 2) != 0){
                            awayteam_array.push(raw_events_array[1][j]);
                        }                     
                    }
                })();
                (function homeodds_table(){
                    
                    for (let j = 0; j < raw_events_array[2].length; j = j + 4){
                        homeodds_array.push(raw_events_array[2][j]);
                    }                   
                })();
                (function drawodds_table(){
                    
                    for (let j = 1; j < raw_events_array[3].length; j = j + 4){
                        drawodds_array.push(raw_events_array[3][j]);
                    }                   
                })();
                (function awayodds_table(){
                    
                    for (let j = 2; j < raw_events_array[4].length; j = j + 4){
                        awayodds_array.push(raw_events_array[4][j]);
                    }                   
                })();
                
                const processed_array = [];
                const processed_array_size = (raw_events_array[0].length)/2;
                // 2 teams, so the array size after processing must be half length
                for (let i = 0; i < processed_array_size; i++) {
                        processed_array[i] = [];
                    
                }
                
                for (let i = 0; i < processed_array_size; i++){
                    processed_array[i].push(hometeam_array[i]);
                    processed_array[i].push(awayteam_array[i]);
                    processed_array[i].push(homeodds_array[i]);
                    processed_array[i].push(drawodds_array[i]);
                    processed_array[i].push(awayodds_array[i]);
                }

                return processed_array;
            }
        },
        {
            name: "Betsson",
            url: "https://www.betsson.com/br/apostas-esportivas/futebol/brasil/brasileirao-serie-a",
            parent_xpath: "/html/body/obg-app-root/div/obg-m-betting-layout-container/obg-m-sportsbook-layout-container/obg-m-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/ng-scrollbar/div/div/div/div/section/ng-component/obg-m-category-container/obg-sportsbook-cards-container/obg-glide/section/div[1]//*",
            id_group: {
                home_team_dom_id: "obg-sportsbook-card-participant-label ng-star-inserted",
                away_team_dom_id: "obg-sportsbook-card-participant-label ng-star-inserted",
                home_odds_dom_id: "obg-numeric-change ng-star-inserted",
                draw_odds_dom_id: "obg-numeric-change ng-star-inserted",
                away_odds_dom_id: "obg-numeric-change ng-star-inserted"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            
            
            rawArrayProcessing: function(raw_events_array){

                const hometeam_array = [];
                const awayteam_array = [];
                const homeodds_array = [];
                const drawodds_array = [];
                const awayodds_array = [];

                (function hometeam_table(){
                    
                    for (let j = 0; j < raw_events_array[0].length; j++){
                        if ((j % 2) == 0){
                            hometeam_array.push(raw_events_array[0][j]);
                        }
                    }
                })();
                (function awayteam_table(){
                    
                    for (let j = 0; j < raw_events_array[1].length; j++){
                        if ((j % 2) != 0){
                            awayteam_array.push(raw_events_array[1][j]);
                        }                     
                    }
                })();
                (function homeodds_table(){
                    
                    for (let j = 0; j < raw_events_array[2].length; j = j + 3){
                        homeodds_array.push(raw_events_array[2][j]);
                    }                   
                })();
                (function drawodds_table(){
                    
                    for (let j = 1; j < raw_events_array[3].length; j = j + 3){
                        drawodds_array.push(raw_events_array[3][j]);
                    }                   
                })();
                (function awayodds_table(){
                    
                    for (let j = 2; j < raw_events_array[4].length; j = j + 3){
                        awayodds_array.push(raw_events_array[4][j]);
                    }                   
                })();
                
                const processed_array = [];
                const processed_array_size = (raw_events_array[0].length)/2;
                // 2 teams, so the array size after processing must be half length
                for (let i = 0; i < processed_array_size; i++) {
                        processed_array[i] = [];
                    
                }
                
                for (let i = 0; i < processed_array_size; i++){
                    processed_array[i].push(hometeam_array[i]);
                    processed_array[i].push(awayteam_array[i]);
                    processed_array[i].push(homeodds_array[i]);
                    processed_array[i].push(drawodds_array[i]);
                    processed_array[i].push(awayodds_array[i]);
                }
                return processed_array;
            }
        },

        {
            name: "Betway",
            url: "https://betway.com/pt/sports/grp/soccer/brazil/brasileiro-serie-a",
            parent_xpath: "/html/body/div[1]/div/div[3]/div/div[1]/div/div[2]/div[4]/div/div[3]/div[2]//*",
            id_group: {
                home_team_dom_id: "teamNameHomeTextFirstPart",
                away_team_dom_id: "teamNameAwayTextFirstPart",
                home_odds_dom_id: "odds",
                draw_odds_dom_id: "odds",
                away_odds_dom_id: "odds"
            },
            xpath_group: [],
            raw_events_array: [],
            processed_events_array: [],
            
            rawArrayProcessing: function(raw_events_array){

                const hometeam_array = [];
                const awayteam_array = [];
                const homeodds_array = [];
                const drawodds_array = [];
                const awayodds_array = [];

                (function hometeam_table(){
                    
                    for (let j = 0; j < raw_events_array[0].length; j++){
                        hometeam_array.push(raw_events_array[0][j]);
                    }
                })();
                (function awayteam_table(){
                    
                    for (let j = 0; j < raw_events_array[1].length; j++){
                            awayteam_array.push(raw_events_array[1][j]);
                    }
                })();
                (function homeodds_table(){
                    
                    for (let j = 2; j < raw_events_array[2].length; j = j + 3){

                        homeodds_array.push(raw_events_array[2][j].replace(",","."))
                    }                   
                })();
                (function drawodds_table(){
                    
                    for (let j = 5; j < raw_events_array[3].length; j = j + 3){
                        drawodds_array.push(raw_events_array[3][j].replace(",","."));
                    }                   
                })();
                (function awayodds_table(){
                    
                    for (let j = 8; j < raw_events_array[4].length; j = j + 3){
                        awayodds_array.push(raw_events_array[4][j].replace(",","."));
                    }                   
                })();
                
                const processed_array = [];
                const processed_array_size = (raw_events_array[0].length)/2;
                // 2 teams, so the array size after processing must be half length
                for (let i = 0; i < processed_array_size; i++) {
                        processed_array[i] = [];
                    
                }
                
                for (let i = 0; i < processed_array_size; i++){
                    processed_array[i].push(hometeam_array[i]);
                    processed_array[i].push(awayteam_array[i]);
                    processed_array[i].push(homeodds_array[i]);
                    processed_array[i].push(drawodds_array[i]);
                    processed_array[i].push(awayodds_array[i]);
                }
                return processed_array;
            }
        }
    ],

    eventArrayProcessing: function(){
        for (let i = 0; i < houses_obj.houses.length; i++){
            houses_obj.houses[i].processed_events_array = houses_obj.houses[i].rawArrayProcessing(houses_obj.houses[i].raw_events_array);
            for (let j = 0; j < houses_obj.houses[i].processed_events_array.length; j++){
                houses_obj.houses[i].processed_events_array[j].unshift(houses_obj.houses[i].name);
            }
        }
    },

    eventArrayMatching: function(){
        let array_matcher = [];
        let buffer = [];

       (function shallowCloning() {
            for (let i = 0; i < houses_obj.houses.length; i++){
                buffer[i] = houses_obj.houses[i].processed_events_array;
            }
       })();

       (function emptyArrayMatcherCreation(){
            let maxpossible = 0; //max possible amount of unique events
            for (let i = 0; i < houses_obj.houses.length; i++){
                maxpossible = houses_obj.houses[i].processed_events_array.length + maxpossible;
            }
            for (let s = 0; s < maxpossible; s++){
                array_matcher[s] = [];
            }
        })();

        for (let m = 0, index = 0; m < (houses_obj.houses.length - 1); m++){
            for (let k = 0; k < buffer[m].length; k++, index++){
                array_matcher[index].push(buffer[m][k]);
                for (let n = (m + 1); n < houses_obj.houses.length; n++){
                    for (let j = 0; j < buffer[n].length; j++){
                        if ((buffer[m][k][1] + buffer[m][k][2]) == (buffer[n][j][1] + buffer[n][j][2])){
                            array_matcher[index].push(buffer[n][j]);
                        } 
                    }
                }
            }
        }

        array_matcher = array_matcher.filter((a) => a.length == 3);
        return array_matcher;
    },

    probabilityCalc: function(){
        const array = this.eventArrayMatching();
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array[i].length; j++){
                array[i][j][3] = 1/Number(array[i][j][3]);
                array[i][j][4] = 1/Number(array[i][j][4]);
                array[i][j][5] = 1/Number(array[i][j][5]);
            }
        }
        return array;
    },

    preSureBetCalc: function(){
        const prob_array = this.probabilityCalc();
        const aux = ["Home victory: ", "Draw: ", "Away victory: "];
        let counter = 0;
        //console.log(prob_array);

        let array = [];
        let max_number = 6;
        let football_type_size = 3;
        let football_type_array_length = 5;
        for (let x = 0; x < prob_array.length; x++){
            array[x] = [];
            for (let y = 0; y < max_number; y++){
                array[x][y] = [];
                for (let z = 0; z < football_type_size; z++){
                    array[x][y][z] = [];
                    for (let w = 0; w < football_type_array_length; w++){
                        array[x][y][z][w] = 0;
                    }
                }
            }
        }
        
        for (let i = 0; i < prob_array.length; i++){        
            for(let j = 0; j < 3; j++){                             
                for(let k = 0; k < 3; k++){
                    if (k != j){                                           
                        for(let l = 0; l < 3; l++){
                            if ((l != k) && (l != j)){

                                array[i][counter][j][0] = prob_array[i][0][0]; //housename
                                array[i][counter][j][1] = prob_array[i][0][1]; //hometeam
                                array[i][counter][j][2] = prob_array[i][0][2]; //awayteam
                                array[i][counter][j][3] = aux[j]; //result
                                array[i][counter][j][4] = prob_array[i][0][j+3]; //result odds

                                array[i][counter][k][0] = prob_array[i][1][0]; //housename
                                array[i][counter][k][1] = prob_array[i][1][1]; //hometeam
                                array[i][counter][k][2] = prob_array[i][1][2]; //awayteam
                                array[i][counter][k][3] = aux[k]; //result
                                array[i][counter][k][4] = prob_array[i][1][k+3]; //result odds
                                
                                array[i][counter][l][0] = prob_array[i][2][0]; //housename
                                array[i][counter][l][1] = prob_array[i][2][1]; //hometeam
                                array[i][counter][l][2] = prob_array[i][2][2]; //awayteam
                                array[i][counter][l][3] = aux[l]; //result
                                array[i][counter][l][4] = prob_array[i][2][l+3]; //result odds
                                
                                counter++;
                            }
                        }
                    }
                }
            }
            counter = 0;
        }
        return array;           
    },

    sureBetCalc: function(){
        let array = houses_obj.preSureBetCalc();
        let sum = 0;
        let buffer = [];
    
        for (let i = 0; i < array.length; i++){ 
            for (let j = 0; j < array[i].length; j++){
                for (let k = 0; k < array[i][j].length; k++){
                    sum = sum + array[i][j][k][4];
                }
                if (sum < 1){
                    buffer.push(array[i][j]);                   
                }               
                sum = 0;
            }
        }
        return buffer;
    },

    sureBetStake: function() {
        let array = this.sureBetCalc();
        let string_array = [];
        let teamA = "";
        let teamB = "";
        let bookmaker_home = "";
        let bookmaker_draw = "";
        let bookmaker_away = "";
        let stake = 0;
        let stake_home = 0;
        let stake_draw = 0;
        let stake_away = 0;
        let potential_winnings = 100;
        let sum_arbitrages = 0;
        let total_earnings = 0;
        let surebet_array = [];
          
        for (let i = 0; i < array.length; i++){ 
            for (let j = 0; j < array[i].length; j++){
                
                    stake = (array[i][j][4])*potential_winnings;
                    sum_arbitrages = sum_arbitrages + stake;
                }
                
                teamA = array[i][0][1];
                teamB = array[i][0][2];
                stake_home = array[i][0][4]*potential_winnings;
                stake_draw = array[i][1][4]*potential_winnings;
                stake_away = array[i][2][4]*potential_winnings;
                bookmaker_home = array[i][0][0];
                bookmaker_draw = array[i][1][0];
                bookmaker_away = array[i][2][0];
                total_earnings = potential_winnings - sum_arbitrages;
                
                string_array = [["Evento: " + teamA + " x " + teamB],
                ["Investir R$" + stake_home + " no time: " + teamA + ", na casa de aposta: " + bookmaker_home],
                ["Investir R$" + stake_draw + " no empate " + ", na casa de aposta: " + bookmaker_draw], 
                ["Investir R$" + stake_away + " no time: " + teamA + ", na casa de aposta: " + bookmaker_away],
                ["Ganho condicionado a cada casa de aposta: R$" + potential_winnings],
                ["Total investido: R$" + sum_arbitrages], 
                ["Seu lucro total: R$" + total_earnings]];

                surebet_array.push(string_array);
                sum_arbitrages = 0;
            
        }
        return surebet_array;
    },

    xpathAssembler: function(parent_xpath, id_group) {
        
            if (parent_xpath === "/html/body/obg-app-root/div/obg-m-betting-layout-container/obg-m-sportsbook-layout-container/obg-m-sidenav/mat-sidenav-container/mat-sidenav-content/div/div/ng-scrollbar/div/div/div/div/section/ng-component/obg-m-category-container/obg-sportsbook-cards-container/obg-glide/section/div[1]//*"){
                return (parent_xpath + "[contains(@class,'" + id_group + "')]//span");
            } else {
                //[contains(@class, 'rcl-MarketHeaderLabel-isdate')]")
                return (parent_xpath + "[contains(@class,'" + id_group + "')]");
            }
                    
    },

    xpathGroupSetter: function() {
         for(let i = 0; i < houses_obj.houses.length; i++){
            for(let j = 0; j < Object.keys(houses_obj.houses[i].id_group).length; j++){
                houses_obj.houses[i].xpath_group[j] = houses_obj.xpathAssembler(houses_obj.houses[i].parent_xpath, Object.values(houses_obj.houses[i].id_group)[j]);
                //console.log(this.houses[i].xpath_group[j]);
            }
        }
        
    },

    urlArrayGetter: function() {
        const url_array = [];
        for(let i = 0; i < houses_obj.houses.length; i++){
            url_array[i] = houses_obj.houses[i].url;
        }
        return url_array;
    }
}

    

    

   






   

