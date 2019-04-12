<?php get_header(); ?>
<div class="main">
    <div class="front-header">
        <div class="container">
            <div class="greeting">
                <?php 
                    $title = get_field('title');
                    $subtitle = get_field('subtitle');
                    $button_text = get_field('button_text');
                    $button_url = get_field('button_url');
                ?>
                <span class="greeting-title"><?php echo $title ?></span>
                <span class="greeting-subtitle"><?php echo $subtitle ?></span>
                <a href="<?php echo $button_url ?>" class="button"><?php echo $button_text ?></a>
            </div>
            <div class="featured-work">
                <h2>Featured Work</h2>
                <?php $portfolio_selections = get_field('portfolio_selections');
                    if($portfolio_selections):
                        $post = $portfolio_selections;
                        $featured_image = the_post_thumbnail('featured-work');
                        setup_postdata($post); ?>
                            <div class="featured-item">
                                <a class="featured-item-link" href="<?php the_permalink(); ?>">
                                    <?php echo $featured_image ?>
                                </a>
                            </div>
                    <?php wp_reset_postdata();
                endif; ?>
                <div></div>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>