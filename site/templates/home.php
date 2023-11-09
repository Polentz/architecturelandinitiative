<?php foreach ($page->children()->listed()->random() as $snippet) : ?>
    <?php snippet($snippet->intendedTemplate()) ?>
<?php endforeach ?>

<?= snippet('slider') ?>
<?= snippet('footer') ?>
