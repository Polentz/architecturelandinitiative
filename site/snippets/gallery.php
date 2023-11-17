<?php if ($media->type() == 'image') : ?>
    <figure class="gallery-item image-item" data-type="<?= $media->mediatype()->slug() ?>" data-filter="<?= $media->filter()->slug() ?>">
        <img src="<?= $media->resize(1200, null)->url() ?>" alt="<?= $media->alt() ?>">
        <figcaption>
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
            </div>
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <div class="media-caption text-subtext">
                    <?= $media->caption()->kt() ?>                                
                </div>
            <?php endif ?>
        </figcaption>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'video') : ?>
    <figure class="gallery-item video-item" data-type="<?= $media->mediatype()->slug() ?>" data-filter="<?= $media->filter()->slug() ?>">
        <video src="<?= $media->url() ?>" autoplay muted controlslist="noplaybackrate nodownload" disablePictureInPicture type="video"></video>
        <figcaption>
            <div class="media-summary text-label">
                <?php if ($media->mediatype()->isNotEmpty()): ?>
                    <p>Media type: <?= $media->mediatype() ?></p>
                <?php endif ?>
                <?php if ($media->filter()->isNotEmpty()): ?>
                    <p>Process stage: <?= $media->filter() ?></p>
                <?php endif ?>
                <?php if ($slots->filterByProject()): ?>
                    <p>Project: <?= $media->project()?></p>
                <?php endif ?>
            </div>
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <div class="media-caption text-subtext">
                    <?= $media->caption()->kt() ?>                                
                </div>
            <?php endif ?>
        </figcaption>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'audio') : ?>
    <figure class="gallery-item audio-item" data-type="<?= $media->mediatype()->slug() ?>" data-filter="<?= $media->filter()->slug() ?>">
        <audio src="<?= $media->url() ?>" controls controlslist="noplaybackrate nodownload" preload="metadata" type="audio"></audio>
        <figcaption>
            <div class="media-summary text-label">
                <?php if ($media->mediatype()->isNotEmpty()): ?>
                    <p>Media type: <?= $media->mediatype() ?></p>
                <?php endif ?>
                <?php if ($media->filter()->isNotEmpty()): ?>
                    <p>Process stage: <?= $media->filter() ?></p>
                <?php endif ?>
                <?php if ($slots->filterByProject()): ?>
                    <p>Project: <?= $media->project()?></p>
                <?php endif ?>
            </div>
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <div class="media-caption text-subtext">
                    <?= $media->caption()->kt() ?>                                
                </div>
            <?php endif ?>
        </figcaption>
    </figure> 
<?php endif ?>