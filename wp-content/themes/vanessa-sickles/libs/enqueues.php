<?php 
// Enqueue main scripts
function main_scripts() {
	wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/styles/main.css' );
	
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'master', get_template_directory_uri() . '/assets/js/master.js');
}

add_action( 'wp_enqueue_scripts', 'main_scripts' );