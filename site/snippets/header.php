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
    <?php if ($page->is('home')) : ?>
        <title>A&emsp;&emsp;&emsp;&emsp;L&emsp;&emsp;IN</title>
    <?php else : ?>
        <title>A&emsp;&emsp;&emsp;&emsp;L&emsp;&emsp;IN - <?= $page->title() ?></title>
    <?php endif ?>
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
    <!-- <link rel="shortcut icon" type="image/png" sizes="48x48" href="/assets/favicons/flavia-favicon-48.png">
    <link rel="shortcut icon" type="image/png" sizes="64x64" href="/assets/favicons/flavia-favicon-64.png">
    <link rel="shortcut icon" type="image/png" sizes="192x192" href="/assets/favicons/flavia-favicon-192.png">
    <link rel="shortcut icon" type="image/png" sizes="512x512" href="/assets/favicons/flavia-favicon-512.png"> -->
    <?= css ([
        'assets/css/base.css',
        'assets/css/style.css',
        '@auto',
    ]) ?>
</head>
<body>
    <header class="logo">
    </header>

