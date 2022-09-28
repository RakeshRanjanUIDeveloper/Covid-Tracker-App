        // Top 5 Most Confirmed State
        window.onload = function () {
            let dataPoints = [];
            $.ajax({
                url:'https://data.covid19india.org/v4/min/data.min.json',
                success:function(Statesdata){
                    const newArray = [];
                    for(let z in Statesdata){
                        const confirmedData = Statesdata[z].total.confirmed;
                        const newObject={
                            label : z,
                            y:confirmedData
                        }
                        newArray.push(newObject)
                    }
                    const sortedArray = [newArray.sort(({y:a}, {y:b}) => b-a)];
                    let newdata = [];
                    for(let x in sortedArray[0]){
                        newdata.push(sortedArray[0][x]);
                    }
                    dataPoints = newdata.slice(1, 6);
                    console.log(dataPoints);
                }
            })
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                title:{
                    text: ""
                },
                axislabel: {
                    title: "Reserves(MMbbl)"
                },
                data: [{        
                    type: "column",  
                    showInLegend: true, 
                    legendMarkerColor: "grey",
                    legendText: "TT:Tamilnadu, MH:Maharastra, KL:Kerala, KA:Karnataka, AP:AndraPradesh",
                    dataPoints: [
                        {
                            label: "MH",
                            y: 6611078
                        },
                        {
                            label: "KL",
                            y: 4968657
                        },
                        {
                            label: "KA",
                            y: 2988333
                        },
                        {
                            label: "TN",
                            y: 2702623
                        },
                        {
                            label: 'AP', 
                            y: 2066450
                        }
                    ]
                    // dataPoints : dataPoints
                }]
            });
            chart.render();
            }