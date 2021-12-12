let notif = document.querySelector(".repo");
let loc1 = document.querySelector(".r2d1");
let loc2 = document.querySelector(".r2d2");
let loc3 = document.querySelector(".r2d3");
let loc4 = document.querySelector(".r2d4");
let loc5 = document.querySelector(".r2d5");
let loc6 = document.querySelector(".r2d6");
let loc7 = document.querySelector(".r2d7");
let loc8 = document.querySelector(".r2d8");
let loc9 = document.querySelector(".r2d9");
let loc10 = document.querySelector(".r2d10");
let loc11 = document.querySelector(".r2d11");
let loc12 = document.querySelector(".r2d12");
let loc13 = document.querySelector(".r2d13");
let loc14 = document.querySelector(".r2d14");
let loc15 = document.querySelector(".r2d15");
let loc16 = document.querySelector(".r2d16");
let loc17 = document.querySelector(".r2d17");
let loc18 = document.querySelector(".r2d18");
let loc19 = document.querySelector(".r2d19");
let loc20 = document.querySelector(".r2d20");
let loc21 = document.querySelector(".r2d21");
let loc22 = document.querySelector(".r2d22");
let loc23 = document.querySelector(".r2d23");
let loc24 = document.querySelector(".r2d24");
let loc25 = document.querySelector(".r2d25");
let loc26 = document.querySelector(".r2d26");
let loc27 = document.querySelector(".r2d27");
let loc28 = document.querySelector(".r2d28");
let loc29 = document.querySelector(".r2d29");
let loc30 = document.querySelector(".r2d30");
let loc31 = document.querySelector(".r2d31");
let loc32 = document.querySelector(".r2d32");
let loc33 = document.querySelector(".r2d33");
let loc34 = document.querySelector(".r2d34");
let loc35 = document.querySelector(".r2d35");
let loc36 = document.querySelector(".r2d36");
let loc37 = document.querySelector(".r2d37");
let loc38 = document.querySelector(".r2d38");
let loc39 = document.querySelector(".r2d39");
let loc40 = document.querySelector(".r2d40");
let loc41 = document.querySelector(".r2d41");
let loc42 = document.querySelector(".r2d42");
let loc43 = document.querySelector(".r2d43");
let loc44 = document.querySelector(".r2d44");
let cache = JSON.parse(localStorage.getItem("Name"));

function welcome() {
  let name = {
    Name: "",
  };
  if (cache) {
    next(cache);
  } else {
    notif.innerHTML = `Welcome`;
    loc1.innerHTML = `What's your name?`;
    loc2.innerHTML = `
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Name" id="userInput">
        <button class="btn btn-outline-success my-2 my-sm-0 submitBtn" type="submit" id="submitBtn">Submit</button>
        </form>
        `;
    let submit = document.getElementById("submitBtn");
    let nameEl = document.getElementById("userInput");
    submit.addEventListener("click", function (e) {
      e.preventDefault();
      if (name.Name === /[0-9]+/) {
        console.log(typeof name.Name);
        loc1.innerHTML = `Please enter name?`;
      } else {
        name.Name = nameEl.value;
        console.log(typeof name.Name);
        localStorage.setItem("Name", JSON.stringify(nameEl.value));
        next(name.Name);
      }
    });
  }
}

welcome();

