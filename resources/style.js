$(document).ready(function () {
    var window_size = window.matchMedia('(max-width: 767px)');
    // style for non mobile screens
    if (!window_size.matches) {
        $('.project-box:has( >.project-image) > .project-content')
            .css('padding-right', '20px');
    }
})