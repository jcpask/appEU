
//Data (JSON)
//https://cohesiondata.ec.europa.eu/resource/pi4w-3vc9.json
//EU Explanation page
//https://cohesiondata.ec.europa.eu/2014-2020/2014-2020-Financial-Allocations-by-Member-State-Br/pi4w-3vc9
//Wiki explanation of some funds
//https://en.wikipedia.org/wiki/Structural_Funds_and_Cohesion_Fund

var studioPromise = d3.html("https://ghibliapi.herokuapp.com/films")

studioPromise.then(
    function(data)
        {
            filmTitle(data)
        })

studioPromise.then(
    function(films)
    {
        d3.select("#banner").text("Click on a film you would like to know more about");
    }
    function(err)
    {
        d3.select("#banner").text("No films now");
    }
)

var makeFilmList=function(films)
    {
     var pDiv=d3.select("#listStart").append("ol")
    .selectAll("li")
    .data(films)
    .enter()
    .append("li")
    .text(function(film)
         {
        var filmTitle = return film.title
    })
        }

