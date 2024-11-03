$(document).ready(function() {
    $('.filters button').click(function() {
        let filterValue = $(this).data('filter');
        if (filterValue === 'all') {
            $('.gallery .image').fadeIn();
        } else {
            $('.gallery .image').hide();
            $('.' + filterValue).fadeIn();
        }
    });
    $('.gallery .image img').click(function() {
        let imgSrc = $(this).attr('src');
        $('.lightbox-content').attr('src', imgSrc);
        $('.lightbox').fadeIn();
    });
    $('.close').click(function() {
        $('.lightbox').fadeOut();
    });
});
