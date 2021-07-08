canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);


    if((keyPressed >=97 && keyPressed <=122) || (keyPressed >=65 && keyPressed <=90)){
        alphabetkey();
        document.getElementById("p1").innerHTML= "You Pressed The Alphabet Key";
        console.log("alphabet key");
    }
    function alphabetkey(){
        img_image= "Alpkey.png"
        add();
    }


    if(keyPressed >=48 && keyPressed <=57){
        numberkey();
        document.getElementById("p1").innerHTML= "You Pressed The Number Key";
        console.log("number key");
    }
    function numberkey(){
        img_image= "numkey.png";
        add();
    }


    if(keyPressed >=37 && keyPressed <=40){
        arrowkey();
        document.getElementById("p1").innerHTML= "You Pressed The Arrow Key";
        console.log("arrow key");
    }
    function arrowkey(){
        img_image= "Arrkey.png";
        add();
    }


    if((keyPressed= 17)(keyPressed= 18)(keyPressed= 27)){
        specialkey();
        document.getElementById("p1").innerHTML= "You Pressed The Special Key";
        console.log("special key");
    }
    function specialkey(){
        img_image= "spkey.png";
        add();
    }


    if(keyPressed= Symbol){
        otherkey();
        document.getElementById("p1").innerHTML= "You Pressed The Other/Symbol Key";
        console.log("other key");
    }
    function otherkey(){
        img_image= "otherkey.png"
        add();
    }



    function add(){
        key_imgTag= img_image;
        ctx.drawImage(key_imgTag, 400, 300, 400, 300)
    }
}