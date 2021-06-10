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

//Car 1 functions start from here --->    

    keypressed = e.keyCode;
    console.log(keypressed);
    
    if(keypressed == '37'){

        car1_left();
        console.log("car1_left");
    }

    if(keypressed == '38'){

        car1_up();
        console.log("car1_up");
    }

    if(keypressed == '39'){

        car1_right();
        console.log("car1_right");
    }

    if(keypressed == '40'){

        car1_down();
        console.log("car1_down");
    }

//Car 2 functions start from here --->


    if(keypressed == '87'){

        car2_up();
        console.log("car2_up");
    }

    if(keypressed == '88'){

        car2_down();
        console.log("car2_down");
    }

    if(keypressed == '65'){

        car2_left();
        console.log("car2_left");
    }

    if(keypressed == '68'){

        car2_right();
        console.log("car2_right");
    }

}   

