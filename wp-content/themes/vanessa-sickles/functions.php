<?php 
// Menu Theme Support
add_theme_support( 'menus' );

// Featured Image Theme Support
add_theme_support( 'post-thumbnails' );

// Creates Image Sizes
//add_image_size( 'example', 300, 250, true );

// Register main navigation menus
register_nav_menu('main_navigation', 'Main Navigation');
register_nav_menu('footer_menu', 'Footer Menu');

// Enqueue main scripts
function main_scripts() {
	wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/styles/main.css' );
	
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'master', get_template_directory_uri() . '/assets/js/master.js');
}

add_action( 'wp_enqueue_scripts', 'main_scripts' );

// Changes the [...] default readmore
function excerpt_more( $more ) {
    return '…';
}
add_filter( 'excerpt_more', 'excerpt_more' );
?>