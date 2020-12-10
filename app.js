let notif = document.querySelector(".repo");
let loc1 = document.querySelector(".r2d1");
let loc2 = document.querySelector(".r2d2");
let loc3 = document.querySelector(".r2d3");
let loc4 = document.querySelector(".r2d4");


let name = {
    Name: ""
};



function welcome() {
    notif.innerHTML = `Welcome`;
    loc1.innerHTML = `What's your name?`;
    loc2.innerHTML = `
    <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Name" aria-label="Search" id="userInput">
    <button class="btn btn-outline-success my-2 my-sm-0 submitBtn" type="submit" id="submitBtn">Submit</button>
    </form>
    `;
    let submit = document.getElementById('submitBtn');
    let nameEl = document.getElementById('userInput');
    submit.addEventListener('click', function(e){
        e.preventDefault();
        name.Name = nameEl.value;
        console.log(name);
        next();
    });
};

welcome();

function next() {
    notif.innerHTML = `Merry Christmas ${name.Name}`;
    loc1.innerHTML = `My Wishlist`;
    loc2.innerHTML = `Item1`;
    console.log(name);
}
