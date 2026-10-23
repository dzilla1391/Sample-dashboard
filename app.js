function showScreen(id){

    document
        .querySelectorAll(".screen")
        .forEach(screen=>{
            screen.classList.remove("active");
        });

    document
        .getElementById(id)
        .classList.add("active");
}

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

function searchTables(){

    let filter =
    document.getElementById("searchBox")
    .value
    .toUpperCase();

    let rows =
    document.querySelectorAll("table tr");

    rows.forEach((row,index)=>{

        if(index===0) return;

        if(
            row.innerText
            .toUpperCase()
            .includes(filter)
        ){
            row.style.display="";
        }else{
            row.style.display="none";
        }
    });
}

let issues =
JSON.parse(
localStorage.getItem("issues")
)
||
[
    "Piping Spool Delay",
    "HVAC Clarification",
    "Electrical Manpower"
];

function renderIssues(){

    let html="";

    issues.forEach(issue=>{

        html += `
        <div class="issue-row">
            ${issue}
        </div>
        `;
    });

    document.getElementById("issueList").innerHTML = html;
}

function addIssue(){

    const input =
    document.getElementById("issueInput");

    if(input.value==="") return;

    issues.push(input.value);

    localStorage.setItem(
        "issues",
        JSON.stringify(issues)
    );

    input.value="";

    renderIssues();
}

renderIssues();

window.onload = function(){

    new Chart(
        document.getElementById("overallChart"),
        {
            type:"doughnut",
            data:{
                labels:["Completed","Remaining"],
                datasets:[{
                    data:[78,22]
                }]
            }
        }
    );

    new Chart(
        document.getElementById("disciplineChart"),
        {
            type:"bar",
            data:{
                labels:[
                    "Structure",
                    "Piping",
                    "Architecture",
                    "HVAC",
                    "Electrical"
                ],
                datasets:[{
                    label:"Progress %",
                    data:[
                        93,
                        87,
                        78,
                        71,
                        63
                    ]
                }]
            }
        }
    );

};
