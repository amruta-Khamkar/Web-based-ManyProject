// for  changing backgroundImage

 $(()=>{
    $('.hidden').hide();
    $('.card1').css({color:'white'});
    $('.card2').css({color:'white'});
    $('.card3').css({color:'blue'});
    $('.card4').css({color:'white'});
    $('.card').mouseover(()=>{
        $('.card').css({
            backgroundImage:"url('/imgs/webDev2.jpg')",
        })
    })
    $('.card').mouseout(()=>{
        $('.card').css({
            backgroundImage:"url('/imgs/webDev.jpg')",
        })
    })


    $('.card1').mouseover(()=>{
        $('.card1').css({
            backgroundImage:"url('/imgs/weDes2.jpg')",
        })
        $('.card1>p').css({color:'black'})
    })
    $('.card1').mouseout(()=>{
        $('.card1').css({
            backgroundImage:"url('/imgs/webDes.jpg')",
        })
        $('.card1>p').css({color:'white'})
    })


    $('.card2').mouseover(()=>{
        $('.card2').css({
            backgroundImage:"url('/imgs/react2.jpg')",
        })
        $('.card2>p').css({color:'white'})
    })
    $('.card2').mouseout(()=>{
        $('.card2').css({
            backgroundImage:"url('/imgs/react1.jfif')",
        })
        $('.card2>p').css({color:'white'})
    })


    $('.card3').mouseover(()=>{
        $('.card3').css({
            backgroundImage:"url('/imgs/angular2.png')",
        })
        $('.card3>p').css({color:'black'})
    })
    $('.card3').mouseout(()=>{
        $('.card3').css({
            backgroundImage:"url('/imgs/angular1.jpg')",
        })
        $('.card3>p').css({color:'blue'})
    })


    $('.card4').mouseover(()=>{
        $('.card4').css({
            backgroundImage:"url('/imgs/vue2.png')",
        })
        $('.card4>p').css({color:'black'})
    })
    $('.card4').mouseout(()=>{
        $('.card4').css({
            backgroundImage:"url('/imgs/vue1.png')",
        })
        $('.card4>p').css({color:'white'})
    })
    

    $('.card5').mouseover(()=>{
        $('.card5').css({
            backgroundImage:"url('/imgs/ts2.jpg')",
        })
        $('.card5>p').css({color:'white'})
    })
    $('.card5').mouseout(()=>{
        $('.card5').css({
            backgroundImage:"url('/imgs/ts1.svg')",
        })
        $('.card5>p').css({color:'black'})
    })

    $('.card,.card1,.card2,.card3,.card4,.card5').click(()=>{
        $('.hidden').show();
    })

 });

//  Validations 

// for Applying job

let namee, email, phone,cName,ssc,hsc,cgpa, resume,check,formNode,sp, sp1, sp2, sp3, sp4, sp5, sp6;

$(() => {

    namee = $('#name');
    email = $('#email');
    phone = $('#phone');
    cName = $('#cName');
    ssc = $('#ssc');
    hsc = $('#hsc');
    cgpa = $('#cgpa');
    resume = $('#resume');
    formNode = $('#formNode');
    check = $('#check');



    sp = $('#sp');
    sp1 = $('#sp1');
    sp2 = $('#sp2');
    sp3 = $('#sp3');
    sp4 = $('#sp4');
    sp5 = $('#sp5');
    sp6 = $('#sp6');
    sp7 = $('#sp7');
    sp8 = $('#sp8');

    namee.blur(() => validation());
    email.blur(() => validation1());
    phone.blur(() => validation2());
    cName.blur(() => validation3());
    ssc.blur(() => validation4());
    hsc.blur(() => validation5());
    cgpa.blur(() => validation6());
    resume.blur(() => validation7());
    check.blur(() => validation8());
    formNode.submit((event) => {
        if (formValidation()) {
            alert("Thank You for applying! Our HR team will get back to you soon...Check Your Email regularly");
        }
        else {
            event.preventDefault();
        }
    })
   

});
let validation = () => {
    namee.css({ border: "2px solid green" });
    sp.html(" ");

    if (namee.val() === "") {
        sp.html("<strong> ! Please fill out the field</strong>");
        sp.css({ color: "red" })
        namee.css({ border: "2px solid red",   })
        return false;
    }
    else {
        return true;
    }
}


