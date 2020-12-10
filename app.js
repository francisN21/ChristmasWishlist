let notif = document.querySelector(".repo");
let loc1 = document.querySelector(".r2d1");
let loc2 = document.querySelector(".r2d2");
let loc3 = document.querySelector(".r2d3");
let loc4 = document.querySelector(".r2d4");
let cache = JSON.parse(localStorage.getItem("Name"));

let name = {
    Name: "",
};



function welcome() {
    if(cache){
        notif.innerHTML = `Welcome back ${cache}! Merry Christmas!`;
        loc1.innerHTML = `My Wishlist:`;
        loc2.innerHTML = `
        <ul>
    <li><a href="https://www.amazon.com/gp/product/B005JABN8Y/ref=ox_sc_act_title_5?smid=A2DQM1XJZE28BS&psc=1" target="_blank">Bandai Hobby Thousand Sunny Model Ship One Piece New World Version</a></li>
    <li><a href="https://www.amazon.com/gp/product/B082V1S947/ref=ox_sc_act_title_4?smid=ATVPDKIKX0DER&psc=1" target="_blank">BanPresto One Piece King of Artist The Monkey.D.Luffy Figure ver.2</a></li>
    <li><a href="https://www.amazon.com/gp/product/B082TZ7R6W/ref=ox_sc_act_title_3?smid=A19KDY3KZZXO3B&psc=1" target="_blank">BanPresto One Piece King of Artist The Monkey.D.Luffy Figure ver.1</a></li>
    <li>Please get me the whole collection: #1-5</li>
    <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUSG2/ref=pd_sbs_21_1/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUSG2&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">1: Bandai Hobby Mecha Collection #1 Chopper Robot Tank Model Kit</a></li>
    <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUSAS/ref=pd_sbs_21_2/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUSAS&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">2: Bandai Hobby Mecha Collection #2 Chopper Robot Wing Model Kit</a></li>
    <li><a href="https://www.amazon.com/Bandai-Hobby-Collection-Chopper-Submarine/dp/B00IAGUUME/ref=pd_sbs_21_4/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUUME&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">3: Bandai Hobby Mecha Collection #3 Chopper Robot Submarine Model Kit</a></li>
    <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUW90/ref=pd_sbs_21_3/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUW90&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">4: Bandai Hobby Mecha Collection #4 Chopper Robot Drill Model Kit</a></li>
    <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUUBU/ref=sr_1_1?dchild=1&keywords=bandai+chopper+collection&qid=1607594064&sr=8-1" target="_blank">5: Bandai Hobby Mecha Collection #5 Chopper Robot Crane Model Kit</a></li>
    </ul>
        `;
    }else{
        notif.innerHTML = `Welcome`;
        loc1.innerHTML = `What's your name?`;
        loc2.innerHTML = `
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Name" id="userInput">
        <button class="btn btn-outline-success my-2 my-sm-0 submitBtn" type="submit" id="submitBtn">Submit</button>
        </form>
        `;
        let submit = document.getElementById('submitBtn');
        let nameEl = document.getElementById('userInput');
        submit.addEventListener('click', function(e){
            e.preventDefault();
            if(name.Name === /[0-9]+/){
                console.log(typeof(name.Name));
                loc1.innerHTML = `Please enter name?`;
            }else{
                name.Name = nameEl.value;
                console.log(typeof(name.Name));
                localStorage.setItem("Name", JSON.stringify(nameEl.value));
                next();
            };
        });
    
    };
    
};

welcome();

function next() {
    notif.innerHTML = `Merry Christmas ${name.Name}!`;
    loc1.innerHTML = `My Wishlist:`;
    loc2.innerHTML = `
    <ul>
<li><a href="https://www.amazon.com/gp/product/B005JABN8Y/ref=ox_sc_act_title_5?smid=A2DQM1XJZE28BS&psc=1" target="_blank">Bandai Hobby Thousand Sunny Model Ship One Piece New World Version</a></li>
<li><a href="https://www.amazon.com/gp/product/B082V1S947/ref=ox_sc_act_title_4?smid=ATVPDKIKX0DER&psc=1" target="_blank">BanPresto One Piece King of Artist The Monkey.D.Luffy Figure ver.2</a></li>
<li><a href="https://www.amazon.com/gp/product/B082TZ7R6W/ref=ox_sc_act_title_3?smid=A19KDY3KZZXO3B&psc=1" target="_blank">BanPresto One Piece King of Artist The Monkey.D.Luffy Figure ver.1</a></li>
<li>Please get me the whole collection: #1-5</li>
<li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUSG2/ref=pd_sbs_21_1/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUSG2&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">1: Bandai Hobby Mecha Collection #1 Chopper Robot Tank Model Kit</a></li>
<li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUSAS/ref=pd_sbs_21_2/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUSAS&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">2: Bandai Hobby Mecha Collection #2 Chopper Robot Wing Model Kit</a></li>
<li><a href="https://www.amazon.com/Bandai-Hobby-Collection-Chopper-Submarine/dp/B00IAGUUME/ref=pd_sbs_21_4/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUUME&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">3: Bandai Hobby Mecha Collection #3 Chopper Robot Submarine Model Kit</a></li>
<li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUW90/ref=pd_sbs_21_3/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUW90&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">4: Bandai Hobby Mecha Collection #4 Chopper Robot Drill Model Kit</a></li>
<li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUUBU/ref=sr_1_1?dchild=1&keywords=bandai+chopper+collection&qid=1607594064&sr=8-1" target="_blank">5: Bandai Hobby Mecha Collection #5 Chopper Robot Crane Model Kit</a></li>
</ul>
    `;
    console.log(name);
}


