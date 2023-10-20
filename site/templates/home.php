<?= snippet('header') ?>

<main class="grid-layout main">
    <button class="button header-button" type="button">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7.5" y="7.5" width="25" height="25" stroke="#1d1d1b"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
        </svg>
    </button>
    <ul class="scroll-wrapper">
        <?php foreach ($pages->template('project') as $page): ?>
            <li class="grid-layout-title" <?php if ($cover = $page->background()->toFile()): ?>style="background-image: url('<?= $cover->url() ?>');"<?php endif ?>>
                <h2><a href="<?= $page->url() ?>"><?= $page->title()->kt() ?></a></h2>
            </li>
        <?php endforeach ?>
        <li class="grid-layout-title">
            <h2>Shared Landscapes</h2>
        </li>
        <li class="grid-layout-title">
            <h2>Jardin des Nations</h2>
        </li>
        <li class="grid-layout-title">
            <h2>Schlieren</h2>
        </li>
        <li class="grid-layout-title">
            <h2>Next Project</h2>
        </li>
    </ul>
</main>

<main class="cover-layout main">
    <button class="button header-button" type="button">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 33L7 7L11.3333 7L11.3333 33L15.6667 33L15.6667 7L20 7L20 33L24.3333 33L24.3333 7L28.6667 7L28.6667 33L33 33L33 7" stroke="#1d1d1b"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
        </svg>
    </button>
    <button class="button cover-button" type="button">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
            <path d="M32 20L20.75 30M32 20L20.75 10M32 20L8 20" stroke="#ffffff"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
        </svg>
    </button>
    <ul class="scroll-wrapper">
        <?php foreach ($pages->template('project') as $page): ?>
            <li class="cover-layout-title" <?php if ($cover = $page->background()->toFile()) : ?>style="background-image: url('<?= $cover->url() ?>');"<?php endif ?>>
                <h2><a href="<?= $page->url() ?>"><?= $page->title()->kt() ?></a></h2>
            </li>
        <?php endforeach ?>
        <li class="cover-layout-title">
            <h2>Shared Landscapes</h2>
        </li>
        <li class="cover-layout-title">
            <h2>Jardin des Nations</h2>
        </li>
        <li class="cover-layout-title">
            <h2>Schlieren</h2>
        </li>
        <li class="cover-layout-title">
            <h2>Next Project</h2>
        </li>
    </ul>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>
