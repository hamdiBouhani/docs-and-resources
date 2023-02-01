var gdpr_countries = [
	'AT', // Austria
	'BE', // Belgium 
	'BG', // Bulgaria
	'HR', // Croatia
	'CY', // Republic of Cyprus	
	'CZ', // Czech Republic
	'DK', // Denmark
	'EE', // Estonia
	'FI', // Finland
	'FR', // France
	'DE', // Germany
	'GR', // Greece
	'HU', // Hungary
	'IE', // Ireland
	'IT', // Italy
	'LV', // Latvia
	'LT', // Lithuania
	'LU', // Luxembourg
	'MT', // Malta
	'NL', // Netherlands
	'PL', // Poland
	'PT', // Portugal
	'RO', // Romania
	'SK', // Slovakia
	'SI', // Slovenia
	'ES', // Spain
	'SE', // Sweden
	'GB', // UK
	'CA', // Canada
];

function apply_zip_change() {
	var $form = $(this).closest('form');
	var $country = $form.find(".form_builder_country_list");
	var country = $country.val();
	if(country === 'DE') {
		var eventNameValue = $form.find('input[name=eventName]').val();
		var postal_code_value = $(this).val();
		var C_Subject_Line_SCR1;

		if (postal_code_value) {
			C_Subject_Line_SCR1 = $country.data('subject_line_prefix') + eventNameValue + " (" + country + " " + postal_code_value + ")";
		} else {
			C_Subject_Line_SCR1 = $country.data('subject_line_prefix') + eventNameValue + " (" + country + ")";
		}
		$form.find('input[name=C_Subject_Line_SCR1]').val(C_Subject_Line_SCR1);
	}
}

