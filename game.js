var gameState=0;


function removeElement(element){
element.remove();
gameStart();
}

function gameStart(){
        var img = document.createElement('img');
        img.src = "loading.gif";
        document.getElementById('state').appendChild(img);
        
}
