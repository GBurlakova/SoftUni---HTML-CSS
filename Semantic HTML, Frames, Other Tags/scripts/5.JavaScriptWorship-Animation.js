window.onload = function (){
    var p = Raphael("main-container");
    <!--Red dotted square-->
    var rect = p.rect(100, 100, 100, 100)
        .attr({
            stroke : "rgb(255, 8, 0)",
            "stroke-width" : 1,
            "stroke-dasharray" : "."
        }).animate({
            transform : "s2"
        }, 2000, "elastic");

    <!--I love JS-->
    var text = p.text(150, 65, "I love JavaScript")
        .attr({
            "font-family" : "Consolas",
            "font-size" : "18",
            "text-align" : "center"
        }).animate({transform : "r360"}, 1000);

    <!--Yellow rect-->
    var innerRect = p.rect(100, 110, 100, 100)
        .attr({
            fill: "rgb(241, 218, 78)",
            stroke: "none"
        }).animate({transform : "r-180}"}, 1500);

    <!--JS-->
    var text = p.text(160, 180, "JS")
        .attr({
            "font-family" : "Consolas",
            "font-size" : "40",
            fill : "rgb(57, 59, 51)"
        }).animate({
            transform : "s2"
        }, 1500, "fadeout");
};