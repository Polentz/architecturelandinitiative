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
<footer class="footer">
    <nav class="nav">
        <ul class="nav-menu lang">
            <li><a href="<?= $page->url($hrefEn) ?>" hreflang="<?= $hrefEn ?>"><?= $languageStringEn ?></a></li>
            <li><a href="<?= $page->url($hrefFr) ?>" hreflang="<?= $hrefFr ?>"><?= $languageStringFr ?></a></li>
            <li><a href="<?= $page->url($hrefDe) ?>" hreflang="<?= $hrefDe ?>"><?= $languageStringDe ?></a></li>
        </ul>
        <ul class="nav-menu menu">
            <li class="menu-element"><?= $about ?></li>
            <?php foreach($pages->template('page')->listed() as $page) : ?>
                <li class="menu-element"><a href="<?= $page->url() ?>"><?= $page->title() ?></a></li>
            <?php endforeach ?> 
            <li class="menu-element"><?= $contact ?></li>
        </ul>
    </nav>
    <div id="contact" class="banner">
        <ul class="banner-block">
            <li>
                <p>General inquiry</p>
                <p><a href="mailto:mail@architecturelandinitiative.org">mail@architecturelandinitiative.org</a></p>
            </li>
            <li>
                <p>Application</p>
                <p><a href="mailto:work@architecturelandinitiative.org">work@architecturelandinitiative.org</a></p>
            </li>
        </ul>
        <ul class="banner-block">
            <li>
                <p>Zwinglistrasse 6a
                <br>8004 Zürich</p>
            </li>
        </ul>
        <ul class="banner-block">
            <li>
                <p>Rue du Vuache 9
                <br>1201 Geneva</p>
            </li>
        </ul>
        <ul class="banner-block">
            <li>
                <p>Address
                <br>0000 Hong Kong</p>
            </li>
        </ul>
        <ul class="banner-block">
            <li>
                <p>Social Media</p>
                <p><a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </li>
        </ul>
        <button class="button banner-button" type="button">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" fill="#ffffff"/>
                <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#1d1d1b"/>
                <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
            </svg>
        </button>
    </div>
</footer>
