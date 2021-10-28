let gameBox = document.getElementById('gameBox');
let context = gameBox.getContext('2d');




class Player {

    constructor() {
        this.sheetWidth = 291;
        this.sheetHeight = 572;
        this.posX = 0;
        this.posY = gameBox.height /3;
        this.cols = 3;
        this.imageWidth = this.sheetWidth / 3;
        this.imageHeight = this.sheetHeight/4;
        this.scrX = 0;
        this.srcY = 0;
        this.currFrame = 0; //frame Index
        this.playeCharacter = new Image();
        this.playeCharacter.src = "marioSpriteSheet.png";
    }

    // stopAnimation() {
    //     clearInterval(this.animationInterval);
    // }

    startAnimation() {
        // this.imageHeight=this.sheetWidth/4;
        // this.imageWidth=this.sheetWidth/3;
        context.clearRect(0, 0, gameBox.width, gameBox.height);
        this.currFrame %= this.cols;
        this.scrX = this.currFrame * this.imageWidth;
        context.drawImage(this.playeCharacter, this.scrX, this.srcY, this.imageWidth, this.imageHeight, this.posX, this.posY, this.imageWidth, this.imageHeight);
        this.currFrame++;
        // this.startAnimation();
    }

    draw(){
        context.drawImage(this.playeCharacter, this.scrX, this.srcY, this.imageWidth, this.imageHeight, this.posX, this.posY, this.imageWidth, this.imageHeight);
    }

    //keyboard controls
    moveLeft() {
        this.startAnimation();
        if (this.posX > 0)
            this.posX -= this.leftKeySpeed;
    }

    moveRight() {
        this.startAnimation();
        if (this.posX + this.width < gameBox.width)
            this.posX += this.rightKeySpeed;
    }
}

// class Enemy {
//     constructor(vx, vy) {
//         this.posY = 0;
//         this.posX = gameBox.width / 2;
//         this.vx = vx;
//         this.vy = vy;
//         this.color = 'red';
//         this.height = 50;
//         this.width = 50;
//     }

//     updateEnemyState() {
//         this.posY += this.vy;
//         if (this.posY + this.height >= gameBox.height || this.posY <= 0)
//             this.vy = -this.vy;
//     }
// }

//utility functions

// function drawBox(object) {
//     context.fillStyle = object.color;
//     context.fillRect(object.posX, object.posY, object.width, object.height);
// }

// function updateGameState() {
//     duck1.updateEnemyState();
// }

function getKeyAndMove(e) {
    code = e.keyCode;
    // console.log(code);
    if (code == 39)
        superMario.moveRight();
    if (code == 37)
        superMario.moveLeft();
}

let superMario = new Player();
// let duck1 = new Enemy(0, 4);

// function updateScreen() {
//     context.clearRect(0, 0, gameBox.width, gameBox.height);
//     updateGameState();
//     // drawBox(superMario);
//     drawBox(duck1);
//     window.requestAnimationFrame(updateScreen);
// }

// updateScreen();
// superMario.draw();
setInterval(function(){
superMario.startAnimation();
},100);