let validation1 = () => {
    email.css({ border: "2px solid green" });
    sp1.html(" ");

    let str = email.val();
    let ss = str.substring(str.indexOf("@") + 1)
    if (str == "") {
        sp1.html("<strong>! Please fill out the field</strong>");
        sp1.css({ color: "red" })
        email.css({ border: "2px solid red",   })
        return false;

    }
    else if (!str.includes("@") || ss === "") {
        sp1.html("<strong>! Please enter valid Email</strong>");
        sp1.css({ color: "red" })
        email.css({ border: "2px solid red",   })
        return false;
    }
    else {
        return true;
    }
}

let validation2 = () => {
    phone.css({ border: "2px solid green" });
    sp2.html(" ");


    num = phone.val();
    if (num == "") {
        sp2.html("<strong>! Please fill out the field</strong>");
        sp2.css({ color: "red" })
        phone.css({ border: "2px solid red",   })
        return false;
    }
    else if (num.length > 12|| num.length<10) {
        phone.css({ border: "2px solid red",   })
        sp2.html("<strong>! Please enter proper phone number </strong>");
        sp2.css({ color: "red" })
        return false;
    }
    else {
        return true;
    }

}
let validation3 = () => {
    cName.css({ border: "2px solid green"});
    sp3.html(" ");;

    if (cName.val() === "") {
        sp3.html("<strong> ! Please fill out the field</strong>");
        sp3.css({ color: "red" })
        cName.css({ border: "2px solid red",   })
        return false;
    }
    else {
        return true;
    }
}

let validation4 = () => {
    ssc.css({ border: "2px solid green"});
    sp4.html(" ");;

    if (ssc.val() === "") {
        sp4.html("<strong> ! Please fill out the field</strong>");
        sp4.css({ color: "red" })
        ssc.css({ border: "2px solid red",   })
        return false;
    }
    else {
        return true;
    }
}
let validation5 = () => {
    hsc.css({ border: "2px solid green"});
    sp5.html(" ");;

    if (hsc.val() === "") {
        sp5.html("<strong> ! Please fill out the field</strong>");
        sp5.css({ color: "red" })
        hsc.css({ border: "2px solid red",   })
        return false;
    }
    else {
        return true;
    }
}
let validation6 = () => {
    cgpa.css({ border: "2px solid green"});
    sp6.html(" ");;

    if (cName.val() === "") {
    sp6.html("<strong> ! Please fill out the field</strong>");
        sp6.css({ color: "red" })
        cgpa.css({ border: "2px solid red",   })
        return false;
    }
    else {
        return true;
    }
}
let validation7 = () => {
    resume.css({ border: "2px solid green"});
    sp7.html(" ");;

    if (resume.val() === "") {
    sp7.html("<strong> ! Please Upload Your Resume</strong>");
        sp7.css({ color: "red" })
        resume.css({ border: "2px solid red"})
        return false;
    }
    else {
        return true;
    }
}
let validation8 = () => {
    sp8.html(" ");
    if(check.prop('checked')){
       return true;
    }
    else{
       sp8.html("<strong>! Please agree to the terms and conditions</strong>");
       sp8.css({ color: "red" })
       return false;
    }
}



let formValidation = () => {
    let str = validation();
    let str1 = validation1();
    let str2 = validation2();
    let str3 = validation3();
    let str4 = validation4();
    let str5 = validation5();
    let str6 = validation6();
    let str7 = validation7();
    let str8 = validation8();
    if (str && str1 && str2 && str3 && str4 && str5 && str6 && str7 && str8) {
        return true;
    }
    else {
        return false;
    }
}




