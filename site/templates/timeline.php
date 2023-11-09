<?= snippet('header') ?>

<main class="main">
    <?= $page->blocks()->toBlocks() ?>
</main>

<section class="box-container"> 
    <?= snippet('filters') ?>
</section>

<?= snippet('slider') ?>
<?= snippet('footer') ?>