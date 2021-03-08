'use strict';
let nameInput=0 ;
let modeInput=0 ;
let categoryInput=0 ;
let arrofprop = [];
let form =document.getElementById('form');
let list =document.getElementById('listcontainer');
let unlist=document.createElement('ul')
list.appendChild(unlist); 


function CarData(name , category,model){

    this.name=name;
    this.category=category;
    this.model=model;

    arrofprop.push(this);

}


CarData.prototype.getInput=function(){

let name1 = document.getElementById('name');
this.name = name1.value; 
nameInput = name1.value
let categoryName =document.getElementById('selectcategory');
this.category=categoryName.value ;
categoryInput = categoryName.value
let modelName =document.getElementById('selectmodel');
this.model=modelName.value ;
modeInput = modelName.value

saveData();
}




function render(){

    let li =document.createElement('li');
    unlist.appendChild(li);
    li.textContent=`The name of car : ${nameInput} , the ctegory : ${categoryInput} , The model of car ${modeInput}`;


}




form.addEventListener("submit" , showData);

function showData(event){

    event.preventDefault();
    let name =event.target.name.value;
    let category =event.target.name.value;
    let model =event.target.name.value;
    
    let cars = new CarData(name,category,model)
    cars.getInput();
       render ();
    
// form.removeEventListener("submit",showData)

}

function saveData(){

    let dataBase = JSON.stringify(arrofprop);
    localStorage.setItem('gettingdata', dataBase);

}

function getinfo(){

    let mahmoud = localStorage.getItem('gettingdata');
    let ahmad = JSON.parse(mahmoud) ;

    if(ahmad){
        arrofprop=ahmad ;
    }
    // render ();

}
getinfo();