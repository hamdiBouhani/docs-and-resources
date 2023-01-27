function get_country_link(product_ids) {
    jQuery.ajax({
        'method': 'POST',
        'url': '/shop/get-add-to-cart-link',
        'data': {
            'product_ids': product_ids,
        },
        'success': function(result) {
            var forward_url = result.data.add_cart.url;
            if (typeof result.data.add_cart.url == 'string') {
                if (typeof ga == 'function') {
                    ga('send', {
                        'hitType': 'event',          // Required.
                        'eventCategory': 'shop',   // Required.
                        'eventAction': 'click',      // Required.
                        'eventLabel': 'how_to_buy_add_to_cart',
                        'anonymizeIp': true
                    });
                }

                // If a programID cookie is set, insert the programID. '/currency.' becomes '/pgm.{programID}/currency.'
                var programID = readCookie('programID');
                if (programID != null) {
                    forward_url = forward_url.replace('/currency.', '/pgm.' + programID + '/currency.');
                }

                setTimeout(function() {
                    window.location.href = forward_url;
                }, 400);
            }
        },
        'fail': function(){
//				console.log('fail callback');
        },
        'complete': function() {
            jQuery("#shop-confirm-country-modal").modal("hide");
//				console.log('complete callback');
        },
        'dataType': 'json'
    });
}

jQuery(document).ready(function() {

    var controlled_divs = [];

    if (typeof dropdowns !== 'undefined') {
        controlled_divs = loadDropdowns(dropdowns, controlled_divs)

        // On dropdown option change
        jQuery('.shop-dropdown-select').change(function (e) {
            let control = jQuery(e.target).attr('id')
            let idx = dropdowns.findIndex(function (dd) {
                return dd["dropdown-id"] + '-select' === control
            })
            controlMenus(dropdowns[idx], e.target.selectedIndex)
            controlled_divs = controlDivs(dropdowns[idx], e.target.selectedIndex, controlled_divs, dropdowns)
        })
    }

    jQuery('div.product-comparison-table div.product-compare table tr td a.button-clear, a.buy-link').addClass('prevent-click').unbind('click').click(function(e) {
        product_ids = {
            "product-id": jQuery(this).data('product-id'),
            "emea-product-id": jQuery(this).data('emea-id'),
            "germany-product-id": jQuery(this).data('germany-id'),
            "entity-slug": jQuery(this).data('entity-slug'),
        }
      
        e.preventDefault();

        var shop_country = jQuery.cookie('shop_country');
        if (typeof shop_country == 'string') {

            get_country_link(product_ids);
        } else {
            jQuery("#shop-confirm-country-modal").modal("show");
        }
    });

    jQuery('#shop-confirm-country-modal .add-to-cart').click(function() {
        var selected_country = jQuery('#choose_billing_country_select').val();
        jQuery.cookie('shop_country', selected_country, { expires: 7, path: '/', domain: '.suse.com' });
        get_country_link(product_ids);
    });
});

// Load the dropdowns initially
function loadDropdowns(dropdowns, controlled_divs) {
    for (let d = 0; d < dropdowns.length; d++) {

        // Iterate all dropdowns
        if (typeof dropdowns[d]["control-menus"] !== undefined && dropdowns[d]["control-menus"] == true) {
            controlMenus(dropdowns[d], 0)
        }
        controlled_divs = controlDivs(dropdowns[d], 0, controlled_divs, dropdowns)
    }
    return controlled_divs
}

// Control which menu to show if Control menus is checked for the current dropdown
function controlMenus(dropdown, selected_index) {
    if (typeof dropdown["control-menus"] !== undefined && dropdown["control-menus"] == true) {

        jQuery('.select-config').hide()
        jQuery('#' + dropdown["dropdown-id"]).show()

        if (typeof dropdown["dropdown-options"][selected_index] !== 'undefined' && dropdown["dropdown-options"][selected_index]["option-id"] != null) {

            jQuery('#' + dropdown["dropdown-options"][selected_index]["option-id"] + '-select').prop('selectedIndex',0)
            jQuery('#' + dropdown["dropdown-options"][selected_index]["option-id"]).show()
        }
    }
}

// Update the current dropdown's controlled divs or reset if Control menus is checked
function controlDivs(dropdown, selected_index, controlled_divs, dropdowns) {
    controlled_divs[dropdown["dropdown-id"]] = dropdown["dropdown-options"][selected_index]["controlled-containers"]

    if (typeof dropdown["control-menus"] !== undefined && dropdown["control-menus"] == true) {

        controlled_divs = []
        controlled_divs[dropdown["dropdown-id"]] = dropdown["dropdown-options"][selected_index]["controlled-containers"]

        if (typeof dropdown["dropdown-options"][selected_index] !== 'undefined' && dropdown["dropdown-options"][selected_index]["option-id"] != null) {
            let idx = dropdowns.findIndex(function(dd) {
                return dd["dropdown-id"] === dropdown["dropdown-options"][selected_index]["option-id"]
            })
            controlled_divs[dropdowns[idx]["dropdown-id"]] = dropdowns[idx]["dropdown-options"][0]["controlled-containers"]
        }
    }
    calculateContainers(controlled_divs)
    return controlled_divs
}

// In case of 1 dropdown, set the divs to show. In case if 2 dropdowns, find the matching divs between the two.
function calculateContainers(controlled_divs) {
    let keys = Object.keys(controlled_divs)
    let divs = []
    if (keys.length == 1) {
        divs = controlled_divs[keys[0]]
    }
    if (keys.length == 2) {
        divs = controlled_divs[keys[0]].filter(function(el) {
            return controlled_divs[keys[1]].includes(el)
        })
    }
    showContainers(divs)
}

// Display divs based on the list
function showContainers(divs) {
    jQuery('.support-price-control').hide()
    for (let d = 0; d < divs.length; d++) {
        jQuery('#' + divs[d]).show()
    }
}


