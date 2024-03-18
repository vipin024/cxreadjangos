function getChartColorsArray(r){r=$(r).attr("data-colors");return(r=JSON.parse(r)).map(function(r){r=r.replace(" ","");return-1==r.indexOf("--")?r:getComputedStyle(document.documentElement).getPropertyValue(r)||void 0})}!function(d){"use strict";function r(){}r.prototype.respChart=function(r,t,a,e){Chart.defaults.global.defaultFontColor="#858d98",Chart.defaults.scale.gridLines.color="rgba(133, 141, 152, 0.1)";var o=r.get(0).getContext("2d"),n=d(r).parent();function s(){r.attr("width",d(n).width());switch(t){case"Line":new Chart(o,{type:"line",data:a,options:e});break;case"Doughnut":new Chart(o,{type:"doughnut",data:a,options:e});break;case"Pie":new Chart(o,{type:"pie",data:a,options:e});break;case"Bar":new Chart(o,{type:"bar",data:a,options:e});break;case"Radar":new Chart(o,{type:"radar",data:a,options:e});break;case"PolarArea":new Chart(o,{data:a,type:"polarArea",options:e})}}d(window).resize(s),s()},r.prototype.init=function(){var r=getChartColorsArray("#bar"),r={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Sales Analytics",backgroundColor:r[0],borderColor:r[0],borderWidth:0,hoverBackgroundColor:r[0],hoverBorderColor:r[0],data:[65,59,81,45,56,80,50,20]}]},r=(this.respChart(d("#bar"),"Bar",r,{scales:{xAxes:[{barPercentage:.2}]}}),getChartColorsArray("#doughnut")),r={labels:["Desktops","Tablets"],datasets:[{data:[350,150],backgroundColor:r,hoverBackgroundColor:r,hoverBorderColor:"#fff"}]};this.respChart(d("#doughnut"),"Doughnut",r)},d.ChartJs=new r,d.ChartJs.Constructor=r}(window.jQuery),function(){"use strict";window.jQuery.ChartJs.init()}();