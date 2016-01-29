;(function() {

	var divElement = d3.select('#chartDiv');
	
	var svg = divElement.append('svg')
		.attr("height", 800)
		.attr("width", 800);
		
	var colorScale = d3.scale.linear()
		.domain([0,30])
		.range(["red", "green", "blue"]);
		
	var clickFunction = function(d,i){
		console.log(this);
		d3.select(this).attr('fill', "yellow");
	};
		
	var dataArray = [10, 20, 30, 15];	
    var dataArray2 = [50, 43, 67, 8];	
	
	
	console.log(divElement);
    
    //Creating a function directly.
    //Review general update pattern.
    var tickCount = 0;
    function tickTock(elapsedTime){
        
       if(elapsedTime > (tickCount * 1000)){
           tickCount++;
           //console.log("tick",elapsedTime);
           
           
           var dataToUse = dataArray2;
           
           if (tickCount % 2 === 0){
               
               
               dataToUse=dataArray;
               
               
               
           }
           
           var things = svg.selectAll(".dataThings")
                .data(dataToUse);
           
                //Update old things.
                things.transition().duration(1000)
                    .attr("r", function(d,i){return d;})
                    .attr("fill", function(d){return colorScale(d);});
           
                //ENTER
                things.enter().append('circle')
                    .attr('class',"dataThings")
                    .attr("cx", function(d,i){return (i+1)*40;})
                    .attr("cy", function(d,i){return (i+1)*40;})
                    .attr("r", function(d,i){return d;})
                    .attr("fill", function(d){return colorScale(d);})
                    .on("click", clickFunction);
           
                //EXIT
                things.exit()
                    .transition().duration(1000)
                        .attr('cy',1000)
                        .attr('fill', "red" )
                    .remove();
       }
           
    }
    
    
    
    d3.timer(tickTock)
})();