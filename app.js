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
        notif.innerHTML = `Welcome back ${cache}!`;
        loc1.innerHTML = `My Wishlist:`;
        loc2.innerHTML = `Item1`;
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
    loc2.innerHTML = `Item1`;
    console.log(name);
}
