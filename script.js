let startbox = document.querySelector(".start-box");
let click = document.querySelector("#btn-counter");
let input = document.querySelector("#input-counter");
let error = document.querySelector(".erorr");
let timer = document.querySelector(".c100");
let timer_num = document.querySelector(".c100 > span");
let looding = document.querySelector(".massage > .looding");
let sucsess = document.querySelector(".massage > .sucsess");



click.addEventListener("click",(e) => {
    let secend = parseInt(input.value);
    sucsess.classList.remove("active");

    if(isNaN(secend)){
        error.classList.add("active");
        error.textContent ="لطفا زمان را به درستی وارد کنید!";
        input.value = "";
        return;
    }
    error.classList.remove("active");
    timer.classList.add("active");
    startbox.classList.add("disable");
    timer_num.textContent = secend;
    let orginalsecend = secend;
    let psecend = "";
    setId = setInterval(()=>{
        if(secend <= 0){
            timer.classList.remove("active");
            looding.classList.remove("active");
            startbox.classList.remove("disable");
            sucsess.classList.add("active");
            input.value ='';
            timer.classList.remove(psecend); 
            return clearInterval(setId);
        }
        if(psecend)    timer.classList.remove(psecend); 
        secend -= 1;
        timer_num.textContent = secend;
        let p_num = Math.floor(((orginalsecend - secend) / orginalsecend ) * 100);
        psecend = `p${p_num}`;
        timer.classList.add(`p${p_num}`);
        looding.classList.add("active");
    },1000)

})