var htm ='';
let arr = ['active', 'recovered', 'deaths', 'todayCases', 'todayRecovered', 'todayDeaths'];
$.ajax({
    url:'https://disease.sh/v3/covid-19/all/',
    success:function(result){
        for(i=0 ; i<=5; i++){
            htm += `<div class="box box${i}">`;
            htm += `<h1 class="heading">${arr[i]}</h1>`
            htm += '<span>'
            htm += result[arr[i]]
            htm += '</span>'
            htm += '</div>'
        }
    }
})
const timer = setInterval(function(){
        if(htm.length > 0){
            $('.total-records').append(htm);
            clearInterval(timer);
        }
},1000)

//For Right Side 
const statesDropDown = document.getElementById('statesDropDown');
const stateRecords = document.getElementById('state-records');
var htm1='';
let output ='';
$.ajax({
    url:'https://data.covid19india.org/v4/min/data.min.json',
    success:function(Statesdata){
        console.log(Statesdata);
        for(let key in Statesdata){
            let option = document.createElement('option');
            option.setAttribute('value', key);
            let optionText = document.createTextNode(key);
            option.appendChild(optionText);
            statesDropDown.appendChild(option);
        }
        $('select option:nth-child(2)').attr("selected", "selected");
        const firstkey = $('select option[selected="selected"]').val();
        const firstdata = Statesdata[firstkey].total;
        for (const y in firstdata) {
            output += '<div class="box">';
            output += `<h1 class="heading">${y}</h1>`
            output += `<span>${firstdata[y]}</span>`
            output += '</div>'  
        }
        $('#state-records').append(output);
        statesDropDown.addEventListener("change", e=>{
            output = '';
            $('#state-records').text("");
            let newdata = Statesdata[e.target.value].total;
            for(let x in newdata){
                        output += '<div class="box">';
                        output += `<h1 class="heading">${x}</h1>`
                        output += `<span>${newdata[x]}</span>`
                        output += '</div>'         
            }
            $('#state-records').append(output);
        })


    }
})

