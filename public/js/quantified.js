// Initialize a Line chart in the container with the ID chart1
//$.getJSON("../../data.json", function(json) {
//    console.log(json); // this will show the info it in firebug console
//});


$.getJSON("data.json", function(fillups){
    var dateList = [];
    var priceList = [];
    var mpgList = [];
    for (var i = 0; i < fillups.fillups.length; i++) {
        dateList.push(fillups.fillups[i].date);
        priceList.push(fillups.fillups[i].price / fillups.fillups[i].amount);
        mpgList.push(fillups.fillups[i].miles / fillups.fillups[i].amount);
    }

    console.log(fillups.fillups[0].date);
    new Chartist.Line('#chart1', {
        labels: dateList,
        series: [priceList]
    });

    // Initialize a Line chart in the container with the ID chart2
    new Chartist.Line('#chart2', {
        labels: dateList,
        series: [mpgList]
    });

});


