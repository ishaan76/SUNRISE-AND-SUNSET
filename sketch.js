const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    // write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    // write code slice the datetime
 var hour = daytime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sprites/sunrise1.png";
    }else if(hour>=06 && hour<=08){
        bg = "sprites/sunrise2.png";
    }else if(hour>=08 && hour<=09){
        bg = "sprites/sunrise3.png"
    }else if(hour>=09 && hour<=12){
        bg = "sprites/sunrise4.png";
    }else if(hour>=12 && hour<=15){
        bg = "sprites/sunrise5.png"
    }else if(hour>=15 && hour<=17){
        bg = "sprites/sunrise6.png";
    }else if(hour>=17 && hour<=18){
        bg = "sprites/sunset7.png"
    }else if(hour>=18 && hour<=20){
        bg = "sprites/sunset8.png";
    }else if(hour>=20 && hour<=21){
        bg = "sprites/sunrise10.png"
    }else if(hour>=21 && hour<=24){
        bg = "sprites/sunset11.png";
    }else if(hour>=24 && hour<=06){
        bg = "sprites/sunset12.png"
    }   


    //load the image in backgroundImg variable here
 backgroundImg = loadImage(bg);
}
