document.addEventListener("DOMContentLoaded", loadhomepg);
// Homepage
function loadhomepg() {
  chgactive(0);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  view.innerHTML = `<!-- weeders -->
        <div class="maincont">
            <p class="listname">Power Weeders</p>
            <div class="listcont">
                <div class="listflex">
                    <div class="content" onclick="loadviewpg('D531E',1)">
                        <img src="./weederimg/D531EMR.png" alt="">
                        <p>D531 Self 9HP</p>
                    </div>
                    <div class="content" onclick="loadviewpg('D531M',1)">
                        <img src="./weederimg/D531EF.png" alt="">
                        <p>D531 Manual 9HP</p>
                    </div>
                    <div class="content" onclick="loadviewpg('D90',1)">
                        <img src="./weederimg/D90MR.png" alt="">
                        <p>D90 4.5HP/7HP</p>
                    </div>
                    <div class="content" onclick="loadviewpg('G105',1)">
                        <img src="./weederimg/G105MR.png" alt="">
                        <p>G105 7HP Petrol</p>
                    </div>
                </div>
                <span class="showmore" onclick="loadlistpg('weeder',1)">Show More</span>
            </div>
        </div>
        <!-- tillers -->
        <div class="maincont">
            <p class="listname">Rear Tillers</p>
            <div class="listcont">
                <div class="listflex">
                    <div class="content" onclick="loadviewpg('732DB',1)">
                        <img src="./weederimg/732DBMR.png" alt="">
                        <p>Shaurya 732 10HP</p>
                    </div>
                    <div class="content" onclick="loadviewpg('D531RTF',1)">
                        <img src="./weederimg/D531RTFMR.png" alt="">
                        <p>D-531 RT-F 9HP</p>
                    </div>
                    <div class="content" onclick="loadviewpg('732DA',1)">
                        <img src="./weederimg/732DAMR.png" alt="">
                        <p>Shaurya 732 9HP</p>
                    </div>
                    <div class="content" onclick="loadviewpg('732P',1)">
                        <img src="./weederimg/732PMR.png" alt="">
                        <p>Shaurya 732 Petrol</p>
                    </div>
                </div>
                <span class="showmore" onclick="loadlistpg('tiller',1)">Show More</span>
            </div>
        </div>
        <!-- weeder Accessories -->
        <div class="maincont" id="abc">
            <p class="listname">Weeder Attachments</p>
            <div class="listcont">
                <div class="listflex">
                    <div class="content" onclick="loadviewpg('Pass',2)">
                        <img src="./weederimg/PassMR.png" alt="">
                        <p>Pass</p>
                    </div>
                    <div class="content" onclick="loadviewpg('Ridger',2)">
                        <img src="./weederimg/RidgerMR.png" alt="">
                        <p>Ridger</p>
                    </div>
                    <div class="content" onclick="loadviewpg('Trolley',2)">
                        <img src="./weederimg/TrolleyMR.png" alt="">
                        <p>Trolley</p>
                    </div>
                    <div class="content" onclick="loadviewpg('Seat',2)">
                        <img src="./weederimg/SeatMR.png" alt="">
                        <p>Seat</p>
                    </div>
                </div>
                <span class="showmore" onclick="loadlistpg('attachment',2)">Show More</span>
            </div>
        </div>
        <!-- other tools -->
        <div class="maincont">
            <p class="listname">Agricultural Machinery</p>
            <div class="listcont">
                <div class="listflex">
                    <div class="content" onclick="loadviewpg('35ccBP',3),collagehide()">
                        <img src="./weederimg/35ccBPMR.png" alt="">
                        <p>35cc 4Stroke Backpack</p>
                    </div>
                    <div class="content" onclick="loadviewpg('52ccSP',3),collagehide()">
                        <img src="./weederimg/52ccSPMR.png" alt="">
                        <p>52cc 2Stroke Sidepack</p>
                    </div>
                    <div class="content" onclick="loadviewpg('63ccEA',3),collagehide()">
                        <img src="./weederimg/63ccEAMR.png" alt="">
                        <p>63cc EarthAuger</p>
                    </div>
                    <div class="content" onclick="loadviewpg('Chainsaw',3),collagehide()">
                        <img src="./weederimg/ChainsawMR.png" alt="">
                        <p>Chainsaw</p>
                    </div>
                </div>
                <span class="showmore" onclick="loadlistpg('tool',3),visit('#BC')">Show More</span>
            </div>
        </div>`;

  display.appendChild(view);
  controlcss("hmpgcss");
}

