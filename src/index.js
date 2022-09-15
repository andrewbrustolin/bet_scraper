import  { scraper }  from './scraper.js';


let string_array = scraper();

console.log(string_array);

function pageLoad(){

    let root = document.createElement("div");

    for (let i = 0; i < string_array.length; i++){
        let div = document.createElement("div");

        for (let j = 0; j < string_array[i].length; j++){

            let p = document.createElement("p")
            p.textContent(string_array[i][j]);
            div.appendChild(p);
            
        }
        root.appendChild(div);
    }
    
    let refs = 
    ["https://br.betano.com/sport/futebol/brasil/brasileirao-serie-a/10016/",
    "https://www.betfair.com/sport/football/brasil-s%C3%A9rie-a/13",
    "https://www.betsson.com/br/apostas-esportivas/futebol/brasil/brasileirao-serie-a", 
    "https://betway.com/pt/sports/grp/soccer/brazil/brasileiro-serie-a"]
    let sites = ["Betano", "Betfair", "Betsson", "Betway"];
    let linksdiv = document.createElement("div");

    for (let k = 0; k < refs.length; k++){
        let hyperlink = document.createElement("a");
        hyperlink.href = refs[k];
        hyperlink.innerText = sites[k];
        linksdiv.appendChild(hyperlink);
    }
    root.appendChild(linksdiv);
    document.body.appendChild(root);
}
pageLoad();
