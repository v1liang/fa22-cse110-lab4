function timeCallback(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timeCallback, 1000);