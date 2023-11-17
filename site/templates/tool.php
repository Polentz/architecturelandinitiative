<?= snippet('header') ?>

<main class="main">
    <section class="intro">
        <h3><?= $page->intro() ?></h3>
    </section>

    <section class="gallery">
        <div class="gallery-grid">
            <?php foreach ($allmedia->filterBy('tools', '*=', $page->title()) as $media) : ?>
                <?php snippet('gallery', ['media' => $media], slots: true) ?>
                    <?php slot('filterByProject') ?>
                    <?php endslot() ?>
                <?php endsnippet() ?>
            <?php endforeach ?> 
        </div>
    </section>
</main>

<div class="box-container">
    <?= snippet('filters') ?>
</div>

<?= snippet('slider') ?>
<?= snippet('footer') ?>