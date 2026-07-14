let u = document.getElementById("uname")
let p = document.getElementById("pass")
let m = document.getElementById("msg")
let h=document.getElementById("heading")

function loginb(){

    if(u.value=='kunal' && p.value=='loveyou'){
        m.innerHTML="Login successful guys"
    }
    else{
        m.innerHTML="Login unsuccessful guys"
    }
}

function changeheading(){
    h.innerHTML="my name is kunal";
    
}

