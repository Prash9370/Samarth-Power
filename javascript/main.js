let dropdown = false;
window.addEventListener('resize', wid);
function collapsedropdown(){
    if(dropdown){
        document.getElementsByClassName("dropdown")[0].style.display = "none";
        dropdown = false;
    }
}
function chgactive(num){
    for(let i=0;i<7;i++){
        document.getElementsByClassName("navitem")[i].classList.remove("active");
    }
    if(num<7){
        document.getElementsByClassName("navitem")[num].classList.add("active");
    }
}
function wid() {
    if (window.innerWidth < 310) {
        for (let i = 0; i < 6; i++) {
            document.getElementsByClassName("navitem")[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < 6; i++) {
            document.getElementsByClassName("navitem")[i].style.display = "flex";
        }
    }
}
function dd() {
    if (dropdown) {
        document.getElementsByClassName("dropdown")[0].style.display = "none";
        dropdown = false;
    }
    else {
        document.getElementsByClassName("dropdown")[0].style.display = "block";
        dropdown = true;
    }
}
function dealer(){
    let tq= document.querySelector("#taluka").value;
    let loc= document.querySelector("#region").value;
    let name= document.querySelector("#name").value;
    if(tq=="none"){
        alert("Select Taluka");
        return 0;
    }
    if(loc==""){
        alert("Enter Shop Location");
        return 0;
    }
    if(name==""){
        alert("Enter Your Name");
        return 0;
    }
    let msgdt = "Application For Subdealership\nName :- " + name + "\nTaluka :- " + tq + "\nShop Location :- " + loc;
    sendmsg(msgdt);
}
function sendmsg(msgdt){
    
            console.log(msgdt);
            let phoneNumber = "+918999609749";
            let encodedMessage = encodeURIComponent(msgdt);
            let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL,'_blank');
}
function visit(sitelink){
    window.location.href = sitelink;
}
function controlcss(csspg){
    let styleshits = document.getElementsByClassName("styles");
    for (let i = styleshits.length-1; i>=0;i--){
        styleshits[i].disabled = true;
    }
    document.getElementById(csspg).disabled=false;
}
function visitinnewtab(sitelink){
    window.open(sitelink,"_blank");
}
function downloadapp(){
    const link = document.createElement('a');
    link.href = './downloads/samarthpower.apk';  // Replace with the relative path to your file
    link.download = 'samarthpower.apk'; // This name will be used for downloading
    link.click();
}
function openPreview(imgElement) {
    const modal = document.getElementById('previewModal');
    const modalImg = document.getElementById('previewImage');
    modal.style.display = 'flex';
    modalImg.src = imgElement.src;
}

function closePreview() {
    const modal = document.getElementById('previewModal');
    modal.style.display = 'none';
}