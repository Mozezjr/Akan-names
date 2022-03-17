// let userData=document.getElementById("form")
// userData.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     generateAkanName();
// })
let maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function generateAkanName(){event.preventDefault();

    let day =document.getElementById("day").value;
    let month= document.getElementById("month").value;
    let date =document.getElementById("year").value;
    let YY =date.substring(2);
    let CC =date.substring(0,2);
    let gender =document.getElementById("gender");
    let d = Math.floor ( ((CC/4) -2*CC-1) + ((5*YY/4) ) + (((26*(month+1)/10)) + day ) % 7);
      
     if(day <= 0 || day >31){
        alert("invalid day!")
    }
    else if((month<= 0) || (month > 12) ){
        alert("Invalid month")
    }
     

     if(gender == "Female"){
        document.getElementById("Female").innerHTML ="Your name is " + maleNames[d]
    }
    else if (gender == "Male"){
        document.getElementById("Male").innerHTML ="Your name is " + femaleNames[d]
    }
    
}