// View Page
function loadviewpg(subj, actv) {
  chgactive(actv);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  view.innerHTML = `<div class="namecontainer">
            <p id="mname">Weeder</p>
        </div>
        <section class="topflex">
            <div class="imgcontainer">
            <img src="./weederimg/D531EMR.png" alt="" id="mainimg">
                <div class="collage">
                    <img src="./weederimg/D531EF.png" alt="" class="spareimgs">
                    <img src="./weederimg/D531ER.png" alt="" class="spareimgs">
                    <img src="./weederimg/D531EB.png" alt="" class="spareimgs">
                    <img src="./weederimg/D531EL.png" alt="" class="spareimgs">
                    <img src="./weederimg/D531EMR.png" alt="" class="spareimgs">
                </div>
            </div>
            <div class="vdocontainer">
                <iframe id="demovdo" src="https://www.youtube.com/embed/Cat1tLwuW3A?si=i-5Yd-oZo9lgaeSy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; gyroscope;" allowfullscreen></iframe> 
                <p> Demo Video</p>  
            </div>
        </section>
        <div class="tablecontainer">
                <table border="3">
                    <tr>
                        <th>Model No.</th>
                        <th id="model"></th>
                    </tr>
                    <tr class="attachrmv">
                        <td>Power</td>
                        <td id="power"></td>
                    </tr>
                    <tr class="attachrmv">
                        <td id="thrdrow">Rota</td>
                        <td id="rota"></td>
                    </tr>
                    <tr class="attachrmv">
                        <td>Start System</td>
                        <td id="start"></td>
                    </tr>
                    <tr class="attachrmv">
                        <td>Engine Type</td>
                        <td id="fuel"></td>
                    </tr>
                    <tr>
                        <td>Country Of Origin</td>
                        <td id="origin">Made In India</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td id="price"><button onclick="askprice()">Ask Price</button></td>
                    </tr>
                </table>
            </div>`;

  display.appendChild(view);
  viewloadcont(subj);
  controlcss("viewcss");
}

