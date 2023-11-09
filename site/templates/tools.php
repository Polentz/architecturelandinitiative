<?= snippet('header') ?>

<a class="button header-button" href="<?= $site->url() ?>"> 
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.65085L31.5 18.2342V31.5H8.5V18.2342L20 8.65085Z" stroke="#1d1d1b"/>
        <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
    </svg>
</a>

<main class="main">
    <section class="intro">
        <h3><?= $page->intro() ?></h3>
    </section>

    <section class="gallery">
        <div class="gallery-grid">
            <?php foreach ($pages->files()->filterBy('tools', '*=', $page->title()) as $media) : ?>
                <?= snippet('gallery', ['media' => $media]) ?>
            <?php endforeach ?> 
        </div>
    </section>
</main>

<section class="box-container"> 
    <?= snippet('filters') ?>
</section>

<?= snippet('slider') ?>
<?= snippet('footer') ?>