<?php
    if ($kirby->language()->code() == 'en') {
        $hrefEn = '/';
        $languageStringEn = 'En';
        $hrefFr = 'fr';
        $languageStringFr = 'Fr';
        $hrefDe = 'de';
        $languageStringDe = 'De';
        $about = 'Cooperative';
        $contact = 'Contact';
    } else if ($kirby->language()->code() == 'fr') {
        $hrefEn = '/';
        $languageStringEn = 'En';
        $hrefFr = 'fr';
        $languageStringFr = 'Fr';
        $hrefDe = 'de';
        $languageStringDe = 'De';
        $about = 'Coopératif';
        $contact = 'Contact';
    }
    else if ($kirby->language()->code() == 'de') {
        $hrefEn = '/';
        $languageStringEn = 'En';
        $hrefFr = 'fr';
        $languageStringFr = 'Fr';
        $hrefDe = 'de';
        $languageStringDe = 'De';
        $about = 'Genossenschaft';
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
            <li id="about-opener" class="menu-element"><?= $about ?></li>
            <?php foreach($pages->template(['timeline', 'initiative']) as $page) : ?>
                <li class="menu-element <?= e($page->isOpen(), '--current') ?>"><a href="<?= $page->url() ?>"><?= $page->title() ?></a></li>
            <?php endforeach ?> 
            <li class="menu-element"><?= $contact ?></li>
        </ul>
    </nav>
    <div id="contact" class="banner">
        <div class="banner-content">
            <ul class="banner-block">
                <li class="banner-block-item">
                    <p class="text-label">General inquiry</p>
                    <p><a href="mailto:mail@architecturelandinitiative.org">mail@architecturelandinitiative.org</a></p>
                </li>
                <li class="banner-block-item">
                    <p class="text-label">Application</p>
                    <p><a href="mailto:work@architecturelandinitiative.org">work@architecturelandinitiative.org</a></p>
                </li>
            </ul>
            <ul class="banner-block">
                <li class="banner-block-item">
                    <p class="text-label">Zürich Office</p>
                    <p>Zwinglistrasse 6a
                    <br>8004 Zürich</p>
                </li>
            </ul>
            <ul class="banner-block">
                <li class="banner-block-item">
                    <p class="text-label">Geneva Office</p>
                    <p>Rue du Vuache 9
                    <br>1201 Geneva</p>
                </li>
            </ul>
            <ul class="banner-block">
                <li class="banner-block-item">
                    <p class="text-label">Hong Kong Office</p>
                    <p>Address
                    <br>0000 Hong Kong</p>
                </li>
            </ul>
            <ul class="banner-block">
                <li class="banner-block-item">
                    <button class="button" type="button">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.2555 26.84H31.3435L23.3275 14.216H23.0155V26.84H22.2715V13.16H23.4955L31.1755 25.256H31.5115V13.16H32.2555V26.84Z" fill="#1D1D1B"/>
                                <path d="M12.9051 25.784L13.2891 26.168H17.3211V26.84H7.74512V26.168H11.7771L12.1611 25.784V14.216L11.7771 13.832H7.74512V13.16H17.3211V13.832H13.2891L12.9051 14.216V25.784Z" fill="#1D1D1B"/>
                                <rect x="0.5" y="0.5" width="39" height="39" stroke="#1D1D1B"/>
                            </svg>
                        </a>
                    </button>
                </li>
            </ul>
        </div>
        <button class="button banner-button" type="button">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#1d1d1b"/>
            </svg>
        </button>
    </div>
</footer>
