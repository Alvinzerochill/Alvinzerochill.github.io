/*document.getElementById('king').innerHTML = "I am preparing to learn React."


document.getElementById('queen').innerHTML = "The 29th Of May Is Reserved For The Searing In Of The President Elect"


let ovie = "Today is the 17th day of may 2023"
document.write(ovie);

window.alert("This is for pop-up notification")

console.log("It's a beautiful day, we're looking for something nice to do")



function ahmedMusa(){
    
    console.log("The U.S Emabassy awaits my arrival")
    console.log("Edet Lives In Calabar")  
    irene.innerText="The British Emabassy awaits my arrival and i'll honor their invite."
};
let irene = doucument.getElementById("patron").innerText;*/

/*count = 0;

function addition(){
    count = count + 1;
    document.getElementById('count').innerText = count;
}

function minus(){
    count--;
    document.getElementById('count').innerText = count;
}

function refresh(){
    count = 0;
    document.getElementById('count').innerText = count;
}

//let Mando = "The rain in SPAIN falls in plain"
//document.getElementById("king").innerText = Mando.slice(8,18) 


let x, y, z, d

x=10
y=15
z=20
d = x + y + z
document.getElementById("king").innerHTML = d;
function Mando(){
    return x + y + z
}


message = "This is a message";
alert(message);
*/

function listen(){
    ejike = document.getElementById("name")
    if (ejike.innerHTML === "My name is Mr Igbala Alvin"){
        document.getElementById("name").innerHTML = "I have lived over two decades in Lagos."
    }else if(ejike.innerHTML === "I have lived over two decades in Lagos." ){
        document.getElementById("name").innerHTML = "Born and brought up in the city of Lagos."
    }
    
    else {
        document.getElementById("name").innerHTML = "My name is Mr Igbala Alvin"
    }  
};

function change(){
    var disc = document.getElementById("bible")
    if(disc.innerHTML === "The Bible says thou shall not hold false grudges against one another."){
        document.getElementById("bible").innerHTML = "Read your Bible daily."
    }else{
    document.getElementById("bible").innerHTML = "The Bible says thou shall not hold false grudges against one another."
}
}

function note(){
    nigeria = document.getElementById("president")
    if(nigeria.innerHTML === "Nnamdi Azikiwe was the 1st president of Nigeria"){
        nigeria.innerHTML = "Shehu Shagari was the 2nd president of Nigeria"
    }
    else if(nigeria.innerHTML === "Shehu Shagari was the 2nd president of Nigeria"){
        nigeria.innerHTML = "Olusegun Obasanjo was the 3rd president of Nigeria"
    }
    else if(nigeria.innerHTML === "Olusegun Obasanjo was the 3rd president of Nigeria"){
        nigeria.innerHTML = "Umar Musa Yar' Adua was the 4th president of Nigeria"
    }
    else if(nigeria.innerHTML === "Umar Musa Yar' Adua was the 4th president of Nigeria"){
        nigeria.innerHTML = "Goodluck Ebele Jonathan was the 5th president of Nigeria"
    }
    else if(nigeria.innerHTML === "Goodluck Ebele Jonathan was the 5th president of Nigeria"){
        nigeria.innerHTML = "Muhamadu Buhari was the 6th president of Nigeria"
    }
    else if(nigeria.innerHTML === "Muhamadu Buhari was the 6th president of Nigeria"){
        nigeria.innerHTML = "Asiwaju Bola Ahmed Tinubu is the 7th president of Nigeria" 
    }
    else {
        nigeria.innerHTML = "Nnamdi Azikiwe was the 1st president of Nigeria"  
    }
};


