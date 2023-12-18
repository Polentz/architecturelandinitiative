<?php if($block->date()->toDate() > time()) : ?>
    <div class="accordion --ongoing" data-type="<?= $block->typology()->slug() ?>" data-category="<?= $block->project()->slug() ?>">
        <div class="accordion-wrapper">
            <ul class="accordion-topbar">
                <li class="topbar-item topbar-date text-label"><?= $block->date()->toDate('D') ?> <?= $block->date()->toDate('d.m.Y') ?></li>
                <?php if ($block->typology()->isNotEmpty()) : ?>
                    <li class="topbar-item text-label">TYPE <?= $block->typology() ?></li>
                <?php endif ?>
                <?php foreach ($block->topbar()->toStructure() as $item): ?>
                    <li class="topbar-item text-label"><?= $item->category()->upper() ?> <?= $item->text() ?></li>
                <?php endforeach ?>
                <?php if ($block->project()->isNotEmpty()) : ?>
                    <li class="topbar-item text-label">PROJECT <?= $block->project() ?></li>
                <?php endif ?>
            </ul>
            <ul class="accordion-items">
                <li class="accordion-text">    
                    <div class="accordion-title">            
                        <h3><?= $block->title() ?></h3>
                        <?php if ( $block->subtitle()->isNotEmpty()) : ?>
                            <p class="text"><?= $block->subtitle() ?></p>
                        <?php endif ?>  
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-content-block text">
                            <?= $block->body()->kt() ?>
                        </div>
                        <div class="accordion-content-block text-caption">
                            <?= $block->credits()->kt() ?>
                        </div>
                        <div class="accordion-content-block text-subtext">
                            <?= $block->info()->kt() ?>
                        </div>
                    </div>
                </li>
                <?php if ($image = $block->image()->toFile()) : ?>
                    <li class="accordion-image">
                        <img src="<?= $image->url() ?>" alt="<?= $image->alt() ?>">
                    </li>
                <?php endif ?>
            </ul>
        </div>
    </div>

<?php elseif ($block->date()->toDate() < time()) : ?>
    <div class="accordion-divider">
        <p class="text-label">PAST</p>
    </div>
    <div class="accordion --past" data-type="<?= $block->typology() ?>" data-category="<?= $block->project() ?>">
    <div class="accordion-wrapper">
        <ul class="accordion-topbar">
            <li class="topbar-title text-subtext"><?= $block->title() ?></li>
            <li class="topbar-item topbar-date text-label"><?= $block->date()->toDate('D') ?> <?= $block->date()->toDate('d.m.Y') ?></li>
            <?php if ($block->typology()->isNotEmpty()) : ?>
                <li class="topbar-item text-label">TYPE <?= $block->typology() ?></li>
            <?php endif ?>
            <?php foreach ($block->topbar()->toStructure() as $item): ?>
                <li class="topbar-item text-label"><?= $item->category()->upper() ?> <?= $item->text() ?></li>
            <?php endforeach ?>
            <?php if ($block->project()->isNotEmpty()) : ?>
                <li class="topbar-item text-label">PROJECT <?= $block->project() ?></li>
            <?php endif ?>
        </ul>
        <ul class="accordion-items">
            <li class="accordion-text">    
                <div class="accordion-content">
                    <div class="accordion-title">            
                        <h3><?= $block->title() ?></h3>
                        <?php if ( $block->subtitle()->isNotEmpty()) : ?>
                            <p class="text"><?= $block->subtitle() ?></p>
                        <?php endif ?>  
                    </div>
                    <div class="accordion-content-block text">
                        <?= $block->body()->kt() ?>
                    </div>
                    <div class="accordion-content-block text-caption">
                        <?= $block->credits()->kt() ?>
                    </div>
                    <div class="accordion-content-block text-subtext">
                        <?= $block->info()->kt() ?>
                    </div>
                </div>
            </li>
            <?php if ($image = $block->image()->toFile()) : ?>
                <li class="accordion-image">
                    <img src="<?= $image->url() ?>" alt="<?= $image->alt() ?>">
                </li>
            <?php endif ?>
        </ul>
    </div>
</div>
<?php endif ?>
