<?= snippet('header') ?>

<main id="projects" class="grid-layout main">
    <ul class="scroll-wrapper">
        <?php foreach ($pages->template('project') as $page) : ?> 
            <li class="grid-layout-title" <?php if ($cover = $page->background()->toFile()): ?>style="background-image: url('<?= $cover->url() ?>');"<?php endif ?>>
                <h2><a href="<?= $page->url() ?>"><?= $page->title()->kt() ?></a></h2>
            </li>
        <?php endforeach ?>
    </ul>
</main>

