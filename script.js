setTimeout(()=>{
document.getElementById("splash").classList.add("hidden");
document.getElementById("app").classList.remove("hidden");
},2000);

document.getElementById("compareBtn").onclick=()=>{
const map=document.getElementById("map");
document.getElementById("loading").classList.remove("hidden");

map.style.transition="transform 3s ease";
map.style.transform="rotate(6deg) scale(1.05)";

setTimeout(()=>{
document.getElementById("loading").classList.add("hidden");
document.getElementById("mapSection").classList.add("hidden");
document.getElementById("results").classList.remove("hidden");
},3500);
};
