canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_w = 120;
car1_h = 70;
car1_image = "car1.png"
car1_x = 10;
car1_y = 10;


car2_w = 120;
car2_h = 70;
car2_image = "car2.png"
car2_x = 10;
car2_y = 100;


bg_img = "C_back_img.jpg";
car1_img = "car1.png";
car2_img = "car2.png";


function add(){

    bg_image = new Image();
    bg_image.onload = upload_bg;
    bg_image.src = bg_img;

    car1_image = new Image();
    car1_image.onload = upload_car1;
    car1_image.src = car1_img;

    car2_image = new Image();
    car2_image.onload = upload_car2;
    car2_image.src = car2_img;
}

function upload_bg(){

    ctx.drawImage(bg_image, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){

    ctx.drawImage(car1_image, car1_x, car1_y, car1_w, car1_h);
}

function upload_car2(){

    ctx.drawImage(car2_image, car2_x, car2_y, car2_w, car2_h);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keypressed = e.keyCode;
    console.log(keypressed);
    
    if(keypressed == '37'){

        left();
        console.log("left");
    }

    if(keypressed == '38'){

        up();
        console.log("up");
    }

    if(keypressed == '39'){

        right();
        console.log("right");
    }

    if(keypressed == '40'){

        down();
        console.log("down");
    }

}   