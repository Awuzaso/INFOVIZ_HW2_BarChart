
	var margin = { top: 10, right: 10, bottom: 100, left: 50 };
	var width = 400;
	var height = 300;
	
	var dataXRange = {min: 40, max: 100};
	var dataYRange = {min: 0, max: 100};
	var xAxisLabelHeader = "X Header";
	var yAxisLabelHeader = "Y Header";
	var circleRadius = 4;
    var squareDim = 4;

	var data;
    var data2;
	var chart;
	var chartWidth;
	var chartHeight;
	
	init();

	function init() {
		var i = 0;
		var j = 0;

		chartWidth = width - margin.left - margin.right;
		chartHeight = height - margin.top - margin.bottom;

		// load data from json
        
        
        
		d3.json("./data/stream_1.json", function(error, json) {
			if (error) { return console.warn(error); }
			else {
				data = json;
				console.log("JSON loaded");
				initializeChart();
				createAxes();
				
				
                
                d3.json("./data/stream_2.json", function(error, json) {
                    if (error) { return console.warn(error); }
                    else {
                        data2 = json;
                        //console.log("JSON loaded");
                        //initializeChart();
                        //createAxes();
                        drawDots();
                        //drawSquares();
                        
                           



                    }
		          });
		
				//drawDots();
               
	
			}
		});
    }
    

	function initializeChart() {
		chart = d3.select("#chartDiv").append("svg")
			.attr("width", width)
			.attr("height", height);
		
		chart.plotArea = chart.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	}

	function createAxes() {

		// x axis	
		chart.xScale = d3.scale.linear()
			.domain([dataXRange.min, dataXRange.max])
			.range([0, chartWidth]);

		chart.xAxis = d3.svg.axis()
			.outerTickSize(0)
			.scale(chart.xScale)
			.orient('bottom');

		chart.xAxisContainer = chart.append("g")
			.attr("class", "x axis scatter-xaxis")
			.attr("transform", "translate(" + (margin.left) + ", " + (chartHeight + margin.top) + ")")
			.call(chart.xAxis);

		// x axis header label
		chart.append("text")
			.attr("class", "x axis scatter-xaxis")
			.style("font-size", "12px")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(" + (margin.left + chartWidth / 2.0) + ", " + (chartHeight + (margin.bottom / 2.0)) + ")")
			.text(xAxisLabelHeader);

		// y axis labels
		chart.yScale = d3.scale.linear()
			.domain([dataYRange.min, dataYRange.max])
			.range([chartHeight, 0]);
			
		chart.yAxis = d3.svg.axis()
			.orient('left')
			.scale(chart.yScale);
		
		chart.yAxisContainer = chart.append("g")
			.attr("class", "y axis scatter-yaxis")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
			.call(chart.yAxis);

		// y axis header label
		chart.append('text')
			.style("font-size", "12px")
			.attr("class", "heatmap-yaxis")
			.attr("text-anchor", "middle")
			.attr("transform", "translate(" + (margin.left / 2.0) + ", " + (chartHeight / 2.0) + ") rotate(-90)")
			.text(yAxisLabelHeader);
	}

	function drawDots() {
		// do something with the data here!
		
		// plot dots
		var dots = chart.plotArea.selectAll(".dot");
			/*.data(data)*/
             
			var circle = dots.data(data).enter().append("circle");
                
				circle.attr("class", "dot")
				.attr("cx", function(d) { return chart.xScale(d.xVal); })
				.attr("cy", function(d) { return chart.yScale(d.yVal); })
				.attr("r", circleRadius)
                .style("fill","blue")
           
				.on("mouseover", function(d) { circle.style("fill","red") ;} )
                .on("mouseout", function(d) { circle.style("fill","blue") ;} );
        
            var square = dots.data(data2).enter().append("rect");
                
				square.attr("class", "dot")
				.attr("x", function(d) { return chart.xScale(d.xVal); })
				.attr("y", function(d) { return chart.yScale(d.yVal); })
				.attr("width", squareDim)
                .attr("height", squareDim)
                .style("fill","green")
                
                .on("mouseover", function(d) { square.style("fill","red") ;} )
                .on("mouseout", function(d) { square.style("fill","green") ;} );
	   }
   function drawSquares() {
		// do something with the data here!
		
		// plot squares
		var sq = chart.plotArea.selectAll(".dot")
			.data(data2)
              .enter().append("rect")
                
				.attr("class", "dot")
				.attr("x", function(d) { return chart.xScale(d.xVal); })
				.attr("y", function(d) { return chart.yScale(d.yVal); })
				.attr("width", squareDim)
                .attr("height", squareDim)
                .style("fill","green");
			
				//.on("click", function(d) { console.log("circle: ", d.xVal, ", ", d.yVal);} );
	}