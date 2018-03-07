
enchant();
window.onload = function() {
    
    game = new Game(2800, 1800);
    game.preload('jugador4.png','cancha.png','jugador44.png','jugador1.png');
    game.onload = function() {

        background = new Sprite(1300,866); 
        background.x =800;
        background.y =500;
        background.scaleX=2; 
        background.scaleY=2;   
        background.image = game.assets['cancha.png'] 
        
        bear = new Bear(500, 500); 

        for (i = 0; i < 5; i++) {
            fruits = new Azul(40); 
            }

        for (i = 0; i <4; i++) {
            barca = new Barcelona(15); 
            }

        score = 0; 
        game.rootScene.addEventListener('touchend', function(event) { 

            if(300 <event.x && event.x<2600){
                bear.tx = event.x; 
                if (event.x<bear.x) {
                    bear.scaleX=-1;
                }
                else{ bear.scaleX=+1;}
            } 
            else{
                bear.tx = bear.tx;    
            }
            if (true) {}
            bear.ty = event.y; 
        });
    }

  Bear = Class.create(Sprite,
   {
    initialize: function(x, y) { 
        Sprite.call(this, 92, 141); 
        this.image = game.assets['jugador44.png'];
        this.x = 1000;
        this.y = 1000;

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

Azul = Class.create(Sprite, 
{
    initialize: function(frame) { 
        Sprite.call(this,92,141); 
        this.image = game.assets['jugador4.png'];

        this.scaleX=-1;
        this.x = 1200+Math.random() * 1400; 
        this.y = 50+Math.random() * 1500; 
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

Barcelona = Class.create(Sprite, 
{
    initialize: function(frame) { 
        Sprite.call(this,92,141); 
        this.image = game.assets['jugador44.png'];

        //this.scaleX=-1;
        this.x =200+Math.random() * 1600; 
        this.y =50+Math.random() * 1500; 
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

Pelota = Class.create(Sprite, 
{
    initialize: function(frame) { 
        Sprite.call(this,92,141); 
        this.image = game.assets['jugador44.png'];

        //this.scaleX=-1;
        this.x = 800+Math.random() * 1600; 
        this.y = 300+Math.random() * 866; 
        this.frame = frame;
        game.rootScene.addChild(this);
    },
    onenterframe: function() {
        if (this.within(bear)) {
            game.rootScene.removeChild(this);
            score++;
        }
    }
});

    game.start();
}