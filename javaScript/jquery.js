
// for login and register validation

let namee, email, phone, gender, password, cPassword, formNode,formNode1, namee1,email1, password1, display, display1,check, sp, sp1, sp2, sp3, sp4, sp5, sp6;

$(() => {
    $('#contact1').hide();
    $('#contact2').hide();
    $('#mainBtn').click(() => {
        $("#contact1").show();
        $("#contact2").hide();

    });
    $('#mainBtn2').click(() => {
        $("#contact1").hide();
        $("#contact2").show();
    });

    namee = $('#name');
    namee1 = $('#name1');
    email = $('#email');
    phone = $('#phone');
    gender = $('#gender');
    password = $('#password');
    cPassword = $('#cPassword');
    formNode = $('#formNode');
    formNode1 = $('#formNode1');
    check = $('#check');
    email1 = $('#email1');
    password1 = $('#password1');
    display = $('.cred');
    sp = $('#sp');
    sp1 = $('#sp1');
    sp2 = $('#sp2');
    sp3 = $('#sp3');
    sp4 = $('#sp4');
    sp5 = $('#sp5');
    sp6 = $('#sp6');
    sp7 = $('#sp7');

    namee.blur(() => validation());
    email.blur(() => validation1());
    phone.blur(() => validation2());
    password.blur(() => validation3());
    cPassword.blur(() => validation4());
    check.change(() => hideShow());
    namee1.blur(() => validation7());
    email1.blur(() => validation5());
    password1.blur(() => validation6());
    formNode.submit((event) => {
        if (formValidation()) {
            alert("Registerd Successfully now Please click on Login Button to login");
        }
        else {
            event.preventDefault();
        }
    })
    formNode1.submit((event) => {
        if (formValidation1()) {
            displayFun();
            event.preventDefault();
            console.log('didu')
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
        sp2.html("<strong>!Please fill out the field</strong>");
        sp2.css({ color: "red" })
        phone.css({ border: "2px solid red",   })
        return false;
    }
    else if (num.length > 12) {
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
    password.css({ border: "2px solid green" });
    sp3.html(" ");

    let pass = password.val();
    console.log(pass);
    let regexpress = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if (pass === "") {
        sp3.html("<strong>! Password cannot be empty</strong>");
        sp3.css({ color: "red" })
        password.css({ border: "2px solid red", })
        return false;
    }
    else if (pass < 4 || pass >= 9) {
        sp3.html("<strong>Length should be between 3 to 8</strong>");
        sp3.css({ color: "red" })
        password.css({ border: "2px solid red", })
        return false;
    }
    else if (regexpress.test(pass) === false) {
        sp3.html("<strong>! Password should Contain atleast one capital letter,one smal letter, one number and one special character</strong>");
        sp3.css({ color: "red" })
        password.css({ border: "2px solid red", })
        return false;
    }
    else {
        return true;
    }

}

let validation4 = () => {
    cPassword.css({ border: "2px solid green" });
    sp4.html(" ");

    let pass = password.val();
    let confirmPass = cPassword.val();
    console.log(confirmPass);

    if (confirmPass === "") {
        sp4.html("<strong> ! Password cannot be empty</strong>");
        sp4.css({ color: "red" })
        cPassword.css({ border: "2px solid red" })
        return false;
    }
    else if (pass != confirmPass) {
        sp4.html("<strong>! password should match</strong>");
        sp4.css({ color: "red" })
        cPassword.css({ border: "2px solid red",})
        return false;
    }
    else {
        return true;
    }

}
let validation5 = () => {
    email1.css({ border: "2px solid green" });
    sp5.html(" ");

    let str = email1.val();
    let ss = str.substring(str.indexOf("@") + 1)
    if (str == "") {
        sp5.html("<strong>! Please fill out the field</strong>");
        sp5.css({ color: "red" })
        email1.css({ border: "2px solid red"})
        return false;

    }
    else if (!str.includes("@") || ss === "") {
        sp5.html("<strong>! Please enter valid Email</strong>");
        sp5.css({ color: "red" })
        email1.css({ border: "2px solid red" })
        return false;
    }
    else {
        return true;
    }
}
let validation6 = () => {
    password1.css({ border: "2px solid green" });
    sp6.html(" ");

    let pass = password1.val();
    console.log(pass);
    let regexpress = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    if (pass === "") {
        sp6.html("<strong>Password cannot be empty</strong>");
        sp6.css({ color: "red" })
        password1.css({ border: "2px solid red" })
        return false;
    }
    else if (pass < 4 || pass >= 9) {
        sp6.html("<strong>Length should be between 3 to 8</strong>");
        sp6.css({ color: "red" })
        password1.css({ border: "2px solid red" })
        return false;
    }
    else if (regexpress.test(pass) === false) {
        sp6.html("<strong>! Password should Contain atleast one capital letter,one smal letter, one number and one special character</strong>");
        sp6.css({ color: "red" })
        password1.css({ border: "2px solid red"})
        return false;
    }
    else {
        return true;
    }

}
let validation7 = () => {
    namee1.css({ border: "2px solid green" });
    sp7.html(" ");

    if (namee1.val() === "") {
        sp7.html("<strong> ! Please fill out the field</strong>");
        sp7.css({ color: "red" })
        namee1.css({ border: "2px solid red" })
        return false;
    }
    else {
        return true;
    }
}
let hideShow = () => {

    if (check.prop('checked')) {
        password.attr("type", "text");
        cPassword.attr("type", "text");
    }
    else {
        password.attr("type", "password");
        cPassword.attr("type", "password");
    }
}


let displayFun = () => {
    $('#contact1').hide();
    $('#contact2').hide();
    display.html(`<h1>Hello ${namee1.val()} !</h1>
    <h1>Welcome to Amruta's Web Design Pro Company</h1>
    <h1>Apply many jobs and do check out our services and about page</h1>
    
    `)
    display.css({
        fontSize: '50px',
        height: '500px',
        background: 'linear-gradient(rgb(255, 255, 255),rgb(39, 33, 38))'
    })
}

let formValidation = () => {
    let str = validation();
    let str1 = validation1();
    let str2 = validation2();
    let str3 = validation3();
    let str4 = validation4();
    if (str && str1 && str2 && str3 && str4) {
        return true;
    }
    else {
        return false;
    }
}
let formValidation1 = () => {
    let str5 = validation5();
    let str6 = validation6();
    let str7 = validation7();

    if (str5 && str6 && str7) {
        return true;
    }
    else {
        return false;
    }
}

