enchant();

window.onload = function() {
    game = new Core(2000, 1000);
    game.preload('arbitro3.png', 'jugador44.png','jugador7.png','like.png','arquero.png','arquero222.png');
    
    game.onload = function() {

    background=new Sprite(1796,1002);
    background.x=95;
    background.y=10;
    //background.scaleX=2; 
    // background.scaleY=2;
    background.image=game.assets['like.png']

     bear = new Bear(700,600);
      game.fps = 30; //inicializa mi jugador

      arquero = new Arquero();
        // select sprite frame
       arquero.tl.moveBy(0,150, 90)   // move right
            .scaleTo(1, 1, 10)      // turn left
            .moveBy(0, -150, 90)     // move left
            .scaleTo(1, 1, 10)       // turn right
            .loop();

        arquero2 = new Arquero2();
        // select sprite frame
       arquero2.tl.moveBy(0,100, 90)   // move right
            .scaleTo(-1, 1, 10)      // turn left
            .moveBy(0, -100, 90)     // move left
            .scaleTo(-1, 1, 10)       // turn right
            .loop() 

      
        for (i = 0; i <5; i++) {
            fruits = new Rojo(40); 
            }

        for (i = 0; i <4; i++) {
            barca = new Barcelona(15); 
            }

        score = 0; 
        game.rootScene.addEventListener('touchend', function(event) { 

            if(215<event.x && event.x<1740){
                bear.tx = event.x; 
                if (event.x<bear.x) {
                    bear.scaleX=-1;
                }
                else{ bear.scaleX=+1;}
            } 
            else{
                bear.tx = bear.tx;    
            }

            if (145<event.y && event.y<825) {
                bear.ty = event.y; 
            }
            
        });
 }

 Bear = Class.create(Sprite,
   {
    initialize: function(x, y) { 
        Sprite.call(this,30, 50); 
        this.image = game.assets['arbitro3.png'];
        this.x =600;
        this.y =500;

        this.tx = this.x; 
        this.ty = this.y; 
        this.frame = 0;
        game.rootScene.addChild(background);
        game.rootScene.addChild(this);
    },
    onenterframe: function() {
        slow = 90; 
        this.x += (this.tx - this.x) / slow;
        this.y += (this.ty - this.y) / slow;

    }
});

 Barcelona = Class.create(Sprite, 
{
    initialize: function(frame) { 
        Sprite.call(this,30,50); 
        this.image = game.assets['arbitro3.png'];

        //this.scaleX=-1;
        this.x =300+Math.random() * 1000; 
        this.y =200+Math.random() * 600; 
        this.frame = frame;
        game.rootScene.addChild(this);
    },
    /*onenterframe: function() {
        if (this.within(bear)) {
            game.rootScene.removeChild(this);
            score++;
        }
    }*/
});

Rojo = Class.create(Sprite, 
{
    initialize: function(frame) { 
        Sprite.call(this,20,50); 
        this.image = game.assets['jugador7.png'];

        this.scaleX=-1;
        this.x = 700+Math.random() * 1100; 
        this.y = 145+Math.random() * 650; 
        this.frame = frame;
        game.rootScene.addChild(this);
    },
    onenterframe: function() {
        if (this.within(bear)) {
            bear.x-=5;
            score++;
        }
    }
});

Arquero= Class.create(Sprite, 
{
    initialize: function() { 
        Sprite.call(this,35,43); 
        this.image = game.assets['arquero.png'];
        this.x =250; 
        this.y =400 ;
        this.frame = [1,1,2,2];
        game.rootScene.addChild(this);
    }
    });

Arquero2= Class.create(Sprite, 
{
    initialize: function() { 
        Sprite.call(this,27,50); 
        this.image = game.assets['arquero222.png'];
        this.scaleX=-1;
        this.x =1710; 
        this.y =400 ;
        this.frame = [1,1,2,2];
        game.rootScene.addChild(this);
    }
    });



   game.start();
}


 