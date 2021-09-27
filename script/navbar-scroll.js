// TODO 5 Navigation bar script
// Untuk ngecek apakah saat di-scroll posisinya udah masuk ke navbar, kalo udah masuk jadi ketutupan
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top")
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});