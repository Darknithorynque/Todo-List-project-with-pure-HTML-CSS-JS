
//Element Ekleme

const button = document.querySelector(".input-group-append");
const items  = ["Todo 1","Todo 2","Todo 3","Todo 4","Todo 5","Todo 6"];





items.forEach(function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
        li.setAttribute("class","list-group-item list-group-item-secondary");




    var a = document.createElement("a");
     a.setAttribute("href","#");
     a.setAttribute("class","delete-item float-right");


    var i  = document.createElement("i");
        i.setAttribute("class","fas fa-times");


    a.appendChild(i);
    li.appendChild(a);
    li.appendChild(text);

    document.getElementById("task-list").appendChild(li);
  });







//console.log(createLi());



button.addEventListener("click",function(e)

{



    let newLi = document.createElement("li");
    let newA  = document.createElement("a");
    let newI  = document.createElement("i");
   
   newLi.setAttribute("class","list-group-item list-group-item-secondary");
   newLi.innerText=`${document.querySelector("#txtTaskName").value}`;

   document.querySelector("#txtTaskName").value="";
   e.preventDefault(); //sayfanın yenilenmesini önler
   
   newA.setAttribute("href","#");
   newA.setAttribute("class","delete-item float-right");
   
   newI.setAttribute("class","fas fa-times");
   
   newLi.appendChild(newA);
   newA.appendChild(newI);
   
   let position = document.getElementById("task-list");
   
   position.appendChild(newLi);


}

);


//Element Silme

// A- Tek tek silme

//"li" yerine "ul" kullanma sebebimiz li kullanımında birden fazla silme yapamamamız
const cross_icon = document.querySelector("ul");

cross_icon.addEventListener("click",function(b){

    if(b.target.className === "fas fa-times")
    { var control = confirm("silmek istediğinize emin misiniz ?");
       
    if(control==true){

        b.target.parentElement.parentElement.remove();

    }

    else console.log("no permission");

    }
});

// B- Delete All



const delete_all = document.querySelector("#btnDeleteAll");

delete_all.addEventListener("click",function(c){

if(c.target.className === "btn btn-outline-primary btn-sm delete-all float-right")

c.target.parentElement.nextElementSibling.remove();
});



//storage eleman ekleme


const add = document.querySelector("#btnAddNewTask");
const txt = document.querySelector("#txtTaskName");
const delete_storage = document.getElementById("btnDeleteAll");

add.addEventListener("click",addItem);


function addItem(e){

    sessionStorage.setItem(`key : ${txt.value}`,txt.value);
}


delete_storage.addEventListener("click",function(v){

 
    if(v.target.className == "btn btn-outline-primary btn-sm delete-all float-right") {

     sessionStorage.clear();
        

    }


    }


    
);



