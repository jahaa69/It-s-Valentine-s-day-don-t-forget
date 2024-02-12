const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const body = document.querySelector("body");

b2.addEventListener('click', () => {
    const title = document.querySelector("h1");
    console.log('Button 2 clicked');
    b1.style.width = (parseInt(b1.style.width) || 100) + 10 + 'px';
    b1.style.height = (parseInt(b1.style.height) || 50) + 10 + 'px';
    b1.style.fontSize = (parseInt(b1.style.fontSize) || 30) + 2 + 'px';
    b2.style.width = (parseInt(b2.style.width) || 100) - 10 + 'px';
    b2.style.height = (parseInt(b2.style.height) || 50) - 10 + 'px';
    b2.style.fontSize = (parseInt(b2.style.fontSize) || 30) - 5 + 'px';
    title.innerText += "!";
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.innerText = "💜";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
}

setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
},100)

function delltitle() {
    var title = document.querySelector("h1");
    let img = document.createElement("img");
    title.innerText = "";
    img.src = "gif.gif";
    title.appendChild(img);
}

  b1.addEventListener('click', () => {
      console.log('Button 1 clicked');
      setInterval(createHeart,100);
      delltitle();
      b1.style.display = "none";
      b2.style.display = "none";
      
});