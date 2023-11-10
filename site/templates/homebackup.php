<?= snippet('header') ?>

<main id="projects" class="grid-layout main">
    <ul class="scroll-wrapper">
        <?php foreach ($pages->template('project') as $page): ?>
            <li class="grid-layout-title" <?php if ($cover = $page->background()->toFile()): ?>style="background-image: url('<?= $cover->url() ?>');"<?php endif ?>>
                <h2><a href="<?= $page->url() ?>"><?= $page->title()->kt() ?></a></h2>
            </li>
        <?php endforeach ?>
    </ul>
</main>

<main id="tools" class="cover-layout main">
    <button class="button cover-button" type="button">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
            <path d="M32 20L20.75 30M32 20L20.75 10M32 20L8 20" stroke="#ffffff"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
        </svg>
    </button>
    <ul class="scroll-wrapper">
        <?php foreach ($pages->template('tool') as $page): ?>
            <li class="cover-layout-title" <?php if ($cover = $page->background()->toFile()) : ?>style="background-image: url('<?= $cover->url() ?>');"<?php endif ?>>
                <h2><a href="<?= $page->url() ?>"><?= $page->title()->kt() ?></a></h2>
            </li>
        <?php endforeach ?>
    </ul>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>