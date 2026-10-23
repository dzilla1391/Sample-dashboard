const chart = new Chart(
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

label:"Progress",

data:[
93,
87,
78,
71,
63
],

backgroundColor:[
"#4caf50",
"#2196f3",
"#ff9800",
"#9c27b0",
"#f44336"
]

}]

}

}
);

const issues =
JSON.parse(
localStorage.getItem("issues")
) || [
"Piping Spool Delay",
"HVAC Clarification",
"Electrical Manpower"
];

function renderIssues(){

const list=
document.getElementById("issueList");

list.innerHTML="";

issues.forEach(issue=>{

const li=
document.createElement("li");

li.innerHTML=issue;

list.appendChild(li);

});

}

renderIssues();

function addIssue(){

const input =
document.getElementById("issueInput");

if(input.value===""){
return;
}

issues.push(input.value);

localStorage.setItem(
"issues",
JSON.stringify(issues)
);

input.value="";

renderIssues();

}

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

function showDashboard(){

window.scrollTo({
top:0,
behavior:"smooth"
});

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

let txt = row.innerText;

if(txt.toUpperCase().includes(filter)){

row.style.display = "";

}else{

row.style.display = "none";

}

});

}

new Chart(
document.getElementById("overallChart"),
{
type:"doughnut",

data:{
labels:[
"Completed",
"Remaining"
],

datasets:[{

data:[
78,
22
],

backgroundColor:[
"#4CAF50",
"#DDDDDD"
]

}]
}

}
);
