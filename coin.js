var coinIMG = loadImage("coin.png");
function createCoin(x,y,width,height){
    var obj=createSprite(x,y,width,height);
    obj.addImage(coinIMG);
    return obj;
  }
