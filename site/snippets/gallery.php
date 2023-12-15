<?php if ($media->type() == 'image') : ?>
    <figure class="gallery-item image-item" data-type="<?= $media->mediatype()->slug() ?>" data-category="<?= $media->filter()->slug() ?>" data-project="<?= $media->parent()->slug()?>">
        <img src="<?= $media->resize(1200, null)->url() ?>" alt="<?= $media->alt() ?>">
        <figcaption>
            <div class="media-text-wrapper">
                <div class="media-summary text-label">
                    <?php if ($media->mediatype()->isNotEmpty()): ?>
                        <p>Media type: <?= $media->mediatype() ?></p>
                    <?php endif ?>
                    <?php if ($media->filter()->isNotEmpty()): ?>
                        <p>Process stage: <?= $media->filter() ?></p>
                    <?php endif ?>
                    <?php if ($slots->showProject()): ?>
                        <p>Project: <a href="<?= $media->parent()->url()?>"><?= $media->parent()->title()?></a></p>
                    <?php endif ?>
                </div>
                <?php if ($media->caption()->isNotEmpty()) : ?>
                    <hr>
                    <div class="media-credits text-label">
                        <?= $media->caption()->kt() ?>
                    </div>
                    <?php endif ?>
                <?php if ($media->info()->isNotEmpty()): ?>
                    <div class="media-info text">
                        <?= $media->info()->kt() ?>
                    </div>
                <?php endif ?>
            </div>
        </figcaption>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'video') : ?>
    <figure class="gallery-item video-item" data-type="<?= $media->mediatype()->slug() ?>" data-category="<?= $media->filter()->slug() ?>" data-project="<?= $media->parent()->slug()?>">
        <video src="<?= $media->url() ?>" autoplay muted loop controlslist="noplaybackrate nodownload" disablePictureInPicture type="video"></video>
        <figcaption>
            <div class="media-text-wrapper">
                <div class="media-summary text-label">
                    <?php if ($media->mediatype()->isNotEmpty()): ?>
                        <p>Media type: <?= $media->mediatype() ?></p>
                    <?php endif ?>
                    <?php if ($media->filter()->isNotEmpty()): ?>
                        <p>Process stage: <?= $media->filter() ?></p>
                    <?php endif ?>
                    <?php if ($slots->showProject()): ?>
                        <p>Project: <a href="<?= $media->parent()->url()?>"><?= $media->parent()->title()?></a></p>
                    <?php endif ?>
                </div>
                <?php if ($media->caption()->isNotEmpty()) : ?>
                    <hr>
                    <div class="media-credits text-label">
                        <?= $media->caption()->kt() ?>
                    </div>
                    <?php endif ?>
                <?php if ($media->info()->isNotEmpty()): ?>
                    <div class="media-info text">
                        <?= $media->info()->kt() ?>
                    </div>
                <?php endif ?>
            </div>
        </figcaption>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'audio') : ?>
    <figure class="gallery-item audio-item" data-type="<?= $media->mediatype()->slug() ?>" data-category="<?= $media->filter()->slug() ?>" data-project="<?= $media->parent()->slug()?>">
        <audio src="<?= $media->url() ?>" controls controlslist="noplaybackrate nodownload" preload="metadata" type="audio"></audio>
        <figcaption>
            <div class="media-text-wrapper">
                <div class="media-summary text-label">
                    <?php if ($media->mediatype()->isNotEmpty()): ?>
                        <p>Media type: <?= $media->mediatype() ?></p>
                    <?php endif ?>
                    <?php if ($media->filter()->isNotEmpty()): ?>
                        <p>Process stage: <?= $media->filter() ?></p>
                    <?php endif ?>
                    <?php if ($slots->showProject()): ?>
                        <p>Project: <a href="<?= $media->parent()->url()?>"><?= $media->parent()->title()?></a></p>
                    <?php endif ?>
                </div>
                <?php if ($media->caption()->isNotEmpty()) : ?>
                    <hr>
                    <div class="media-credits text-label">
                        <?= $media->caption()->kt() ?>
                    </div>
                    <?php endif ?>
                <?php if ($media->info()->isNotEmpty()): ?>
                    <div class="media-info text">
                        <?= $media->info()->kt() ?>
                    </div>
                <?php endif ?>
            </div>
        </figcaption>
    </figure> 
<?php endif ?>

<?php if ($media->type() == 'document') : ?>
    <figure class="gallery-item document-item" data-type="<?= $media->mediatype()->slug() ?>" data-category="<?= $media->filter()->slug() ?>" data-project="<?= $media->parent()->slug()?>">
        <div class="pdf text-label">
            <?php if ($media->caption()->isNotEmpty()) : ?>
                <?= $media->caption()->kt() ?>
            <?php endif ?>
            <a href="<?= $media->url() ?>" target="_blank" rel="noopener noreferrer" class="button" type="button">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" stroke="#fff"/>
                    <path d="M20 12.3636C20 11.2063 20.389 10.0964 21.0815 9.27808C21.7739 8.45974 22.713 8 23.6923 8H31.0769C31.3217 8 31.5565 8.11493 31.7296 8.31952C31.9027 8.52411 32 8.80158 32 9.09091V26.5455C32 26.8348 31.9027 27.1123 31.7296 27.3168C31.5565 27.5214 31.3217 27.6364 31.0769 27.6364H23.6923C22.713 27.6364 21.7739 28.0961 21.0815 28.9144C20.389 29.7328 20 30.8427 20 32M20 12.3636V32M20 12.3636C20 11.2063 19.611 10.0964 18.9185 9.27808C18.2261 8.45974 17.287 8 16.3077 8H8.92308C8.67826 8 8.44347 8.11493 8.27036 8.31952C8.09725 8.52411 8 8.80158 8 9.09091V26.5455C8 26.8348 8.09725 27.1123 8.27036 27.3168C8.44347 27.5214 8.67826 27.6364 8.92308 27.6364H16.3077C17.287 27.6364 18.2261 28.0961 18.9185 28.9144C19.611 29.7328 20 30.8427 20 32" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        <figcaption>
            <div class="media-text-wrapper">
                <div class="media-summary text-label">
                    <?php if ($media->mediatype()->isNotEmpty()): ?>
                        <p>Media type: <?= $media->mediatype() ?></p>
                    <?php endif ?>
                    <?php if ($media->filter()->isNotEmpty()): ?>
                        <p>Process stage: <?= $media->filter() ?></p>
                    <?php endif ?>
                    <?php if ($slots->showProject()): ?>
                        <p>Project: <a href="<?= $media->parent()->url()?>"><?= $media->parent()->title()?></a></p>
                    <?php endif ?>
                </div>
                <?php if ($media->info()->isNotEmpty()): ?>
                    <div class="media-info text">
                        <?= $media->info()->kt() ?>
                    </div>
                <?php endif ?>
            </div>
        </figcaption>
    </figure> 
<?php endif ?>