function apply_country_change() {
	var $form = $(this).closest('form');
	var $address = $form.find('.address_field');
	var $zip = $form.find('.zip_field');
	var $state = $form.find('.state_field');
	var $privacy = $form.find('.privacy_field');
	var $privacy_gdpr = $form.find('.privacy_gdpr_field');
	var country = $(this).val();

	if(country == null || country == 'undefined') {
		country = 'undefined';
	} else {
		var postal_code_value;
		var eventNameValue = $form.find('input[name=eventName]').val();
		var C_Subject_Line_SCR1 = $(this).data('subject_line_prefix') + eventNameValue + " (" + country + ")";



		switch(country) {
			case "US":
			case "CA":
			case "GB":
				$zip.show();
				$state.show();

				$form.find('.state_temp').append($form.find('.form_builder_state_list option:not(:first)'));
				$form.find('.form_builder_state_list').append($form.find('.state_temp option[data-country='+country+']'));
				break;
			case "AU":
			case "IN":
				$zip.hide();
				$state.show();
				$form.find('.state_temp').append($form.find('.form_builder_state_list option:not(:first)'));
				$form.find('.form_builder_state_list').append($form.find('.state_temp option[data-country='+country+']'));

				break;
			case "DE":
			case "ES":
			case "FR":
			case "CH":
			case "ZA":
				$state.hide();
				$zip.show();

				postal_code_value = $zip.find("input").val();
				if (postal_code_value != '' && country == 'DE') {
					C_Subject_Line_SCR1 =  $(this).data('subject_line_prefix') + eventNameValue + " (" + country + " " + postal_code_value + ")";
				}
				break;
			default:
				$form.find('.form_builder_state_list option:first').attr('selected', 'selected');
				$state.hide();
				$zip.hide();
		}
		$form.find('input[name=C_Subject_Line_SCR1]').val(C_Subject_Line_SCR1);

		switch(country) {
			//Asia Pacific
			case "AF" :
			case "AS" :
			case "BD" :
			case "BT" :
			case "BN" :
			case "KH" :
			case "CX" :
			case "PF" :
			case "ID" :
			case "MN" :
			case "MM" :
			case "NP" :
			case "NC" :
			case "PK" :
			case "PW" :
			case "PG" :
			case "PH" :
			case "WS" :
			case "SB" :
			case "LK" :
			case "TH" :
			case "TO" :
			case "VN" :

			//Latin America
			case "AI" :
			case "AG" :
			case "AR" :
			case "AW" :
			case "BS" :
			case "BB" :
			case "BZ" :
			case "BM" :
			case "BO" :
			case "BR" :
			case "KY" :
			case "CL" :
			case "CO" :
			case "CR" :
			case "DM" :
			case "DO" :
			case "EC" :
			case "SV" :
			case "GF" :
			case "GD" :
			case "GP" :
			case "GT" :
			case "GY" :
			case "HT" :
			case "HN" :
			case "JM" :
			case "MQ" :
			case "MX" :
			case "AN" :
			case "NI" :
			case "PA" :
			case "PY" :
			case "PE" :
			case "KN" :
			case "LC" :
			case "SR" :
			case "TT" :
			case "TC" :
			case "UY" :
			case "PR" :
			case "VE" :

			//EMEA
			case "DZ" :
			case "AO" :
			case "BY" :
			case "BJ" :
			case "BW" :
			case "BG" :
			case "BF" :
			case "CM" :
			case "CF" :
			case "TD" :
			case "CI" :
			case "HR" :
			case "CY" :
			case "CZ" :
			case "EG" :
			case "EE" :
			case "ET" :
			case "FO" :
			case "GA" :
			case "GH" :
			case "GL" :
			case "GP" :
			case "HU" :
			case "IS" :
			case "IQ" :
			case "IL" :
			case "JO" :
			case "KZ" :
			case "KE" :
			case "KW" :
			case "LV" :
			case "LB" :
			case "LR" :
			case "LT" :
			case "MK" :
			case "MG" :
			case "MW" :
			case "MV" :
			case "ML" :
			case "MU" :
			case "YT" :
			case "MD" :
			case "MA" :
			case "NA" :
			case "NE" :
			case "OM" :
			case "PL" :
			case "QA" :
			case "RE" :
			case "RO" :
			case "RU" :
			case "RW" :
			case "SH" :
			case "SA" :
			case "CS" :
			case "SC" :
			case "SK" :
			case "SI" :
			case "TN" :
			case "TR" :
			case "UG" :
			case "UA" :
			case "AE" :
			case "UZ" :
			case "EH" :
			case "YE" :
			case "ZM" :
			case "ZW" :

			//custom
			case "AT" :
			case "DE" :
			case "CH" :
				$address.show();
				break;
			default:
				$address.hide();
		}
		//GDPR-EU
		switch(country){
			case "AT" :
			case "BE" :
			case "BG" :
			case "HR" :
			case "CY" :
			case "CZ" :
			case "DK" :
			case "EE" :
			case "FI" :
			case "FR" :
			case "DE" :
			case "GR" :
			case "HU" :
			case "IE" :
			case "IT" :
			case "LV" :
			case "LT" :
			case "LU" :
			case "MT" :
			case "NL" :
			case "PL" :
			case "PT" :
			case "RO" :
			case "SK" :
			case "SI" :
			case "ES" :
			case "SE" :
			case "GB" :
			case "CA" :
				$('.privacy_field :input').prop('checked', false);
				$('.privacy_field').removeClass('checked');
				$privacy.hide();
				$privacy_gdpr.css("display", "inline-block");
				break
			default:
				$('.privacy_gdpr_field :input').prop('checked', false);
				$privacy_gdpr.hide();
				$privacy.show();
		}
		return true;
	}
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	for (var i = vars.length-1; i >= 0; i--) {
		var pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return false;
}

/* Cookie Functions
---------------------------------------------------- */
if (typeof readCookie != 'function') {
	window.readCookie = function(name) {
		var cks = document.cookie.split(';');
		for(var i=cks.length-1; i >= 0; i--) {
			var c = cks[i];
			while(c.charAt(0)===' ') {
				c = c.substring(1,c.length);
			}
			if(c.indexOf(name+"=")===0) {
				return c.substring(name.length+1,c.length);
			}
		}
		return null;
	};
}

if (typeof deleteCookie != 'function') {
	window.deleteCookie = function(name,path,domain) {
		if(!domain) {
			domain = ".attachmate.com";
		}
		if(readCookie(name)) { document.cookie = name + "=" +
			((path) ? ";path=" + path : ";path=/") +
			";domain=" + domain + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
		}
	};
}

if (typeof createCookie != 'function') {
	window.createCookie = function(name,value,days,path,domain) {
		var expires = "";
		if(!domain) {
			domain = ".attachmate.com";
		}
		if(days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = "; expires="+date.toGMTString();
		}
		document.cookie = name+"="+value+expires +
			((path) ? "; path=" + path : "; path=/") +
			"; domain=" + domain;

	};
}

function submit_formbuilder_form() {
	$(this).parent().find('.form_builder_submit_status').show();
	$('.trial-download-form .headbar').html('');
	$('.trial-download-form .headbar').removeClass('error');
	$(this).find('.form_field_container').removeClass('error');
	$(this).find('div:first-child').hide();

	var visible_fields = [];
	$(this).find('input:visible, select:visible, textarea:visible').each(function() {
		visible_fields.push($(this).attr('name'));
	});

	var data = $(this).serialize();
	data += '&visible_fields=' + visible_fields.join('|');
	var $form = $(this);
	//for cookie on successful submit on promo forms
	var email = $("input[name='c_email']").val();

    if (typeof ga == "function") {
        ga('send', 'event', {
            eventCategory: 'Form Submit',
            eventAction: $form.data('di-form-id'),
            eventLabel: $form.find('input[name="w_form_submit_url"]').val(),
            'anonymizeIp': true
        });
    }

}


jQuery(document).ready(function() {

	// ************** Custom Checkbox *************
	jQuery('#form_builder_w_optin').click(function() {
		jQuery('#w_optin').click();
	});
	jQuery('#w_optin').focus(function() {
		jQuery('#form_builder_w_optin .customCheckbox').addClass("focused-checkbox");
	});
	jQuery('#w_optin').focusout(function() {
		jQuery('#form_builder_w_optin .customCheckbox').removeClass("focused-checkbox");
	});

	jQuery('#form_builder_export').click(function() {
		jQuery('#export').click();
	});
	jQuery('#form_builder_export #export').focus(function() {
		jQuery('#form_builder_export .customCheckbox').addClass("focused-checkbox");
	});
	jQuery('#form_builder_export #export').focusout(function() {
		jQuery('#form_builder_export .customCheckbox').removeClass("focused-checkbox");
	});



	// ************************** Set the hidden fields ***********************************
	var hidden_fields = {};
	$.each(hidden_fields, function( name, value ) {
		jQuery('.form_builder_form').each(function() {
			if ( $(this).find('input[name="'+name+'"]').length > 0 ) {
				$(this).find('input[name="'+name+'"]').val(value);
			} else {
				$(this).prepend("<input type='hidden' name='"+name+"' value='"+value+"' />");
			}
		});
	});

	// put in the user prefered country if there is a cookie
	var preferred_country = null;
	if(readCookie('novell_country') !== null) {
		preferred_country = readCookie('novell_country');
	}
	if(readCookie('user_country') !== null) {
		preferred_country = readCookie('user_country');
	}
	if (preferred_country !== null) {
		hidden_fields.preferred_country = preferred_country;
	}

	// read the a7 cookie (for w_search_type)
	var novell_a7 = '';
	if(readCookie('novell_a7') !== null) {
		novell_a7 = readCookie('novell_a7');
	}
	hidden_fields.w_search_type = novell_a7;

	// read the w_search_campaign cookie (for w_search_campaign)
	var novell_search_campaign = '';
	if(readCookie('novell_search_campaign') !== null) {
		novell_search_campaign = readCookie('novell_search_campaign');
	}
	hidden_fields.w_search_campaign = novell_search_campaign;

	// read the novell_search_paid_keyword cookie (for w_search_campaign)
	var novell_search_paid_keyword = '';
	if(readCookie('novell_search_paid_keyword') !== null) {
		novell_search_paid_keyword = readCookie('novell_search_paid_keyword');
	}
	hidden_fields.w_search_terms = novell_search_paid_keyword;


	// set the w_form_submit_url
	var w_form_submit_url = (window.location != window.parent.location) ? document.referrer.split('?')[0]: document.location.href.split('?')[0];
	if (w_form_submit_url == 'undefined') {
		w_form_submit_url = window.location.href.split('?')[0];
	}
	hidden_fields.w_form_submit_url = w_form_submit_url;

	// set the w_landing_page_url based on novell_search_landing cookie
	var w_landing_page_url = window.location.href;
	if(readCookie('novell_search_landing') !== null) {
		w_landing_page_url = readCookie('novell_search_landing');
	}
	hidden_fields.w_landing_page_url = w_landing_page_url;


	// set utm_campaign based on novell_utm_campaign cookie
	var novell_utm_campaign = '';
	if(readCookie('novell_utm_campaign') !== null) {
		novell_utm_campaign = readCookie('novell_utm_campaign');
	}
	hidden_fields.utm_campaign = novell_utm_campaign;

	// set utm_medium based on novell_utm_medium cookie
	var novell_utm_medium = '';
	if(readCookie('novell_utm_medium') !== null) {
		novell_utm_medium = readCookie('novell_utm_medium');
	}
	hidden_fields.utm_medium = novell_utm_medium;

	// w_icid based on icid cookie
	var w_icid = getQueryVariable('w_icid') || getQueryVariable('icid');
	if (w_icid == false) {
		w_icid = '';
		if (readCookie('icid') !== null) {
			w_icid = readCookie('icid');
		}
	}
	if (w_icid == false) {
		if (readCookie('form_builder_icid') !== null) {
			w_icid = readCookie('form_builder_icid');
		}
	}
	hidden_fields.w_icid = w_icid;

	// set utm_source based on novell_utm_medium cookie
	var novell_utm_source = '';
	if(readCookie('novell_utm_source') !== null) {
		novell_utm_source = readCookie('novell_utm_source');
	}
	hidden_fields.utm_source = novell_utm_source;

	// set w_download_url based on w_download_url cookie
	var w_download_url = '';
	if(readCookie('w_download_url') !== null) {
		w_download_url = readCookie('w_download_url');
	}
	if (w_download_url != '') {
		hidden_fields.w_download_url = w_download_url;
	}

	// set the eventName, eventId, contactGroup based on if a query param was passed in (for netiq)
	var overwrite_eventName = getQueryVariable('eventName');
	var overwrite_eventId = getQueryVariable('eventId');
	var overwrite_contactGroup = getQueryVariable('contactGroup');
	if (overwrite_eventName !== false) {
		hidden_fields.eventName = overwrite_eventName;
	}
	jQuery(".form_builder_form input[name='eventID']").attr('name','eventId');
	if (overwrite_eventId !== false) {
		hidden_fields.eventId = overwrite_eventId;
	}

	//////////////////////////////////////
	// set w_email_name from utm_campaign
	var overwrite_w_email_name = getQueryVariable('utm_campaign');
	if (overwrite_w_email_name !== false) {
		hidden_fields.w_email_name = overwrite_w_email_name;
	}


	//////////////////////////////////////
	// set CampaignSourceCode based on get params
	var overwrite_campaign_source = getQueryVariable('CampaignSourceCode');
	if (overwrite_campaign_source) {
		hidden_fields.CampaignSourceCode = overwrite_campaign_source;
	}

	///////////////////////////////////////
	// set campaign_description and campaign name based on get params
	var overwrite_campaign_description = getQueryVariable('campaign_description');
	var overwrite_campaign_id = getQueryVariable('campaign_id');
	if (overwrite_campaign_description !== false) {
		hidden_fields.campaign_description = overwrite_campaign_description;
	}
	if (overwrite_campaign_id !== false) {
		hidden_fields.campaign_id = overwrite_campaign_id;
	}

	if (typeof elq_product_name == 'string') {
		hidden_fields.w_product = elq_product_name;
	}


	$.each(hidden_fields, function( name, value ) {
		jQuery('.form_builder_form').each(function() {
			if ( $(this).find('input[name="'+name+'"]').length > 0 ) {
				$(this).find('input[name="'+name+'"]').val(value);
			} else {
				$(this).prepend("<input type='hidden' name='"+name+"' value='"+value+"' />");
			}
		});
	});
	// ************************** End of set the hidden fields ***********************************

	jQuery('.form_builder_submit').click(function(e) {
		e.preventDefault();
		submit_formbuilder_form.apply($(this).closest('#form_wrap').find('.form_builder_form'));
	});

	jQuery('.form_builder_form').submit(function(e) {
		e.preventDefault();
		submit_formbuilder_form.apply(this);
	});
});

//*** Marketo Form code ***//
(function() {
  var didInit = false;
  function initMunchkin() {
    if(didInit === false) {
      didInit = true;
      Munchkin.init('937-DCH-261');
    }
  }
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//munchkin.marketo.net/munchkin.js';
  s.onreadystatechange = function() {
    if (this.readyState == 'complete' || this.readyState == 'loaded') {
      initMunchkin();
    }
  };
  s.onload = initMunchkin;
  document.getElementsByTagName('head')[0].appendChild(s);
})();