<?= snippet('header') ?>

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