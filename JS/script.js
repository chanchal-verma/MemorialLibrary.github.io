function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}

function validation() {

    var error = false;

    var N = document.getElementById('name').value;
    var A = document.getElementById('age').value;
    var city = document.getElementById('city').value;
    var Email = document.getElementById('email').value;
    var P = document.getElementById('Password1').value;
    var c = document.getElementById('conPassword').value;
    var n = document.getElementById('input-number').value;
    var a = document.getElementById('inputAddress').value;
    var confirm = document.getElementById("confirmation").checked;

    var Name = N.trim();
    var Age = A.trim();
    var Pass = P.trim();
    var conpas = c.trim();
    var number = n.trim();
    var address = a.trim();

    //for checkboxes

    var check1 = document.getElementById('defaultCheck1').checked;
    var check2 = document.getElementById('defaultCheck2').checked;
    var check3 = document.getElementById('defaultCheck3').checked;
    var check4 = document.getElementById('defaultCheck4').checked;

    //for radiobuttons
    var check5 = document.getElementById('customControl1').checked;
    var check6 = document.getElementById('customControl2').checked;


    //validations of name
    if (Name == "") {
        document.getElementById('namee').innerHTML = "**Please enter your Name**";
        error = true;
    }
    else if (Name.length < 2) {
        document.getElementById('namee').innerHTML = "**Please enter a correct Name**";
        error = true;
    }
    else if (!isNaN(Name)) {
        document.getElementById('namee').innerHTML = "**Please enter Alphabets**";
        error = true;
    }
    else {
        document.getElementById('namee').innerHTML = "";
    }


    //validations of age
    if (Age == "") {
        document.getElementById('agee').innerHTML = "**Please enter your Age**";
        error = true;
    }
    else if (!((Age > 0) && (Age < 120))) {
        document.getElementById('agee').innerHTML = "**Please enter a correct Age**";
        error = true;
    }
    else {
        document.getElementById('agee').innerHTML = "";
    }

    // validations for city
    if(city=="")
    {
        document.getElementById('City').innerHTML = "**Please choose your city**";
        error = true;
    }
    //validations for radiobuttons

    if ((check5 == false) && (check6 == false)) {
        document.getElementById('radio-button').innerHTML = "**Please choose any one gender**";
        error = true;
    }
    else {
        document.getElementById('radio-button').innerHTML = "";
    }


   //validations for checkboxes

    if ((check1 == "") && (check2 == "") && (check3 == "") && (check4 == "")) {
        document.getElementById('check-box').innerHTML = "**Please choose atleast one hobby**";
        error = true;
    }
    else {
        document.getElementById('check-box').innerHTML = "";
    }


    //validations for email-id
    if (Email == "") {
        document.getElementById('Emaill').innerHTML = "**Please enter your Email-id**";
        error = true;
    }
    else {
        document.getElementById('Emaill').innerHTML = "";
    }

    //validations for password
    if (Pass == "") {
        document.getElementById('password').innerHTML = "**Please enter your Password**";
        error = true;
    }
    else if (Pass.length < 8) {
        document.getElementById('password').innerHTML = "**Password should have atleast 8 characters**";
        error = true;
    }
    else {
        document.getElementById('password').innerHTML = "";
    }

    //validatios for confirmation of password
    if (conpas == "") {
        document.getElementById('conpass').innerHTML = "**Please confirm your Password**";
        error = true;
    }
    else if (conpas != Pass) {
        document.getElementById('conpass').innerHTML = "**Please enter a correct Password**";
        error = true;
    }
    else {
        document.getElementById('conpass').innerHTML = "";
    }

    //validations of number
    if (number == "") {
        document.getElementById('numberr').innerHTML = "**Please enter your contact-number**";
        error = true;
    }
    else if (number.length != 10) {
        document.getElementById('numberr').innerHTML = "**Please enter a 10 digit number**";
        error = true;
    }
    else {
        document.getElementById('numberr').innerHTML = "";
    }

    //validations of address
    if (address == "") {
        document.getElementById('addresss').innerHTML = "**Please enter your Address**";
        error = true;
    }
    else if (!((address.length > 200))) {
        document.getElementById('addresss').innerHTML = "**Length of Address should be atleast 200**";
        error = true;
    }
    else if (!(address.length < 500)) {
        document.getElementById('addresss').innerHTML = "**Length of Address should be atmost 500**";
        error = true;
    }
    else {
        document.getElementById('addresss').innerHTML = "";

    }

    // validation for checkbox
    if (confirm==false) {
        document.getElementById('confirm').innerHTML = "**Please agree to the terms and conditions**";
        error = true;
    }
    else {
        document.getElementById('confirm').innerHTML = "";
    }



    if(error)
    {
        return false;
    }
    return true;

}