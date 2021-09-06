var categoriesArray = [];
  
function showCategoriesList(array){
    let minimo = (document.getElementById("minimo").value);
    let maximo = (document.getElementById("maximo").value);
    minimo = parseInt(minimo) ? parseInt(minimo) : 0;
    maximo = parseInt(maximo) ? parseInt(maximo) : 1000000;

     showSpinner();
    
    let htmlContentToAppend = "";

    if (!array) {
        array = categoriesArray;
    }

    for(let i = 0; i < array.length; i++){
        let category = array[i];
        if (category.cost >= minimo && category.cost <= maximo){
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4> 
                        <h7 class="text-muted bi-cash-stack text-muted ">` + category.currency + " " + category.cost + " " +`</h7>
                        <p>` + `</p> <p>` + `</p>  <p>` + `</p> <p>` + `</p>    
                        <small class="text-muted bi-basket2-fill text-muted">` + category.soldCount + "vendidos "+`</small>  
                    </div>
                    <p>`+ category.description +`</p>
                </div>
            </div>
        </div>
        `
    }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
    
    hideSpinner();
}




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
            console.log(categoriesArray);
        }
    });
});

function ordenar (orden, campo){

    categoriesArray.sort(function(a, b) {
        if (a[campo] > b[campo]) {
            return orden === 'asc' ? 1 : -1;
        }
        if (a[campo] < b[campo]) {
            return orden === 'asc' ? -1 : 1
        }
          return 0;
    }); //ordeno el array
    showCategoriesList(categoriesArray);

}

