<?php if ($media->type() == 'image') : ?>
    <figure class="gallery-item image-item" type="<?= $media->type() ?>" data-filterseta="<?= $media->filterSetA() ?>" data-filtersetb="<?= $media->filterSetB() ?>" data-tools="<?= $media->tools() ?>">
        <img src="<?= $media->resize(1200, null)->url() ?>" alt="<?= $media->alt() ?>">
        <figcaption>
            <div class="text-label">
                <?php if ($media->filterSetATitle()->isNotEmpty()) : ?> 
                    <p><?= $media->filterSetATitle() ?>: <?= $media->filterSetA()?></p>
                <?php endif ?>
                <?php if ($media->filterSetBTitle()->isNotEmpty()) : ?> 
                    <p><?= $media->filterSetBTitle() ?>: <?= $media->filterSetB()?></p>
                <?php endif ?>
            </div>
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <div class="text-subtext">
                    <?= $media->caption()->kt() ?>                                
                </div>
            <?php endif ?>
        </figcaption>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'video') : ?>
    <figure class="gallery-item video-item" type="<?= $media->type() ?>" data-filterseta="<?= $media->filterSetA() ?>" data-filtersetb="<?= $media->filterSetB() ?>" data-tools="<?= $media->tools() ?>">
        <video src="<?= $media->url() ?>" autoplay muted controlslist="noplaybackrate nodownload" disablePictureInPicture type="video"></video>
        <figcaption>
            <div class="text-label">
                <?php if ($media->filterSetATitle()->isNotEmpty()) : ?> 
                    <p><?= $media->filterSetATitle() ?>: <?= $media->filterSetA()?></p>
                <?php endif ?>
                <?php if ($media->filterSetBTitle()->isNotEmpty()) : ?> 
                    <p><?= $media->filterSetBTitle() ?>: <?= $media->filterSetB()?></p>
                <?php endif ?>
            </div>
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <div class="text-subtext">
                    <?= $media->caption()->kt() ?>                                
                </div>
            <?php endif ?>
        </figcaption>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'audio') : ?>
    <figure class="gallery-item audio-item" type="<?= $media->type() ?>" data-filterseta="<?= $media->filterSetA() ?>" data-filtersetb="<?= $media->filterSetB() ?>" data-tools="<?= $media->tools() ?>">
        <audio src="<?= $media->url() ?>" controls controlslist="noplaybackrate nodownload" preload="metadata" type="audio"></audio>
        <figcaption>
            <div class="text-label">
                <?php if ($media->filterSetATitle()->isNotEmpty()) : ?> 
                    <p><?= $media->filterSetATitle() ?>: <?= $media->filterSetA()?></p>
                <?php endif ?>
                <?php if ($media->filterSetBTitle()->isNotEmpty()) : ?> 
                    <p><?= $media->filterSetBTitle() ?>: <?= $media->filterSetB()?></p>
                <?php endif ?>
            </div>
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <div class="text-subtext">
                    <?= $media->caption()->kt() ?>                                
                </div>
            <?php endif ?>
        </figcaption>
    </figure> 
<?php endif ?>  