<div class="slider-block">
    <div class="slider-block-title">
        <h2><?= $block->title() ?></h2>
    </div>
    <?= $block->blocks()->toBlocks() ?>
</div>