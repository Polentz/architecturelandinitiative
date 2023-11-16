<?= snippet('header') ?>

<main class="main">
    <?= $page->blocks()->toBlocks()->sortBy('date', 'desc') ?>
</main>

<section class="box-container"> 
    <?php snippet('filters', slots: true) ?>
        <?php slot('filterByProject') ?>
        <?php endslot() ?>
    <?php endsnippet() ?>
</section>

<?= snippet('slider') ?>
<?= snippet('footer') ?>


