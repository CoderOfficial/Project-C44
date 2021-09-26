var PC1AM_image;
var Enemy1_image, Enemy2_image, Enemy3_image, Enemy4_image, Enemy5_image;
var BG1_image;
var PC1bull_image, Enemy1bull_image;
var EnemyGroup;
var PC1bull1Group;
var PC1bull2Group;
function preload(){
PC1AM_image = loadAnimation("PC1-1.png","PC1-2.png","PC1-3.png");
Enemy1_image = loadAnimation("enemyam1-1.png","enemyam2-1.png","enemyam3-1.png");
Enemy2_image = loadAnimation("enemyam1-2.png","enemyam2-2.png","enemyam3-2.png");
Enemy3_image = loadAnimation("enemyam1-3.png","enemyam2-3.png","enemyam3-3.png");
Enemy4_image = loadAnimation("enemyam1-4.png","enemyam2-4.png","enemyam3-4.png");
Enemy5_image = loadAnimation("enemyam1-5.png","enemyam2-5.png","enemyam3-5.png");
PC1bull_image = loadImage("PC1-Bullet.png");
Enemy1bull_image = loadImage("enemy1-bullet.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight)
Pc1 = createSprite(width/2,height-60,50,50);
Pc1.addAnimation("default ship",PC1AM_image);
Pc1.scale = 0.5;

//Enemybull = createSprite();
//Enemybull.addImage()

EnemyGroup = new Group();


}
function draw(){
background(0);

createEnemy1();

drawSprites();
}
function createEnemy1(){
if(frameCount%60===0){

var randWidth = Math.round(random(10,width));
var Enemy = createSprite(randWidth,height-600,30,30);
Enemy.scale = 0.3;
Enemy.lifetime = 100;


var rand = Math.round(random(1,5));
switch(rand){
    case 1: Enemy.addAnimation("1",Enemy1_image);
    break;
    case 2: Enemy.addAnimation("2",Enemy2_image);
    break;
    case 3: Enemy.addAnimation("3",Enemy3_image);
    break;
    case 4: Enemy.addAnimation("4",Enemy4_image);
    break;
    case 5: Enemy.addAnimation("5",Enemy5_image);
    break;
    default:break;
    
}
//EnemyGroup.add()

}
}

function Bulletpc1(){

}