fetch("data.json")
  .then((rep) => {
    // Lorsque la réponse est reçue, elle est convertie en JSON pour pouvoir être manipulée en tant qu'objet JavaScript
    return rep.json();
  })
  .then(donnee => {
    // Une fois les données reçues et converties, elles sont affiché dans la console (pour verifier que ça fonctionne bien)
    console.log(donnee);

    // Parcourt chaque produit dans le tableau de données
    donnee.forEach(recette=> {
      // Appelle la fonction 'afficher' pour afficher les informations du produit dans la page HTML
      afficher(recette);
    });
  });

function afficher(recette) {
    let nom = recette.nom
    let img = recette.img
    let facilité = recette.difficulte
    let tempsdecuisson = recette.tempCuisson
    let quantités = recette.portions
    let ingrédients = recette.ingredients
    let tempspreparation = recette.tempPreparation

    let etapes = recette.etapes

    let saison = recette.saison

    // reconstruire : <li>200 gr de pate</li>
    let listeIng =""
    ingrédients.forEach(ing=>{
        listeIng+=`<li>${ing.quantite} ${ing.unite} ${ing.aliment}</li>`
    })
    console.log(listeIng)

    // reconstruire : <li>faire cuire les pates</li>
    let listetapes =""
    etapes.forEach(etapes=>{
        listetapes+=`<li>${etapes.numeroEtape} ${etapes.descEtape}</li>`
    })
    console.log(listetapes)


    let template =` <div>
            <h3>${nom}</h3>
            <ul>
                <li><span>Difficulté:</span>${facilité} </li>
                <li><span>portions:</span>${quantités}</li>
                <li><span>temps de preparation</span>${tempspreparation}</li>
                <li><span>temps de cuisson</span>${tempsdecuisson}</li>

            </ul>
            <div>
                <h4>ingredients :</h4>
                    <ul>
                        ${listeIng}
                    </ul>
            </div>
            <div>
                <h4>Etapes</h4>
                <ol>
                ${listetapes}
                </ol>
            </div>
            <div>
                <img src="${img}" alt="" class="image">
            </div>
        </div>`

   let zone = document.getElementById("zone")
   zone.innerHTML += template
}