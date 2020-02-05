<?php 
// Menu Theme Support
add_theme_support( 'menus' );

// Register main navigation menus
register_nav_menu('main_navigation', 'Main Navigation');
register_nav_menu('footer_menu', 'Footer Menu');

// Featured Image Theme Support
add_theme_support( 'post-thumbnails' );

// Changes the [...] default readmore
function excerpt_more( $more ) {
    return '…';
}
add_filter( 'excerpt_more', 'excerpt_more' );

