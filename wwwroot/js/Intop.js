const { reload } = require("browser-sync");
var counter = 0;


function createAlert() {
    alert("Hello there");

}

function SetElement(id) {
    document.getElementById(id).innerText = "hello";

}


function GenerateBars(datatodisplay, labelstodisplay)
{
    var chcontainer = document.getElementById("chCon");
    chcontainer.style = " z-index: 1;  visibility:visible; Height : 80%; Width: 80%;";
  


    var element = document.getElementById("ftxt");
    element.innerText = ""
    var dtd = datatodisplay;
   
    var sel = document.getElementById('graphtype');
    sel.style = " z-index: 1;  visibility:visible;";

    var ctx = document.getElementById('testchart');
    
    
  

    new Chart(ctx, {
        type: sel.value,
        data: {
            labels: labelstodisplay, datasetElementType: null,
            datasets: [{
                label: 'Temp',
                data: datatodisplay,
                backgroundColor:[ 'rgba(255,99,132,0.2)', 'rgba(255,99,123,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)', 'rgba(0, 140, 255, 1)', 'rgba(0, 0, 255, 0.59)', 'rgba(255, 168, 106, 1)', 'rgba(255, 249, 106, 1)','rgba(20, 147, 0, 1)'],
                borderColor: ['rgba(255,99,123,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)',
                    'rgba(255,159,64,1)'],
                borderWidth: 1,
                pointStyle: "circle",
                
            }]

        },
        options:
        {
            responsive: true,
            scales:
            {
                yAxes:
                    [{
                        ticks:
                        {
                            beginAtZero: true
                        }   
                }]
                
            }
        }
    })

    console.log(datatodisplay);

}




function setChartNull() {
    //var getChart = document.getElementById("chart-container");
    //getChart.value = null;
    counter = counter + 1;

    if (counter >= 1)
    {
        alert("sup");
        var chcontainer = document.getElementById("chCon");
        chcontainer.style = " z-index: 1;  visibility:visible; Height : 80%; Width: 80%;";
        chcontainer.innerHTML = reload();
        chcontainer.innerText = "";

        var sel = document.getElementById('graphtype');
        sel.style = " z-index: 1;  visibility:visible;";
    }

   // console.log(counter);


    //getChart.type = "reset";
    //getChart.inputMode = "reset";
    //getChart.innerHTML = null;

    
    
}


function LogList(PolutionList)
{
    console.clear();
    console.log(PolutionList);
    console.log(PolutionList.data[0].co);
    console.log(PolutionList.country_code);
}



function DisplayCurrentData(PolutionList)
{
    var tagH = document.createElement("p");
    var text = document.createTextNode("City Name:" + PolutionList.city_name);
    tagH.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tagH);

    var tag = document.createElement("p");
    var text = document.createTextNode("timezone:" + PolutionList.data[0].timezone);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("CO:" + PolutionList.data[0].co);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("o3:" + PolutionList.data[0].o3);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("predominant_pollen_type:" + PolutionList.data[0].predominant_pollen_type);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("so2:" + PolutionList.data[0].so2);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("pollen_level_tree:" + PolutionList.data[0].pollen_level_tree);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("pollen_level_weed:" + PolutionList.data[0].pollen_level_weed);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("no2:" + PolutionList.data[0].no2);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("pm25:" + PolutionList.data[0].pm25);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var tag = document.createElement("p");
    var text = document.createTextNode("pollen_level_grass:" + PolutionList.data[0].pollen_level_grass);
    tag.appendChild(text);
    var element = document.getElementById("ftxt");
    element.appendChild(tag);

    var element = document.getElementById("bd");
    element.style = " overflow:visible; align-items:center; max - height: 80 %; max - width: 80 %;";

    var sel = document.getElementById('graphtype');
    sel.style = " z-index: -1;  visibility:hidden;";
    var chcontainer = document.getElementById("chCon");
    chcontainer.style = " z-index: -1;  visibility:hidden; Height : 0%; Width: 0%;";


    LogList(PolutionList);


}

function mylog(jsonObj)
{
    console.clear();
    fetch('Export_DataFrame.json').then(results => results.json()).then(console.log);

    console.log(jsonObj);

}


function ErrorMessageDB_Connection()
{
    alert("Error no Database Connection");

}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// DARK MODE Functions And Variables


//function ChangeTheme() {
//    const btn = document.querySelector(".btn-toggle");

//    const currentTheme = localStorage.getItem("theme");
//    if (currentTheme == "dark") {
//        document.body.classList.add("dark-theme");
//    }

//    btn.addEventListener("click", function () {
//        document.body.classList.toggle("dark-theme");

//        let theme = "light";
//        if (document.body.classList.contains("dark-theme")) {
//            theme = "dark";
//        }
//        localStorage.setItem("theme", theme);
//    });



//}





//const moonPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
//const sunPath = "M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 33.991 9.89 26.93 20.209 26.93 27.5 C 26.93 34.791 33.689 45.261 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z";
//const darkMode = document.querySelector("#dark_mode");
//let toggle = false;
////클릭


//const rootElement = document.documentElement;
//const rootElement = document.getElementById("hdrk");
//rootElement.onclick = darkModeListen();

//function darkModeListen() {
//    console.clear();

//    rootElement.style = "background: black";
//    rootElement.style = "background: black";

//    console.log(rootElement.style ="background: black")
//    //anime.js
//    //여기에 타임라인을 더한다
//    const timeline = anime.timeline({
//        duration: 750,
//        easing: "easeOutExpo"
//    });
//    //add 다르 애니메이션 타임라인에
//    timeline
//        .add({
//            targets: ".moon",
//            d: [{ value: toggle ? moonPath : sunPath }] //moonPath ->sunpath
//        })
//        .add({
//            targets: darkMode,
//            rotate: toggle ? 0 : 320
//        }, "-=350")
//        .add({
//            targets: "section",
//            backgroundColor: toggle ? 'rgba(255,255,255)' : 'rgba(22,22,22)',
//            color: toggle ? 'rgba(22,22,22)' : 'rgba(255,255,255)'
//        }, "-=700");

//    if (!toggle) {
//        toggle = true;
//        $("h1").text("darkmode")
//    } else {
//        toggle = false;
//        $("h1").text("lightmode")
//    }

//};


//function Dark()
//{
//    var btn = document.getElementsByClassName("Theme");
//    btn.backgroundColor = "#27272f";
    

//}



