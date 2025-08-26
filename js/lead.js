function postLead() {        
    $('.bError').css('display', 'none');

    formsHasError = false;
    underAgeValidateError = false;

    $('.c_form .form-floating').removeClass('has-error');

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    }

    

    
    if(!$("select[name='adf_anrede']").val()) {
        formsHasError = true;
        $('li.salutation_id').addClass('has-error');
    }



    if(!$("input[name='adf_vorname']").val()) {
        formsHasError = true;
        $('li.vorname').addClass('has-error');
    }




    if(!$("input[name='adf_nachname']").val()) {
        formsHasError = true;
        $('li.nachname').addClass('has-error');
    }



    if ($("input[name='adf_email_address']").val() === '' || !isValidEmailAddress( $("input[name='adf_email_address']").val() )) {
        formsHasError = true;
        $('li.email_address').addClass('has-error');
    }
    



    if(formsHasError) {
        console.log('fehler');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".has-error").offset().top
        }, 700);   
    }
    if(underAgeValidateError) {
        console.log('fehler');
        var targetOffset = $(".geburtsdatum").offset().top - 150;
        $('html,body').animate({scrollTop: targetOffset},700); 
    }
    if( (!formsHasError) && (!underAgeValidateError) )   {
        
        $('leadForm ul li *').removeClass('has-error');
       /* $([document.documentElement, document.body]).animate({
            scrollTop: $(".btn-primary").offset().top
        }, 700);*/

        $('.loading').removeClass('hideMe');
        $('#submitButton').prop("disabled",true);;
            
        const timeNow = Date.now();
        const form = document.getElementById( "leadForm" );
        //const institution = form.elements['adf_institution'];
        const anrede = form.elements['adf_anrede'];
        const vorname = form.elements['adf_vorname'];
        const geburtsdatum = form.elements['adf_geburtsdatum'];
        const nachname = form.elements['adf_nachname'];
        const adfproxy = form.elements['adfproxy'];
        const gewinnspielfrage = form.elements['adf_gewinnspielfrage'];
        const email = form.elements['adf_email_address'];
        const optin = form.elements['adf_optin_authorization'];
        const lpName = form.elements['adf_additional_field_1'];






        let http = new XMLHttpRequest();
        // Invoke URL (Cluster API)

        //let url = 'https://api.delivery-cluster.de/adf';


        http.open('POST', url, true);
        //Send the body properly formatted
        //let params = '{"adfproxy": "' +adfproxy.value + '", "content": {"data": {"additional_field_1": "' + institution.value + '","salutation_id": "' + anrede.value + '","first_name": "' + vorname.value + '","last_name": "' + nachname.value + '","email_address": "' + email.value + '","additional_field_2": "' + gewinnspielfrage.value + '","optin_identity_tracking": "' + optinIdentity.value + '","optin_source": "' + optinSource.value + '","checkbox_newsletter_tracking": "' + checkboxNlT.value + '","checkbox_werbeeinwilligung": "' + optin.value + '"},"meta_data": {}, "additional_params": {"timestamp": "'+timeNow+'"}}}';

        let params = '{"adfproxy": "' +adfproxy.value + '", "content": {"data": {"salutation_id": "' + anrede.value + '","additional_field_1": "' + lpName.value + '","checkbox_newsletter_tracking": "1","checkbox_identity_tracking": "1","first_name": "' + vorname.value + '","last_name": "' + nachname.value + '","email_address": "' + email.value + '","birthday": "' + geburtsdatum.value + '","additional_field_2": "' + textarea + '","optin_source": "' + optinSource + '","traffic_source": "' + myParameterString + '","checkbox_werbeeinwilligung": "' + optin.value + '"},"meta_data": {}, "additional_params": {"timestamp": "' + thisTime + '"}}}';
        http.onreadystatechange = function () {
            //Status 200: OK -> Redirect to second page (Danke-Seite)
            if (http.status == 422) {
            // console.log('user already exists');
                //$('.errorDuplikate').removeClass('hideMe');
               //var targetOffset = $(".errorDuplikate").offset().top - 150;
                //$('html,body').animate({scrollTop: targetOffset},'slow');
                //$('#submitButton').prop("disabled",false);
             }else if (http.status == 200) {
                location.href = "danke/index.html";
                $('#submitButton').prop("disabled",true);
            } else {
            }
        };

    
    }
}

