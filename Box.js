class Box{

    constructor(x1,y1,width1,height1){
        
        //this.width = 200;
        this.width = width1;
        
        //this.height = 70;
        this.height = height1

        //this.x = 100;
        //this.y = 100;
        
        var box_options ={
            isStatic: true
        }
    
        //this.body = Bodies.rectangle(200,300,200,70,box_options);
        this.body = Bodies.rectangle(x1,y1,width1,height1,box_options);
        World.add(world,this.body );

    }

    display(){
        var pos = this.body.position;

        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0,0, this.width,this.height);
        pop();
    }

}