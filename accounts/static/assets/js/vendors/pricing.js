"use strict";
! function() {
    var t = $("#pricing-switch input");
    $(t).on("change", function() {
        !0 === $(t).is(":checked") ? $(".toggle-price-content").each(function() {
            $(this).html($(this).data("price-yearly"))
        }) : $(".toggle-price-content").each(function() {
            $(this).html($(this).data("price-monthly"))
        })
    })
}(),
function() {
    var t = $("#pricing-switch-second input");
    $(t).on("change", function() {
        !0 === $(t).is(":checked") ? $(".toggle-price-content-second").each(function() {
            $(this).html($(this).data("price-yearly"))
        }) : $(".toggle-price-content-second").each(function() {
            $(this).html($(this).data("price-monthly"))
        })
    })
}();