function next(name) {
  notif.innerHTML = `Merry Christmas ${name}!`;
  loc1.innerHTML = `Niño's Wishlist:`;
  loc2.innerHTML = `
    <ul>
      <li><a href="https://www.amazon.com/gp/product/B005JABN8Y/ref=ox_sc_act_title_5?smid=A2DQM1XJZE28BS&psc=1" target="_blank">Bandai Hobby Thousand Sunny Model Ship One Piece New World Version</a></li>
      <li><a href="https://www.amazon.com/gp/product/B082TZ7R6W/ref=ox_sc_act_title_3?smid=A19KDY3KZZXO3B&psc=1" target="_blank">BanPresto One Piece King of Artist The Monkey.D.Luffy Figure ver.1</a></li>
      <li>Please get me the whole collection: #1-5</li>
      <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUSG2/ref=pd_sbs_21_1/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUSG2&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">1: Bandai Hobby Mecha Collection #1 Chopper Robot Tank Model Kit</a></li>
      <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUSAS/ref=pd_sbs_21_2/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUSAS&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">2: Bandai Hobby Mecha Collection #2 Chopper Robot Wing Model Kit</a></li>
      <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUW90/ref=pd_sbs_21_3/132-0790933-8652941?_encoding=UTF8&pd_rd_i=B00IAGUW90&pd_rd_r=f5a83d8e-de2f-4438-95d1-f893274213ce&pd_rd_w=Lw7Za&pd_rd_wg=PLOSC&pf_rd_p=ed1e2146-ecfe-435e-b3b5-d79fa072fd58&pf_rd_r=Z4GTJM834FA4J2Z4A2AQ&psc=1&refRID=Z4GTJM834FA4J2Z4A2AQ" target="_blank">4: Bandai Hobby Mecha Collection #4 Chopper Robot Drill Model Kit</a></li>
      <li><a href="https://www.amazon.com/Bandai-Hobby-Mecha-Collection-Chopper/dp/B00IAGUUBU/ref=sr_1_1?dchild=1&keywords=bandai+chopper+collection&qid=1607594064&sr=8-1" target="_blank">5: Bandai Hobby Mecha Collection #5 Chopper Robot Crane Model Kit</a></li>
      <li><a href="https://www.amazon.com/dp/B09111CM4X/ref=cm_sw_r_fm_api_glt_fabc_dl_QVB8NY61YSHNHR6AXWK2?fbclid=IwAR0lT47Mkshr12hDcwGZ4tAHXzTz22E0ThY5i60Erx9t24Q9dfnq8rpqZeM&th=1">Knife Set</a></li>
    </ul>
    `;
  loc3.innerHTML = `Mayne's Wishlist:`;
  loc4.innerHTML = `
    <ul>
      <li>Amazon Gift Card</li>
      <li><a href="https://www.drmartens.com/us/en/p/egift-cards?fbclid=IwAR1FGnX_qlOVtyG7vbqKdzKGn40Sp5zSG7LFBgSy29cOIL-oAsrZ67R9xkE">Dr Martens gift card</a></li>
      <li><a href="">Anything you think I like</a></li>
    </ul>
        `;
  loc5.innerHTML = `Carlos' Wishlist:`;
  loc6.innerHTML = `
    <ul>
    <li><a href="https://strawberry.af/password">black good juice hoodie M: Password: FREEHOOVER </a></li>
      <li><a href="https://www.winebid.com/BuyGiftCard/2435365">WineBid Gift Card</a></li>
      <li><a href="https://www.wine-searcher.com/find/maguey+single+village+wild+papalome+st+pedro+teozacoalco+mezcal+mexico">Vida Mezcal Wild Papalome</a></li>
      <li>Patagonia Jacket or Vest (Size M)</li>
      <li>Cash me outside how bout that</li>
    </ul>
        `;
  loc7.innerHTML = `Jenna Sabra's Wishlist:`;
  loc8.innerHTML = `
    <ul>
      <li>Cashmere scarves</li>
      <li>Tarot Card deck</li>
      <li>Mala</li>
      <li>Apparel/accessories etc</li>
    </ul>
              `;
  loc9.innerHTML = `Rajee's Wishlist:`;
  loc10.innerHTML = `
    <ul>
      <li><a href="https://www.amazon.com/dp/B08D39B6TB/ref=cm_sw_r_cp_api_glt_fabc_77T410NENC4DCKJAR5AZ?_encoding=UTF8&psc=1">Miracase 4-in-1 Cell Phone Holder</a></li>
      <li><a href="https://www.us-elitegear.com/collections/salomon/products/salomon-forces-sua-sponte-mark-iii">Solomonmon Forces 8.5 Size</a></li>
      <li><a href=""></a></li>
    </ul>
                    `;
  loc11.innerHTML = `Chinky's Wishlist:`;
  loc12.innerHTML = `
    <ul>
      <li><a href="https://atlascoffeeclub.com/collections/the-perfect-gift-for-any-coffee-lover/products/3-mo-gift?variant=5182231642151">Coffee Subscription Whole beans, light roast</a></li>
      <li><a href="https://fellowproducts.com/products/carter-move-mug?variant=32992024199268">Fellow Carter Move Mug 12oz Corduroy Red</a></li>
      <li><a href=""></a></li>
    </ul>
                    `;
  loc13.innerHTML = `Pafau's Wishlist:`;
  loc14.innerHTML = `
    <ul>
      <li>Warriors tickets (any game in Section 120-123; there are cheap ones in that section if the game against it is not with a famous team)</li>
      <li>Anything you think i’ll like 🙂</li>
      <li><a href=""></a></li>
    </ul>
                          `;
  loc15.innerHTML = `Gelli's Wishlist:`;
  loc16.innerHTML = `
    <ul>
      <li><a href="https://www.bestbuy.com/site/nintendo-switch-oled-model-w-white-joy-con-white/6470923.p?skuId=6470923">nintendo switch</a></li>
      <li><a href="https://www.flightclub.com/air-jordan-11-retro-low-gs-concord-bred-528896-160">jordan retro size 6 youth</a></li>
    </ul>
`;
  loc17.innerHTML = `Charo's Wishlist:`;
  loc18.innerHTML = `
    <ul>
      <li>Neutrogena body lotion or oil (light sesame formula)</li>
    </ul>
`;
  loc19.innerHTML = `Mayet's Wishlist:`;
  loc20.innerHTML = `
    <ul>
      <li><a href="https://shop.lululemon.com/p/bags/All-Night-Festival-Bag-Micro/_/prod9960617">Mustard colored Bag</a></li>
    </ul>
`;

  loc21.innerHTML = `Ariana's Wishlist:`;
  loc22.innerHTML = `
  <ul>
    <li>Chuck Taylor All star converse black (size 1.5)</li>
    <li>Sunset lamp </li>
    <li>anything you thing i whould like</li>
  </ul>
  `;
  loc23.innerHTML = `Rafael's Wishlist:`;
  loc24.innerHTML = `
  <ul>
    <li>Pokemon Cards</li>
    <li>Anime Toy Chipped Katana</li>
    <li>Electronic Dojo Battle</li>
    <li>Anime naruto sasuske uchina action figure</li>
    <li>toy pump action shotgun</li>
    <li>battery car Lamborghini sian</li>
    <li>Mandalorian Blaster</li>
  </ul>
      `;
  loc25.innerHTML = `Rowena's Wishlist:`;
  loc26.innerHTML = `
  <ul>
    <li>L-lysine Dietary Supliment</li>
    <li>Magnesium Glycinate</li>
  </ul>
      `;
  loc27.innerHTML = `Juliana's Wishlist:`;
  loc28.innerHTML = `
  <ul>
  <li><a href="https://www.glossier.com/products/the-makeup-set-beauty-bag">glossier- The makeup set + beauty bag</a></li>
  <li><a href="https://www.glowrecipe.com/collections/kits/products/glowipedia-glass-skin-kit">glow recipe - Glowipedia Glass Skin</a></li>
  <li><a href="https://www.ralphlauren.com/women-clothing-sweaters/cable-knit-v-neck-sweater/365662.html?dwvar365662_colorname=Cream&cgid=women-clothing-sweaters&webcat=women%2Fclothing%2FSweaters#webcat=women%257Cclothing%257CSweaters&start=1&cgid=women-clothing-sweaters">ralph lauren sweater xxs-s cream color</a></li>
  </ul>
            `;
  loc29.innerHTML = `Nica's Wishlist:`;
  loc30.innerHTML = `
  <ul>
    <li>huda beauty power bullet matte lipstick board meeting </li>
    <li>converse chuck taylor all star move black size 6.5</li>
    <li><a href="https://smglobalshop.com/products/pre-order-aespa-the-1st-mini-album-savage-photobook-ver">aespa savage album </a></li>
  </ul>
                  `;
  loc31.innerHTML = `Kriston's Wishlist:`;
  loc32.innerHTML = `
  <ul>
    <li><a href="https://www.amazon.com/Nintendo-Switch-Pro-Controller/dp/B01NAWKYZ0/ref=sr_1_13?_encoding=UTF8&c=ts&keywords=Nintendo+Switch+Accessories&qid=1638986932&s=videogames&sr=1-13&ts_id=16227129011
    https://www.bestbuy.com/site/pro-wireless-controller-for-nintendo-switch/5748618.p?skuId=5748618">Switch Pro Controller</a></li>
    <li><a href="https://www.amazon.com/Nintendo-Joy-Neon-Red-Blue-switch/dp/B01N6QJ58Y/ref=sr_1_3?_encoding=UTF8&c=ts&keywords=Nintendo+Switch+Controllers&qid=1638987372&s=videogames&sr=1-3&ts_id=16329781011">Xtra Switch Joycons </a></li>
    <li><a href="https://www.bestbuy.com/site/microsoft-xbox-series-s-512-gb-all-digital-console-disc-free-gaming-white/6430277.p?skuId=6430277">Xbox </a></li>
    <li><a href="https://www.amazon.com/SAMSUNG-MZ-V8V1T0B-AM-980-SSD/dp/B08V83JZH4/ref=sr_1_5?keywords=ssd&qid=1638988048&sr=8-5">1TB SSD for laptop </a></li>
    <li>Nintendo eShop Gift Card</a></li>
  </ul>
                  `;
  loc33.innerHTML = `'s Wishlist:`;
  loc34.innerHTML = `
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
                        `;
  loc35.innerHTML = ` Wishlist:`;
  loc36.innerHTML = `
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
`;
  loc37.innerHTML = ` Wishlist:`;
  loc38.innerHTML = `
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
`;
  loc39.innerHTML = ` Wishlist:`;
  loc40.innerHTML = `
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
`;
  loc41.innerHTML = ` Wishlist:`;
  loc42.innerHTML = `
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
`;
  loc43.innerHTML = ` Wishlist:`;
  loc44.innerHTML = `
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
`;

  console.log(name);
}
