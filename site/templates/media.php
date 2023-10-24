<?= snippet('header') ?>

<main class="media-layout main">
    <a class="button header-button" href="<?= $page->parent()->url() ?>">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8.65085L31.5 18.2342V31.5H8.5V18.2342L20 8.65085Z" stroke="#1d1d1b"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
        </svg>
    </a>
</main>


<?= snippet('slider') ?>
<?= snippet('footer') ?>