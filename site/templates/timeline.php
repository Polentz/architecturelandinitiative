<?= snippet('header') ?>

<main class="main">
    <section class="accordion-layout">
        <?= $page->blocks()->toBlocks()->sortBy('date', 'desc') ?>
    </section>
</main>

<div class="box-container">
    <?php snippet('filters', slots: true) ?>
        <?php slot('filterByProject') ?>
        <?php endslot() ?>
    <?php endsnippet() ?>
</div>

<?= snippet('slider') ?>
<?= snippet('footer') ?>


