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
        <h1>A L IN / <?= $page->template() ?> / <?= $page->title() ?></h1>
    </header>