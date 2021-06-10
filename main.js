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

//Car 1 events start from here --->

function car1_up(){

    if(car1_y >= 0){

    car1_y = car1_y - 10;
    console.log("When Up arrow is pressed x = " + car1_x + "and y = " + car1_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}

function car1_down(){

    if(car1_y <= 520){

    car1_y = car1_y + 10;
    console.log("When Down arrow is pressed x = " + car1_x + "and y = " + car1_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}

function car1_left(){

    if(car1_x >= 0){

    car1_x = car1_x - 10;
    console.log("When Up arrow is pressed x = " + car1_x + "and y = " + car1_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}

function car1_right(){

    if(car1_x <= 675){

    car1_x = car1_x + 10;
    console.log("When Right arrow is pressed x = " + car1_x + "and y = " + car1_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}



//Car 2 events start from here --->

function car2_up(){

    if(car2_y >= 0){

    car2_y = car2_y - 10;
    console.log("When Up arrow is pressed x = " + car2_x + "and y = " + car2_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}

function car2_down(){

    if(car2_y <= 520){

    car2_y = car2_y + 10;
    console.log("When Down arrow is pressed x = " + car2_x + "and y = " + car2_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}

function car2_left(){

    if(car2_x >= 0){

    car2_x = car2_x - 10;
    console.log("When Up arrow is pressed x = " + car2_x + "and y = " + car2_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}

function car2_right(){

    if(car2_x <= 675){

    car2_x = car2_x + 10;
    console.log("When Right arrow is pressed x = " + car2_x + "and y = " + car2_y);

    upload_bg();
    upload_car1();
    upload_car2();
    }
}