// List Page
function loadlistpg(listnm, actv) {
  chgactive(actv);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  let htmldata = ``;
  switch (listnm) {
    case "weeder":
      htmldata = `<p class="listheading">Power Weeders</p>
        <div class="listcontainer">
            <div class="listcontent" onclick="loadviewpg('D531E',1)">
                <img src="./weederimg/D531EMR.png" alt="">
                <p>9HP Self D531E</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('D531M',1)">
                <img src="./weederimg/D531EF.png" alt="">
                <p>9HP Manual D531M</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('D105',1)">
                <img src="./weederimg/D105MR.png" alt="">
                <p>7HP Diesel D105</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('D90',1)">
                <img src="./weederimg/D90MR.png" alt="">
                <p>4.5HP/7HP Diesel D90</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('G105',1)">
                <img src="./weederimg/G105MR.png" alt="">
                <p>7HP Petrol G105</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('G500',1)">
                <img src="./weederimg/G500MR.png" alt="">
                <p>7HP Petrol G500</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Taro',1)">
                <img src="./weederimg/TaroMR.png" alt="">
                <p>Taro Reaper</p>
            </div>
        </div>`;
      break;
    case "tiller":
      htmldata = `<p class="listheading">Rear Tillers</p>
        <div class="listcontainer">
            <div class="listcontent" onclick="loadviewpg('732DB',1)">
                <img src="./weederimg/732DBMR.png" alt="">
                <p>10HP Shaurya 732</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('732DA',1)">
                <img src="./weederimg/732DAMR.png" alt="">
                <p>9HP Shaurya 732</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('732P',1)">
                <img src="./weederimg/732PMR.png" alt="">
                <p>Shaurya 732 Petrol</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('D531RTF',1)">
                <img src="./weederimg/D531RTFMR.png" alt="">
                <p>9HP D531 RTF</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('D531RT',1)">
                <img src="./weederimg/D531RTB.png" alt="">
                <p>9HP D531 RT</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Shakti',1)">
                <img src="./weederimg/ShaktiMR.png" alt="">
                <p>Shakti</p>
            </div>
        </div>`;
      break;
    case "attachment":
      htmldata = `<p class="listheading">Weeder Attachments</p>
        <div class="listcontainer">
            <div class="listcontent" onclick="loadviewpg('Pass',2)">
                <img src="./weederimg/PassMR.png" alt="">
                <p>Pass</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Ridger',2)">
                <img src="./weederimg/RidgerMR.png" alt="">
                <p>Ridger</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Plough',2)">
                <img src="./weederimg/PloughMR.png" alt="">
                <p>Plough</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('SeedDrill',2)">
                <img src="./weederimg/SeedDrillMR.png" alt="">
                <p>Seed Drill</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('HTP',2)">
                <img src="./weederimg/HTPMR.png" alt="">
                <p>HTP Spray</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Pump',2)">
                <img src="./weederimg/PumpMR.png" alt="">
                <p>Water Pump</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Trolley',2)">
                <img src="./weederimg/TrolleyMR.png" alt="">
                <p>Trolley</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Seat',2)">
                <img src="./weederimg/SeatMR.png" alt="">
                <p>Seat</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Reaper',2)">
                <img src="./weederimg/ReaperMR.png" alt="">
                <p>Reaper</p>
            </div>
        </div>`;
      break;
    case "tool":
      htmldata = `<!-- Brush Cutters -->
        <p class="listheading" id="BC">Brush Cutters</p>
        <div class="listcontainer">
            <div class="listcontent" onclick="loadviewpg('35ccBP',3),collagehide()">
                <img src="./weederimg/35ccBPMR.png" alt="">
                <p>35cc 4Stroke Backpack</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('31ccBP',3),collagehide()">
                <img src="./weederimg/31ccBPMR.png" alt="">
                <p>31cc 4Stroke Backpack</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('35ccSP',3),collagehide()">
                <img src="./weederimg/35ccSPMR.png" alt="">
                <p>35cc 4Stroke Sidepack</p>
            </div>            
            <div class="listcontent" onclick="loadviewpg('31ccSP',3),collagehide()">
                <img src="./weederimg/31ccSPMR.png" alt="">
                <p>31cc 4Stroke Sidepack</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('52ccBP',3),collagehide()">
                <img src="./weederimg/52ccBPMR.png" alt="">
                <p>52cc 2Stroke Backpack</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('52ccSP',3),collagehide()">
                <img src="./weederimg/52ccSPMR.png" alt="">
                <p>52cc 2Stroke Sidepack</p>
            </div>            
        </div>
        <!-- BC Attackments -->
        <p class="listheading" id="BCA">Brush Cutter Attachments</p>
        <div class="listcontainer">
            <div class="listcontent" onclick="loadviewpg('BCRota',3),collagehide()">
                <img src="./weederimg/BCRotaMR.png" alt="">
                <p>Rota For Brushcutter</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('3TBLade',3),collagehide()">
                <img src="./weederimg/3TBladeMR.png" alt="">
                <p>3 Teeth Blade</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('80TBlade',3),collagehide()">
                <img src="./weederimg/80TBladeMR.png" alt="">
                <p>80 Teeth Blade</p>
            </div>            
            <div class="listcontent" onclick="loadviewpg('SteelTrimmer',3),collagehide()">
                <img src="./weederimg/SteelTrimmerMR.png" alt="">
                <p>Steel Trimmer Head</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('ChainsawAttach',3),collagehide()">
                <img src="./weederimg/ChainsawAttachMR.png" alt="">
                <p>Chainsaw Attachment</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Hedge',3),collagehide()">
                <img src="./weederimg/HedgeMR.png" alt="">
                <p>Trimmer Hedge</p>
            </div>            
        </div>
        <!-- Earth Augers -->
        <p class="listheading" id="EA">Earth Augers</p>
        <div class="listcontainer">
            <div class="listcontent" onclick="loadviewpg('52ccEA',3),collagehide()">
                <img src="./weederimg/52ccEAMR.png" alt="">
                <p>52cc Earth Auger</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('63ccEA',3),collagehide()">
                <img src="./weederimg/63ccEAMR.png" alt="">
                <p>63cc Earth Auger</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('63ccSPEA',3),collagehide()">
                <img src="./weederimg/63ccSPEAMR.png" alt="">
                <p>63cc Trolley Earth Auger</p>
            </div>            
            <div class="listcontent" onclick="loadviewpg('EABit',3),collagehide()">
                <img src="./weederimg/EABitMR.png" alt="">
                <p>4",6",8",10",12" Bit</p>
            </div>
        </div>
        <!-- Other Tools -->
        <p class="listheading" id="OM">Other Machinery</p>
        <div class="listcontainer">
            <div class="listcontent" onclick="loadviewpg('Chainsaw',3),collagehide()">
                <img src="./weederimg/ChainsawMR.png" alt="">
                <p>Chainsaw</p>
            </div>
            <div class="listcontent" onclick="loadviewpg('Chaffcutter',3),collagehide()">
                <img src="./weederimg/ChaffcutterMR.png" alt="">
                <p>Chaff Cutter</p>
            </div>  
        </div>`;
      break;
  }
  view.innerHTML = htmldata;

  display.appendChild(view);
  controlcss("listcss");
}
// Spare Page
function loadsparepg() {
  chgactive(4);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  view.innerHTML = `<div class="sparecontainer">
        <p class="notice">For Spare Parts Directly Contact Us</p>
        <span class="callbtn" onclick="visit('tel:8999609749')">Call Us</span>
        </div>`;

  display.appendChild(view);
  controlcss("sparecss");
}
// Services Page
function loadservicepg() {
  chgactive(5);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  view.innerHTML = `<div class="container">
        <div class="card">
            <h2>Sales And Post-Purchase Support</h2>
            <p>We provide aftersale assistance with sales of weeders and other machineries to help new users get used to the machinery easily.</p>
        </div>
        <div class="card">
            <h2>Repair And Service</h2>
            <p>All sorts of repair work is done at our workshop for the machineries we sell and we provide maintainance service at your door step at a very affordable price.</p>
        </div>
        <div class="card">
            <h2>Spare Parts Availability</h2>
            <p>We maintain all spare parts for all our machineries at our showrooms always so that you dont need to stop your work.</p>
        </div>
    </div>`;

  display.appendChild(view);
  controlcss("servicecss");
}
// Us Page
function loaduspg(pgname) {
  chgactive(7);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  if (pgname == "about") {
    view.innerHTML = `<div class="about-container">
        <div class="header">About Us</div>
        <div class="content">
            <p>Welcome to <b>Samarth Power</b>, where we are dedicated to <b>Empower Our Farmers</b> . Founded in <b>2016</b>, we have been on a journey to <b>Modernise Farming Community</b>. Our team of passionate individuals is committed to <b>Provide our Best</b>, and we take pride in <b>Having a 1000+ Happily Satisfied Customer Base</b>.</p>
            <p>Meet the faces behind <b>Samarth Power</b>. Our diverse team brings a wealth of experience and expertise to the table.</p>
            <p>Our partnerships with <b>E-AgroCare Machineries Pvt Ltd</b> help us achieve greater impact.</p>
            <p>Explore our website to learn more about our projects and initiatives. If you have any questions or would like to collaborate, feel free to <b class="pointer" onclick="loaduspg('contact')">CONTACT US</b>.</p>
        </div>
    </div>`;
  }
  if (pgname == "contact") {
    view.innerHTML = `<div class="about-container">
        <div class="header">Contact Us</div>
        <div class="content center">
            Contact Mail : <a href="mailto:mashinde77@gmail.com">mashinde77@gmail.com</a>
            <p class="m1"><b>Shinde MR (Proprietor, Director)</b><br><span onclick="visit('tel:8999609749')" class="pointer hov">8999609749</span>, <span onclick="visit('tel:9403302577')" class="pointer hov">9403302577</span></p>
            <p class="m1"><b>Kudhekar Ganesh (Proprietor, Manager)</b><br> <span onclick="visit('tel:8999698156')" class="pointer hov">8999698156</span>, <span onclick="visit('tel:9921578183')" class="pointer hov">9921578183</span></p>
            </div>
    </div>`;
  }

  display.appendChild(view);
  controlcss("uscss");
}
function loadofferpg() {
  chgactive(7);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  view.innerHTML = `<div class="flex-container">
        <img src="./imgs/nooffer.jpg" alt="Offer Image">
    </div>`;

  display.appendChild(view);
  controlcss("offercss");
}
function loaddownloadpg(type) {
  chgactive(6);
  document.querySelector("data").remove();
  let view = document.createElement("data");
  let display = document.getElementById("display");
  let btnText;
  if(type=="install"){
    btnText = "Install";
  }else if(type=="update"){
    btnText = "Update"
  }else{
    btnText = "Download"
  }
  view.innerHTML = `<section class="app-details">
        <div class="app-icon">
            <img src="./imgs/samarthpower.png" alt="App Icon">
        </div>
        <div class="app-info">
            <h2>Samarth Power App</h2>
            <p>Prashant Shinde</p>
            <div class="ratings">
                <span>4.5 ★★★★★</span>
                <span>(12 reviews)</span>
            </div>
            <button class="download-btn" onclick="downloadapp()">${btnText}</button>
        </div>
    </section>

    <!-- App Description -->
    <section class="description">
        <h3>About this app</h3>
        <p>Your one-stop solution for advanced agricultural machinery and accessories. Explore power weeders, tillers, and more to enhance your farming efficiency.</p>
    </section>

    <!-- Screenshots -->
    <section class="screenshots">
        <h3>Screenshots</h3>
        <div class="screenshot-container">
            <img src="./imgs/screenshot3.jpeg" alt="Screenshot 1" class="clickable" onclick="openPreview(this)">
            <img src="./imgs/screenshot2.jpeg" alt="Screenshot 2" class="clickable" onclick="openPreview(this)">
            <img src="./imgs/screenshot1.jpeg" alt="Screenshot 3" class="clickable" onclick="openPreview(this)">
            <img src="./imgs/screenshot4.jpeg" alt="Screenshot 3" class="clickable" onclick="openPreview(this)">
        </div>
    </section>

    <!-- Reviews -->
    <section class="reviews">
        <h3>User Reviews</h3>
        <div class="review">
            <p><strong>Prashant Shinde</strong> ★★★★★</p>
            <p>Very Useful for Affordable farming Machinery</p>
        </div>
        <div class="review">
            <p><strong>Ganesh Kudhekar</strong> ★★★★☆</p>
            <p>Best App</p>
        </div>
        <div id="previewModal" class="modal">
        <span class="close" onclick="closePreview()">&times;</span>
        <img class="modal-content" id="previewImage">
    </div>
    </section>`;

  display.appendChild(view);
  controlcss("downloadcss");
}

// External URl Code
window.onload = function () {
  // Get the parameter from the URL
  let urlParams = new URLSearchParams(window.location.search);
  let section = urlParams.get("section");
  let param1 = urlParams.get("param1");
  let actv = urlParams.get("active");
  let type = urlParams.get("type");

  switch (section) {
    case "view":
      loadviewpg(param1, actv);
      break;
    case "list":
      loadlistpg(param1, actv);
      break;
    case "downloadapp":
      loaddownloadpg(type);
      break;
  }
};
