<?php
// Creates Portfolio Post Type
function create_post_type() {
	register_post_type( 'portfolio',
	  array(
		'labels' => array(
		  'name' => __( 'Portfolio' ),
		  'singular_name' => __( 'Work' ),
		),
		'public' => true,
		'has_archive' => true,
		'menu_icon' => 'dashicons-format-gallery',
		'menu_position' => 5,
		'supports' => array('thumbnail')
	  )
	);
  }
  
  add_action( 'init', 'create_post_type' );