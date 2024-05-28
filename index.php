<?php

use BoxyBird\Inertia\Inertia;

if (is_front_page()) {
    return Inertia::render('Index', [
        'posts' => get_posts(),
        'page' => get_post(),
    ]);
}

if (is_page()) {
    return Inertia::render('Page', [
        'page' => get_post(),
    ]);
}

if (is_single()) {
    return Inertia::render('Single', [
        'post' => get_post(),
    ]);
}
if (is_404()) {
    return Inertia::render('NotFound', [
        'content' => '404 - Not Found',
    ]);
}