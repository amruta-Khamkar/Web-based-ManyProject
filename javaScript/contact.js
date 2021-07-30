// Validation Of Contact Form 

let namee, email, phone,sp, sp1, sp2,formNode;
$(()=>{
    namee = $('#name');
    email = $('#email');
    phone = $('#phone');
    formNode = $('#formNode');

    
    sp = $('#sp');
    sp1 = $('#sp1');
    sp2 = $('#sp2');

    namee.blur(() => validation());
    email.blur(() => validation1());
    phone.blur(() => validation2());

    formNode.submit((event) => {
        if (formValidation()) {
            alert("Thank You for Your Valuable Feedback!");
        }
        else {
            event.preventDefault();
        }
    })
    $('.i1').click(()=>{
        alert("Thank You for following Us! Have a Good Day")
    })
   
})
let validation = () => {
    namee.css({ border: "2px solid green" });
    sp.html(" ");

    if (namee.val() === "") {
        sp.html("<strong> ! Please fill out the field</strong>");
        sp.css({ color: "red" })
        namee.css({ border: "2px solid red"})
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
        email.css({ border: "2px solid red"})
        return false;

    }
    else if (!str.includes("@") || ss === "") {
        sp1.html("<strong>! Please enter valid Email</strong>");
        sp1.css({ color: "red" })
        email.css({ border: "2px solid red"})
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
        phone.css({ border: "2px solid red"})
        return false;
    }
    else if (num.length > 12|| num.length<10) {
        phone.css({ border: "2px solid red"})
        sp2.html("<strong>! Please enter proper phone number </strong>");
        sp2.css({ color: "red" })
        return false;
    }
    else {
        return true;
    }

}
let formValidation = () => {
    let str = validation();
    let str1 = validation1();
    let str2 = validation2();

    if (str && str1 && str2) {
        return true;
    }
    else {
        return false;
    }
}