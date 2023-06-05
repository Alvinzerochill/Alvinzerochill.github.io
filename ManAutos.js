

/*const cars = ["mercedes", "honda", "mitsubishi", "Toyota"];
document.getElementById("car").innerHTML = cars[3];

//functions and methods


//method example
const mercedes = {
                    year:"2023",
                    model:"S-Class",
                    color:"Black",
                    country:"Germany",
                    fullProperties:function(){
                return this.year + "," + this.model + "," + this.color + "," + this.country;
    }
};
document.getElementById("Food").innerHTML = mercedes.fullProperties();


//function example
x = 5;
y = 6;
z = alvin(5,6);
document.getElementById("indomie").innerHTML = z;
function alvin(x,y){
    return x + y;
}*/

/*const sport = ["Football", "Basket Ball", "Rugby", "Ice Hockey"];
document.getElementById("car").innerHTML = sport[3];

const tool = {  sport:"Football",
                entertainment:"Music",
                school:"creative360",
                email:  "alvinjike9@gmail.com"};
document.getElementById("love").innerHTML = tool["email"];


var a,b,c,z;

a = 15;
b = 20;
c = 15;
z = story(a,b,c)

document.getElementById("food").innerHTML = z;

function story(a, b, c){
    return (a + b + c)
};


var y, h, b, z;

y=30
h=40
b=10
z=family(y,h,b)

document.getElementById('meme').innerHTML = z
function family(y,h,b){
    return (y + h * b)
}*/

/*const calvin = {
        phone:"Samsung",
        school:"UniLag",
        sport:  "Soccer",
        country:"Nigeria",
        allPackages: function(){
            return this.phone +" "+ this.school +" "+ this.sport +" "+ this.country}
                    };
document.getElementById('meme').innerHTML = calvin.allPackages();



const joseph = {
    name:"Ikenna",
    club:"Arsenal",
    position:"Left-Back",
    status:"Single",
    fullPackages: function(){
        return this.name + " " + this.club + " " + this.position + " " + this.status}
};
document.getElementById('laptop').innerHTML = joseph.fullPackages();



const channel = ["Supersport","MTVBase","Trace","SoundCity"]
document.getElementById('corn').innerHTML = channel[0] + " " + channel[1] + " " + channel[2] + " " + channel[3];*/


function load(){
var favor = document.getElementById("today")
if(favor.innerHTML==="Today Is Wednesday"){
document.getElementById("today").innerHTML = "Today is the 31st of May 2023"}
else{
    document.getElementById("today").innerHTML = "Today Is Wednesday"
}
};