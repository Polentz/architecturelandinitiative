<?php if($block->date()->toDate() > time()) : ?>
    <div class="accordion --future">
        <div class="accordion-header">
            <ul class="accordion-header-topbar">
                <li class="text-label"><?= $block->date()->toDate('D') ?> <?= $block->date()->toDate('d.m.Y') ?></li>
                <?php foreach ($block->topbar()->toStructure() as $item): ?>
                    <li class="text-label"><?= $item->category()->upper() ?> <?= $item->text() ?></li>
                <?php endforeach ?>
            </ul>
            <div class="accordion-header-title">
                <h3><?= $block->title() ?></h3>
                <p class="text-subtext"><?= $block->subtitle() ?></p>
            </div>
        </div>
<?php elseif ($block->date()->toDate() < time()) : ?>
    <div class="accordion --past">
        <div class="accordion-header">
            <ul class="accordion-header-topbar">
                <li class="text-subtext"><?= $block->title() ?></li> 
                <li class="text-label"><?= $block->date()->toDate('D') ?> <?= $block->date()->toDate('d.m.Y') ?></li>
                <?php foreach ($block->topbar()->toStructure() as $item): ?>
                    <li class="text-label"><?= $item->category()->upper() ?> <?= $item->text() ?></li>
                <?php endforeach ?>
            </ul>
        </div>
<?php endif ?>
        <div class="accordion-content">
            <div class="text-subtext">
                <?= $block->body()->kt() ?>
            </div>
            <div class="text-label">
                <?= $block->credits()->kt() ?>
            </div>
            <div class="accordion-image"></div>
        </div>
    </div>