<?php snippet('header', slots: true) ?>
    <?php slot('defaultHeader') ?>
    <?php endslot() ?>
<?php endsnippet() ?>

<main class="main">
    <?php if ($page->intro()->isNotEmpty()) : ?>
        <section class="intro">
            <div class="text-intro">
                <h3><?= $page->intro() ?></h3>
            </div>
        </section>
    <?php endif ?>

    <section class="gallery">
        <div class="gallery-grid">
            <?php foreach ($allmedia->filterBy('tools', '*=', $page->title())->shuffle() as $media) : ?>
                <?php snippet('gallery', ['media' => $media], slots: true) ?>
                    <?php slot('showProject') ?>
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