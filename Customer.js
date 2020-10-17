class Customer{
    constructor(a){
        this.sprite = createSprite(displayWidth-50, displayHeight/2, 50, 50);
        this.customerStanding = loadAnimation("customer/"+a+"/standing.png");
        this.customerSitting = loadAnimation("customer/"+a+"/sitting.png");
        this.customerSittingMir = loadAnimation("customer/"+a+"/sitting mirrored.png");
        this.a = a;
        this.flag = false;
        this.foodServed = false;

        this.sprite.addAnimation("waiting", this.customerStanding);
        this.sprite.addAnimation("sitting", this.customerSitting);
        this.sprite.addAnimation("sittingMir", this.customerSittingMir);
        if (a>=4 && a<=6){
            this.sprite.scale = 1;
        }
        else{
            this.sprite.scale = 2;
        }
        
    }

    display(){

    }
}
