<?php
    if ($kirby->language()->code() == 'en') {
        $lang = 'en';
        $langCode = 'en_US';
    } else if ($kirby->language()->code() == 'fr') {
        $lang = 'fr';
        $langCode = 'fr_FR';
    } else if ($kirby->language()->code() == 'de') {
        $lang = 'de';
        $langCode = 'de_DE';
    }
?>

<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A&emsp;&emsp;&emsp;&emsp;L&emsp;&emsp;IN</title>
    <meta name="description"
        content="<?= $site->description() ?>">
    <link rel="canonical" href="<?= $page->url() ?>">
    <meta name="keywords"
        content="<?= $site->keywords() ?>">
    <meta property="og:locale" content="<?= $langCode ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= $site->title()?>">
    <meta property="og:description"
        content="<?= $site->description() ?>">
    <meta property="og:url" content="<?= $page->url() ?>">
    <meta property="og:site_name" content="<?= $site->title()?>">
    <?php if ($site->ogimage()->isNotEmpty()) : ?>
        <meta property="og:image" content="<?= $site->ogimage()->toFile()->url() ?>">
        <meta property="og:image:alt" content="<?= $site->ogimage()->toFile()->alt() ?>">
    <?php endif ?>
    <meta name="twitter:card" content="summary">
    <meta name="twitter:description"
        content="<?= $site->description() ?>">
    <meta name="twitter:title"
        content="<?= $site->title()?>">
    <?php if ($site->ogimage()->isNotEmpty()) : ?>
        <meta name="twitter:image:alt" content="<?= $site->ogimage()->toFile()->alt() ?>">
    <?php endif ?>
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <?= css ([
        'assets/css/base.css',
        'assets/css/style.css',
        '@auto',
    ]) ?>
    <!-- <link rel="stylesheet" href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css"> -->
</head>
<body>
    <header class="header">
        <!-- <h1 class="logo">
            <span id="A" class="logo-letter">A</span>
            <span id="L" class="logo-letter">L</span>
            <span id="I" class="logo-letter">I</span>
            <span id="N" class="logo-letter">N</span>
        </h1> -->
        <?php if ($page->is('home')) : ?>
            <h1>A<span style="margin: 0 2rem;">L</span>I N</h1>
        <?php else : ?>
            <h1>A<span style="margin: 0 2rem;">L</span>I N<span style="margin: 0 1rem;">/</span><?= $page->title() ?></h1>
        <?php endif ?>
        <div class="header-button-wrapper">
            <a href="<?= $site->template('tools')->url() ?>" id="to-tools" class="button" type="button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7.5" y="12.5" width="5" height="25" transform="rotate(-90 7.5 12.5)" stroke="#1d1d1b"/>
                    <rect x="7.5" y="32.5" width="17" height="25" transform="rotate(-90 7.5 32.5)" stroke="#1d1d1b"/>
                </svg>
                <span class="text-label">tools</span>
            </a>
            <a href="<?= $site->template('projects')->url() ?>" id="to-projects" class="button" type="button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 33L7 7L11.3333 7L11.3333 33L15.6667 33L15.6667 7L20 7L20 33L24.3333 33L24.3333 7L28.6667 7L28.6667 33L33 33L33 7" stroke="#1d1d1b"/>
                </svg>
                <span class="text-label">projects</span>
            </a>
        </div>
    </header>