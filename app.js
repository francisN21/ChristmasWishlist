let notif = document.querySelector(".main");
let show = document.querySelectorAll(".hide-me");
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
let loc45 = document.querySelector(".r2d45");
let loc46 = document.querySelector(".r2d46");
let loc47 = document.querySelector(".r2d47");
let loc48 = document.querySelector(".r2d48");
let loc49 = document.querySelector(".r2d49");
let loc50 = document.querySelector(".r2d50");
let loc51 = document.querySelector(".r2d51");
let loc52 = document.querySelector(".r2d52");
let loc53 = document.querySelector(".r2d53");
let loc54 = document.querySelector(".r2d54");
let loc55 = document.querySelector(".r2d55");
let loc56 = document.querySelector(".r2d56");
let loc57 = document.querySelector(".r2d57");
let loc58 = document.querySelector(".r2d58");
let loc59 = document.querySelector(".r2d59");

let cache = JSON.parse(localStorage.getItem("Name"));

const showAll = () => {
  for (let i = 0; i < show.length; i++) {
    show[i].setAttribute("style", "visibility: visible;");
  }
};
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
  showAll();
  notif.innerHTML = `Merry Christmas ${name}!`;
  loc1.innerHTML = `Niño's Wishlist:`;
  loc2.innerHTML = `
    <ul>
      <li><a href="https://www.z1motorsports.com/z1-products/z1-motorsports/z1-motorsports-350z-g35-aluminum-undershroud-p-12133.html?list_name=CategoryZ1Products&oid=12133%3A0%3A7%3A2&qid=d82b23db70ed5ffc93246a70738cfa09">Z1 Motorsports 350Z / G35 Aluminum Undershroud</a></li>
      <li><a href="https://www.z1motorsports.com/z1-products/z1-motorsports/z1-upgraded-350z-hatch-struts-p-5336.html?list_name=Also+Purchased">Z1 Upgraded 350Z Hatch Struts</a></li>
      <li><a href="https://www.amazon.com/dp/B09111CM4X/ref=cm_sw_r_fm_api_glt_fabc_dl_QVB8NY61YSHNHR6AXWK2?fbclid=IwAR0lT47Mkshr12hDcwGZ4tAHXzTz22E0ThY5i60Erx9t24Q9dfnq8rpqZeM&th=1">Knife Set</a></li>
    </ul>
    `;
  loc3.innerHTML = `Mayne's Wishlist:`;
  loc4.innerHTML = `
    <ul>
      <li>Amazon Gift Card</li>
      <li><a href="https://www.drmartens.com/us/en/p/egift-cards?fbclid=IwAR1FGnX_qlOVtyG7vbqKdzKGn40Sp5zSG7LFBgSy29cOIL-oAsrZ67R9xkE">Dr Martens gift card</a></li>
      <li><a href="https://www.amazon.com/LifeFair-Mounted-Standing-Bedroom-Aluminum/dp/B0936WFCV4/ref=sr_1_2_sspa?crid=37US7X9EG845M&keywords=mirror%2Bfull%2Blength&qid=1639287104&sprefix=mirror%2Caps%2C244&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyN1lHVVU0VU0xWUlVJmVuY3J5cHRlZElkPUEwNzMwOTE4Mkk1TUVHU0U4RElQQSZlbmNyeXB0ZWRBZElkPUEwNjM0Nzg5MVpaT0k2RTlBSllNMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&fbclid=IwAR2uOuLhy6N1h7Zho1mOzg6oJ_yVApiNh94e6wqotANMD9Y3b4TrBRV4JXI">This huge mirror. Ship to 9405 S Eastern Ave, Apt 1003, Las Vegas, NV 89123 please. Thanks.</a></li>
      <li>Anything you think I'll like</li>
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
  loc33.innerHTML = `Noel's Wishlist:`;
  loc34.innerHTML = `
  <ul>
    <li>2008 subaru wrx sti roof racks</li>
    <li>Bluetooth Projector</li>
    <li>Knives</li>
    <li>Cash me outside how bout that</li>
  </ul>
                        `;
  loc35.innerHTML = `Angelique’s Wishlist:`;
  loc36.innerHTML = `
  <ul>
    <li><a href="https://www.nike.com/t/air-force-1-lv8-s50-big-kids-shoe-NRhXlj ">AirForce 1 size 4 in kids</a></li>
    <li><a href="https://www.macys.com/shop/product/burberry-my-burberry-blush-eau-de-parfum-spray-1.6-oz.?ID=12420240">My Burberry Blush Eau de Parfum Spray</a></li>
    <li><a href="https://www.famousfootwear.com/product/crocs-womens-classic-clog-1039626?partnerid=google_free_shopping&fbclid=IwAR2lQavF-7JbmGc84Y5ekSMT_H7_qtxMj1dajbLAecW5tmfADheyVxjJzTs">Crocs size 5 women</a></li>
    <li><a href="https://www.finishline.com/store/browse/productDetail.jsp?productId=prod20520001&brand_name=CROCS&styleId=10001W&colorId=645&gclid=Cj0KCQiAzMGNBhCyARIsANpUkzP0am0MIukb6x1-uC6rSrrpNDYchxjZe_x_aqqrRYC4ywM2Wc6meCQaAgNMEALw_wcB&gclsrc=aw.ds">AirJordan 11 size 5 in women</a></li>
    <li><a href="https://www.target.com/p/women-s-natasha-lug-soled-sock-boots-a-new-day-black/-/A-82849184?fbclid=IwAR287-MjbIAfk1kn7WjbPAkUSxsLHDMtrH0euTNERwIH1efXJOpi1Gljsfc">Women's Natasha Lug Soled Sock Boots. Size 6 in Women</a></li>
  </ul>
`;
  loc37.innerHTML = `Devin's Wishlist:`;
  loc38.innerHTML = `
  <ul>
    <li>men's black crocs (11)</li>
    <li>nike men's sweatshirt/sweatpants (L)</li>
    <li>nike long socks</li>
  </ul>
`;
  loc39.innerHTML = `Jenna Nubla's Wishlist:`;
  loc40.innerHTML = `
  <ul>
    <li>woman's nike sweatshirt/sweatpants (M)</li>
    <li>woman's black or pink crocs (7)</li>
    <li>anything cool & pink</li>
  </ul>
`;
  loc41.innerHTML = `Ninna's Wishlist:`;
  loc42.innerHTML = `
  <ul>
    <li>Counter topIce Maker Machine</li>
    <li>Totang</li>
    <li>Burp</li>
  </ul>
`;
  loc43.innerHTML = `Nate's Wishlist:`;
  loc44.innerHTML = `
  <ul>
    <li>Nike Black Sweatpants Medium</li>
    <li>Crocs Size 9</li>
    <li>Cash</li>
    <li>Anything you think I'd like</li>
  </ul>
`;
  loc45.innerHTML = `Jason's Wishlist:`;
  loc46.innerHTML = `
<ul>
  <li>White t-shirt polo Ralph Lauren v-neck Medium size</li>
</ul>
`;
  loc47.innerHTML = `Lola Iska's Wishlist:`;
  loc48.innerHTML = `
<ul>
  <li>A very nice earrings /w diamond or any precious stone</li>
</ul>
`;
  loc49.innerHTML = `Rowell's Wishlist:`;
  loc50.innerHTML = `
<ul>
  <li><a href="https://kaarigarhandicrafts.com/products/pure-copper-pitcher-set">Copper Pitcher Set</a></li>
  <li><a href="https://kaarigarhandicrafts.com/products/copper-bottle">Copper Water Bottle</a></li>
</ul>
`;
  loc51.innerHTML = `Karl's Wishlist:`;
  loc52.innerHTML = `
<ul>
  <li>esstac seven round shotgun card(12 gauge, with Velcro, wolf grey) x 3pack</li>
</ul>
`;
  loc53.innerHTML = `Amihan's Wishlist:`;
  loc54.innerHTML = `
<ul>
  <li>hatchimal fairy crocs: Size 7 kids: Color pink</li>
  <li>Toys</li>
  <li>Anything you want to buy for Amihan</li>
</ul>
`;
  loc55.innerHTML = `Barbie's Wishlist:`;
  loc56.innerHTML = `
<ul>
  <li>Snow Pants Womens size Small</li>
  <li>Anything you think I'd like</li>
</ul>
`;

  loc57.innerHTML = ``;
  loc58.innerHTML = `

`;

  console.log(name);
}
