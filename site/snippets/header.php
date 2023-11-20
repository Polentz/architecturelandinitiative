<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php if ($pages->template(['home', 'projects', 'tools'])) : ?>
        <title>A&emsp;&emsp;&emsp;&emsp;L&emsp;&emsp;IN</title>
    <?php else : ?>
        <title>A&emsp;&emsp;&emsp;&emsp;L&emsp;&emsp;IN&emsp;&emsp;/&emsp;&emsp;<?= $page->title() ?></title>
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
    <?= css ([
        'assets/css/base.css',
        'assets/css/style.css',
        '@auto',
    ]) ?>
</head>
<body>
    <header class="header">
        <h1>
            <!-- <span id="A" class="logo-letter">A</span>
            <span id="L" class="logo-letter">L</span>
            <span id="IN" class="logo-letter">IN</span> -->
            <a class="logo" href="<?= $site->page('home')->url() ?>">
                <span class="logo-word-1">Architecture</span>
                <span class="logo-word-2">Land</span>
                <span class="logo-word-3">INitiative</span>
            </a>
            <span class="logo-element">/&emsp;&emsp;<?= $page->title() ?></span>
        </h1>
        <div class="header-button-wrapper">
            <a href="<?= $site->page('projects')->url() ?>" id="to-projects" class="button" type="button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 33L7 7L11.3333 7L11.3333 33L15.6667 33L15.6667 7L20 7L20 33L24.3333 33L24.3333 7L28.6667 7L28.6667 33L33 33L33 7" stroke="#1d1d1b"/>
                </svg>
                <span class="text-label">projects</span>
            </a>
            <a href="<?= $site->page('tools')->url() ?>" id="to-tools" class="button" type="button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7.5" y="32.5" width="25" height="25" transform="rotate(-90 7.5 32.5)" stroke="#1d1d1b"/>
                </svg>
                <span class="text-label">tools</span>
            </a>
        </div>
    </header>