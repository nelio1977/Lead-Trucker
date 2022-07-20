
const inputEl= document.getElementById("inputEl")
const btnEl= document.getElementById("btnEl")
const tabEl= document.getElementById("tabEl")
const ulEl= document.getElementById("ulEl")
const delBtn= document.getElementById("del")
let myLeads= []

const leadsFromStorage= JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromStorage) {
    myLeads= leadsFromStorage
    render()
}

function render() {
    let list= "";
   myLeads.forEach(leads => {
        list += `<li><a target="_blank" href="${leads}">${leads}</a></li>`;
   }) 
   ulEl.innerHTML= list;
}
  
delBtn.addEventListener("click", ()=> {
    localStorage.clear()
     myLeads= [];
    render()

})

tabEl.addEventListener("click", ()=> {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
     localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()
  });
})





