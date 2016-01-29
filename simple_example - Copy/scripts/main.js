;(function() {

   
    //var i = 0;
    
    //var word = "variable";
    
    //var i= word;
    
    //console.log("output",i,word);
    //console.log("output"+i+word);
    
    //var array = [1,2,7,9];
    
    //array[0]="fish";
    
    //console.log(array);
    
    //console.log(array[0]);
    
    //console.log(array[9]);
    //array[9]="prime";
    //console.log(array[9]);
    
    //console.log(array);
    
    //console.log("length",array.length);
    
    //Make sure to use original variables. Be aware of scopting in java script.
    
    //for (var a = 0; i < array.length; i++){
        
       // console.log("thing", i, array[i]);
        
    //}
    
    var obj = {"name":"Za Warudo",
               "age:":10, 
               "height": 40};
    
    //console.log(obj);
   // console.log(obj.name);
   // obj.name="Star Platinum";
   // console.log(obj["name"]);
    
   /// obj.NewThing="that thing, that thing.";
    //obj["NewThing"]="another thing";
   // console.log(obj);
    
   // obj.age = [12,54,"wedge"];
    
    //console.log(obj);
    
    
   // var boom = function(input) {
        
        //console.log("BOOM!",input);
        
    //}
    
    //boom("Pow!");
    
    //var array = [boom, boom, 1, function(){ console.log("anonymous");}];

    
    //A way to grab an element from HTML universe.
    
    //However we are using D3, so we will use the "selector".
        // document.getElementById('chartDiv');
    
        //# indicates using name of id.
    var divElement = d3.select('#chartDiv');
    
        //console.log(divElement);
    
        //divElement = d3.selectAll('.happy');
    
        //console.log(divElement);
    
        var svg = divElement.append('svg')
                    .attr("height",500)
                    .attr("width",500);
    
    
        var dataArray = [10,50,2,30,48];
       
        var colorScale = d3.scale.linear()
            .domain([0,15,30])
            .range(["red","blue","green"]);
    
    
        var clickFunction = function(d, i) {
            
            console.log(this);
            d3.select(this).attr('fill',"yellow");
            
        }
    
    
        svg.selectAll(".dataThings")
            .data(dataArray)
            .enter().append('circle')
                .attr("cx",function(d, i ) {return i * 30;})
                .attr("cy",function(d, i ) {return i * 30;})
                .attr("r", function(d, i ) {return d;})
                .attr("fill","green")
                .on("click",clickFunction);
    
       svg.append('circle')
                .attr("cx",10)
                .attr("cy",10)
                .attr("r",20)
                .attr("fill","green");
            
        
        //console.log(divElement);
    
        var circle = d3.selectAll("circle");
    
        circle.style("fill","steelblue");
        circle.attr("r",30);
        circle.data([32,57,112]);
        circle.attr("r", function(d) { return Math.sqrt(d);})
        .attr("fill", function(d) { return colorScale(d);})
        //circle.attr("cx", function() { return Math.random() * 720; });
        
    
    
    
})();