<div class="accordion" data-type="<?= $block->typology()->slug() ?>">
    <div class="accordion-wrapper">
        <ul class="accordion-topbar">
            <li class="accordion-topbar-item text-label">TYPE <?= $block->typology() ?></li>
            <?php foreach ($block->topbar()->toStructure() as $item): ?>
                <?php if ($item->isNotEmpty()) : ?>
                    <li class="accordion-topbar-item text-label"><?= $item->category()->upper() ?> <?= $item->text() ?></li>
                <?php endif ?>
            <?php endforeach ?>
        </ul>
        <?php if ($block->credits()->isNotEmpty() || $block->info()->isNotEmpty() || $block->body()->isNotEmpty() || $block->image()->isNotEmpty()) : ?>
            <ul class="accordion-items">
                <li class="accordion-content">
                    <div class="accordion-title">
                        <h3><?= $block->title() ?></h3>
                    </div>
                    <div class="accordion-text">
                        <?php if ($block->credits()->isNotEmpty()) : ?>
                            <div class="accordion-text-block text-list">
                                <?= $block->credits()->kt() ?>
                            </div>
                        <?php endif ?>
                        <?php if ($block->info()->isNotEmpty()) : ?>
                            <div class="accordion-text-block text-subtext">
                                <?= $block->info()->kt() ?>
                            </div>
                        <?php endif ?>
                        <?php if ($block->body()->isNotEmpty()) : ?>
                            <div class="accordion-text-block text">
                                <?= $block->body()->kt() ?>
                            </div>
                        <?php endif ?>
                    </div>
                </li>
                <?php if ($image = $block->image()->toFile()) : ?>
                    <li class="accordion-image">
                        <figure class="accordion-image-wrapper">
                            <img src="<?= $image->url() ?>">
                            <figcaption class="text-label"><?= $block->imagecaption()->kt() ?></figcaption>
                        </figure>
                    </li>
                <?php endif ?>
            </ul>
        <?php endif ?>
    </div>
</div>