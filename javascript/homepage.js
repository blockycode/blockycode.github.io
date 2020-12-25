var e = false;

function guide() {
    document.getElementById('title').innerHTML = "BlockyCode | Home"
    setTimeout(function(){
        if(e === true) {
            return;
        }
        location.replace('#versions')
    }, 1000)
        setTimeout(function(){
         if(e === true) {
            return;
        }
        location.replace('#update')
    }, 2000)
}
window.onscroll = function(ev) {
    e = true
};