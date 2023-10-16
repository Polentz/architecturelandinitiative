<?= snippet('header') ?>
<?php foreach ($page->children()->listed() as $slider) : ?>
    <?php snippet($slider->intendedTemplate(), compact('slider')) ?>
<?php endforeach ?>
<?= snippet('slider') ?>
<?= snippet('footer') ?>
