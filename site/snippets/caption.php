<figcaption>
    <div class="media-text-wrapper">
        <div class="media-summary text-label">
            <?php if ($media->mediatype()->isNotEmpty()): ?>
                <p>Media type: <?= $media->mediatype() ?></p>
            <?php endif ?>
            <?php if ($media->filter()->isNotEmpty()): ?>
                <p>Process stage: <?= $media->filter() ?></p>
            <?php endif ?>
            <?php if ($slots->filterByProject()): ?>
                <p>Project: <a href="<?= $media->parent()->url()?>"><?= $media->parent()->title()?></a></p>
            <?php endif ?>
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <?= $media->caption()->kt() ?>
            <?php endif ?>
        </div>
        <?php if ($media->info()->isNotEmpty()): ?>
            <div class="media-info text">
                <?= $media->info()->kt() ?>
            </div>
        <?php endif ?>
    </div>
</figcaption>