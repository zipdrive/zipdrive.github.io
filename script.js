$(document).ready(function() {
    $('#onion-details').prop('disabled', true);
});

function showPortfolioDetails(item) {
    $('#portfolio-details').css("z-index", "200");
    $(item).prop('disabled', false);
}

function hidePortfolioDetails(item) {
    $('#portfolio-details').css("z-index", "-1");
    $(item).prop('disabled', true);
}