<?php snippet('header', slots: true) ?>
    <?php slot('defaultHeader') ?>
    <?php endslot() ?>
<?php endsnippet() ?>

<main class="main">
    <section class="text-intro">
        <h3><?= $page->intro() ?></h3>
    </section>
    
    <section class="accordion-layout">
        <?= $page->blocks()->toBlocks()->sortBy('date', 'desc') ?>
    </section>
</main>

<div class="box-container">
    <?= snippet('filters') ?>
</div>

<?= snippet('slider') ?>
<?= snippet('footer') ?>


