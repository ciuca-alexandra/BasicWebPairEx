$(document).ready(function() {
    $('#btn_submit').click(function(e) {

        var first_name = $('#first-name').val();
        var last_name = $('#last-name').val();
        var email = $('#email').val();
        var phone_number = $('#phone-number').val();
        var address = $('#address').val();
        var postal_code = $('#postal-code').val();

        var rgx_name = new RegExp('^[a-zA-Z- ]+$');
        var rgx_email = new RegExp('[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}');
        var rgx_phone = new RegExp('^[0-9]+$');
        var rgx_adr = new RegExp('[A-Za-z-0-9*-.,; ]');
        var rgx_code = new RegExp('^[0-9]+$');

        if (!first_name.match(rgx_name)) {
            alert("Incorrect first name!");
            $("#first-name").focus();
            return false;
        }

        if (!last_name.match(rgx_name)) {
            alert("Incorrect last name!");
            $("#last-name").focus();
            return false;
        } else if (!email.match(rgx_email)) {
            alert("Incorrect email address!");
            $("#femail1").focus();
            return false;
        } else if (!phone_number.match(rgx_phone)) {
            alert("Incorrect phone number!");
            $("#phone-number").focus();
            return false;
        } else if (!address.match(rgx_adr)) {
            alert("Incorrect address!");
            $("#address").focus();
            return false;
        } else if (!postal_code.match(rgx_code)) {
            alert("Incorrect postal code!");
            $("#postal-code").focus();
            return false;
        } else {
            alert("Thank you! Your application was sent!");
            return true;
        }
    });
});