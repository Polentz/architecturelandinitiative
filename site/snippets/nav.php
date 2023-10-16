<?php
    if ($kirby->language()->code() == 'en') {
        $hrefEn = '/';
        $languageStringEn = 'En';
        $hrefFr = 'fr';
        $languageStringFr = 'Fr';
        $hrefDe = 'de';
        $languageStringDe = 'De';
        $about = 'About';
        $contact = 'Contact';
    } else if ($kirby->language()->code() == 'fr') {
        $hrefEn = '/';
        $languageStringEn = 'En';
        $hrefFr = 'fr';
        $languageStringFr = 'Fr';
        $hrefDe = 'de';
        $languageStringDe = 'De';
        $about = 'À propos';
        $contact = 'Contact';
    }
    else if ($kirby->language()->code() == 'de') {
        $hrefEn = '/';
        $languageStringEn = 'En';
        $hrefFr = 'fr';
        $languageStringFr = 'Fr';
        $hrefDe = 'de';
        $languageStringDe = 'De';
        $about = 'Über uns';
        $contact = 'Kontakt';
    }
?>

<nav class="nav">
    <ul class="nav-menu lang">
        <li><a href="<?= $page->url($hrefEn) ?>" hreflang="<?= $hrefEn ?>"><?= $languageStringEn ?></a></li>
        <li><a href="<?= $page->url($hrefFr) ?>" hreflang="<?= $hrefFr ?>"><?= $languageStringFr ?></a></li>
        <li><a href="<?= $page->url($hrefDe) ?>" hreflang="<?= $hrefDe ?>"><?= $languageStringDe ?></a></li>
    </ul>
    <ul class="nav-menu menu">
        <li><?= $about ?></li>
        <?php foreach($pages->template('page')->listed() as $page) : ?>
            <li><a href="<?= $page->url() ?>"><?= $page->title() ?></a></li>
        <?php endforeach ?> 
        <li><?= $contact ?></li>
    </ul>
</nav>