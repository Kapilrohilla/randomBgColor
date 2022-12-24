function changebg(){
    const bd = document.getElementById('body');

    let r,g,b,rgb;
    
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    rgb = "rgb(" + r + "," + g + "," + b + ")";
    
    bd.style.background = rgb;
}