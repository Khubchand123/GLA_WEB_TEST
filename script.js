let con = document.querySelector(".add");
let but = document.querySelector("#a");
but.addEventListener('click',()=>{
    console.log("hi")
    let div = document.createElement('div');
    div.classList.add("a7");
    // div.classList.add(".a8");
    con.appendChild(div);
})

