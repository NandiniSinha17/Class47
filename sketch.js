var cust, custSitting, custSittingMir;
var bg, bground;
var chairX, chairY, custCount = 0;
var customerArr = [];
var chair1, chair2, chair3, chair4;
var table1, table2, table3, table4, table5, table6, table7;
var customerPos = [];
var index = null;
function preload(){

  cust = loadAnimation("customer/1/standing.png");
  custSitting = loadAnimation("customer/1/sitting.png");
  custSittingMir = loadAnimation("customer/1/sitting mirrored.png");

  cust2 = loadAnimation("customer/2/standing.png");
  custSitting2 = loadAnimation("customer/2/sitting.png");
  custSittingMir2 = loadAnimation("customer/2/sitting mirrored.png");

  cust3 = loadAnimation("customer/3/standing.png");
  custSitting3 = loadAnimation("customer/3/sitting.png");
  custSittingMir3 = loadAnimation("customer/3/sitting mirrored.png");

  cust4 = loadAnimation("customer/4/standing.png");
  custSitting4 = loadAnimation("customer/4/sitting.png");
  custSittingMir4 = loadAnimation("customer/4/sitting mirrored.png");

  cust5 = loadAnimation("customer/5/standing.png");
  custSitting5 = loadAnimation("customer/5/sitting.png");
  custSittingMir5 = loadAnimation("customer/5/sitting mirrored.png");

  cust6 = loadAnimation("customer/6/standing.png");
  custSitting6 = loadAnimation("customer/6/sitting.png");
  custSittingMir6 = loadAnimation("customer/6/sitting mirrored.png");

  bg = loadImage("Restaurant.jpg");
  menu = loadImage("menu.png");

}

function setup() {
  createCanvas(displayWidth-50, displayHeight-70);
  generateCustomer();

  
  card = createSprite(980, 160, 20, 20);
  card.addImage("menu", menu);
  card.scale = 0.5;
  card.depth = 0;
  setInterval (function() {generateCustomer()}, 15000);

}

function draw() {
  background(bg);



  for(var i = 0; i < custCount; i++){
    if(mousePressedOver(customerArr[i].sprite) && customerArr[i].flag === false){
      customerArr[i].sprite.debug = true;
      customer = customerArr[i];
      index = i;
    }
  }

  drawSprites();
}

function mouseClicked(){
  for(var i = 0; i < custCount; i++){

  }
  if (customer.sprite.debug === true){
    var x = mouseX;
    var y = mouseY;
    customer.sprite.x = x;
    customer.sprite.y = y;

    //console.log(customer.sprite.x+"  "+customer.sprite.y);
  
  //tabletop chair no 2 from left
  if(x >= 200 && x <= 250 && y >= 360 && y <= 470 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 222;
    customer.sprite.y = 340; 
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 200 && x <= 250 && y >= 360 && y <= 470 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 225;
    customer.sprite.y = 350; 
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }
  //tabletop chair no 1 from left
  if(x >= 90 && x <= 140 && y >= 360 && y <= 470 && customer.a >= 1 && customer.a <=3){
    customer.sprite.x = 100;
    customer.sprite.y = 340;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 90 && x <= 140 && y >= 360 && y <= 470 && customer.a >= 4 && customer.a <=6){
    customer.sprite.x = 100;
    customer.sprite.y = 350;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  //no 3 tabletop chair from left
  if(x >= 360 && x <= 290 && y >= 360 && y <= 470 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 315;
    customer.sprite.y = 340;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 360 && x <= 290 && y >= 360 && y <= 470 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 315;
    customer.sprite.y = 350;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  //no 4 tabletop chair from left

  if(x >= 400 && x <= 480 && y >= 360 && y <= 470 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 420;
    customer.sprite.y = 340;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 400 && x <= 480 && y >= 360 && y <= 470 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 420;
    customer.sprite.y = 350;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  //no 5 tabletop chair from left

  if(x >= 820 && x <= 890 && y >= 360 && y <= 470 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 850;
    customer.sprite.y = 340;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 820 && x <= 890 && y >= 360 && y <= 470 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 850;
    customer.sprite.y = 350;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  //no 6 tabletop chair from left

  if(x >= 920 && x <= 990 && y >= 360 && y <= 470 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 950;
    customer.sprite.y = 340;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 920 && x <= 990 && y >= 360 && y <= 470 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 950;
    customer.sprite.y = 350;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  //no 7 tabletop chair from left
  if(x >= 1030 && x <= 1100 && y >= 360 && y <= 470 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 1060;
    customer.sprite.y = 340;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 1030 && x <= 1100 && y >= 360 && y <= 470 && customer.a >= 5 && customer.a <= 6){
    customer.sprite.x = 1060;
    customer.sprite.y = 350;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  //no 1 comfy chair from left
  if(x <= 300 && x >= 165 && y <= 490 && y >= 415 && customer.a >= 1 && customer.a <=3){
    customer.sprite.x = 280;
    customer.sprite.y = 490;
    customer.sprite.changeAnimation("sitting", customer.customerSitting);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x <= 300 && x >= 165 && y <= 490 && y >= 415 && customer.a >= 4 && customer.a <=6){
    customer.sprite.x = 280;
    customer.sprite.y = 500;
    customer.sprite.changeAnimation("sitting", customer.customerSitting);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }
  //no 3 comfy chair from left
  if(x >= 750 && x <= 880 && y <= 490 && y >= 415 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 860;
    customer.sprite.y = 490;
    customer.sprite.changeAnimation("sitting", customer.customerSitting);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x >= 750 && x <= 880 && y <= 490 && y >= 415 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 860;
    customer.sprite.y = 500;
    customer.sprite.changeAnimation("sitting", customer.customerSitting);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }
  
  //no 2 comfy chair from left
  if(x <= 590 && x >= 455 && y <= 490 && y >= 415 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 490;
    customer.sprite.y = 490;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  if(x <= 590 && x >= 455 && y <= 490 && y >= 415 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 490;
    customer.sprite.y = 500;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

  //comfy chair no 4 from left
  if (x >= 1040 && x <= 1170 && y <= 490 && y >= 415 && customer.a >= 1 && customer.a <= 3){
    customer.sprite.x = 1060;
    customer.sprite.y = 490;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }
  
  if (x >= 1040 && x <= 1170 && y <= 490 && y >= 415 && customer.a >= 4 && customer.a <= 6){
    customer.sprite.x = 1060;
    customer.sprite.y = 500;
    customer.sprite.changeAnimation("sittingMir", customer.customerSittingMir);
    customer.sprite.debug = false;
    customer.flag = true;

    var pos = [customer.sprite.x, customer.sprite.y];
    customerPos[index]=pos;
  }

 }  
}

function generateCustomer(){
  if(custCount <= 5){
    customerArr[custCount] = new Customer(Math.round(random(1, 6)));
    custCount++;
  }
  console.log(customerPos);

}