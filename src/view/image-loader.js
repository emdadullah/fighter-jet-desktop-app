var imageSprite = new Image();

imageSprite.src = 'images/sprite.png';
imageSprite.addEventListener('load', canvas.init.bind(canvas), false);