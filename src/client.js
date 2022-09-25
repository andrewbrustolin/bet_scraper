(function tableFetching(){
    const button = document.getElementById("tableGetter");
    button.addEventListener('click', () => {
        fetch('/tableGeneration', {method: 'POST'})
        .then(function(response) {
          if(response.ok) {
            tableLoader();
          }
          throw new Error('Request failed.');
        })
        .catch(function(error) {
          console.log(error);
        });
    
    });
})();

function tableLoader (){
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            let section = document.createElement("section");
            section.classList.add("eventos");
            document.querySelector("#root").appendChild(section);

            for (let i = 0; i < data.length; i++){
                let div = document.createElement("div");
                div.classList.add("evento");
                h1 = document.createElement("h1");
                h1.textContent = i+1;
                div.appendChild(h1);
                for (let j = 0; j < data[i].length; j++){
                    let p = document.createElement("p")
                    p.textContent = data[i][j];
                    div.appendChild(p);
                }
                section.appendChild(div);
            }
            let refs = 
            ["https://br.betano.com/sport/futebol/brasil/brasileirao-serie-a/10016/",
            "https://www.betfair.com/sport/football/brasil-s%C3%A9rie-a/13",
            "https://www.betsson.com/br/apostas-esportivas/futebol/brasil/brasileirao-serie-a", 
            "https://betway.com/pt/sports/grp/soccer/brazil/brasileiro-serie-a"]
            let sites = ["Betano", "Betfair", "Betsson", "Betway"];
            let linksdiv = document.createElement("div");
            linksdiv.classList.add("links");

            for (let k = 0; k < refs.length; k++){
                let hyperlink = document.createElement("a");
                hyperlink.href = refs[k];
                hyperlink.setAttribute("target","_blank");
                hyperlink.innerText = sites[k];
                linksdiv.appendChild(hyperlink);
            }
            document.querySelector("#root").appendChild(linksdiv);
        })
}
