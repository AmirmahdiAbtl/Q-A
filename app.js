var temp = "1";
var flag ="0";
$(".far").click((e)=>{
    if(flag!=="0"){
        if(flag.classList[2] === e.target.classList[2]){
            temp.children[1].style.display = "none";
            temp.children[0].style.borderRadius = "0.5rem";
            temp = "1";
            flag="0"
            return 0;
        }
    }
    if(e.target.classList[0] === "far"){
        if(temp!=="1"){
            temp.children[1].style.display = "none";
            temp.children[0].style.borderRadius = "0.5rem";
        }
        var p =e.target.parentNode.parentNode.parentNode;
        p.children[1].style.display ="grid";
        p.children[0].style.borderRadius = "0.5rem 0.5rem 0 0";
        temp = p ;
        flag = e.target;
    }
})