<?= snippet('header') ?>

<main class="main">
    <?= $page->blocks()->toBlocks()->sortBy('date', 'desc') ?>
</main>

<div class="box-container">
    <?php snippet('filters', slots: true) ?>
        <?php slot('filterByProject') ?>
        <?php endslot() ?>
    <?php endsnippet() ?>
</div>

<?= snippet('slider') ?>
<?= snippet('footer') ?>


