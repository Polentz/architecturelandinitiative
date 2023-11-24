<?= snippet('header') ?>

<main id="tools" class="cover-layout main">
    <?php foreach ($tools as $tool) : ?>
        <!-- <div class="cover-layout-item" <?php if ($cover = $tool->background()->toFile()) : ?>style="background-image: url('<?= $cover->url() ?>');"<?php endif ?>>
            <h2><a href="<?= $tool->url() ?>"><?= $tool->title()->kt() ?></a></h2>
        </div> -->
        <div class="grid-layout-item">
            <h2><a href="<?= $tool->url() ?>"><?= $tool->title()->kt() ?></a></h2>
        </div>
    <?php endforeach ?>
    <!-- <button class="button cover-button" type="button">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
            <path d="M32 20L20.75 30M32 20L20.75 10M32 20L8 20" stroke="#ffffff"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
        </svg>
    </button> -->
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>
