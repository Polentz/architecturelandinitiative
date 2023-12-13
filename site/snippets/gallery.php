<?php if ($media->type() == 'image') : ?>
    <figure class="gallery-item image-item" data-type="<?= $media->mediatype()->slug() ?>" data-category="<?= $media->filter()->slug() ?>">
        <img src="<?= $media->resize(1200, null)->url() ?>" alt="<?= $media->alt() ?>">
        <?= snippet('caption', ['media' => $media]) ?>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'video') : ?>
    <figure class="gallery-item video-item" data-type="<?= $media->mediatype()->slug() ?>" data-category="<?= $media->filter()->slug() ?>">
        <video src="<?= $media->url() ?>" autoplay muted loop controlslist="noplaybackrate nodownload" disablePictureInPicture type="video"></video>
        <?= snippet('caption', ['media' => $media]) ?>
    </figure>
<?php endif ?> 

<?php if ($media->type() == 'audio') : ?>
    <figure class="gallery-item audio-item" data-type="<?= $media->mediatype()->slug() ?>" data-category="<?= $media->filter()->slug() ?>">
        <audio src="<?= $media->url() ?>" controls controlslist="noplaybackrate nodownload" preload="metadata" type="audio"></audio>
        <?= snippet('caption', ['media' => $media]) ?>
    </figure> 
<?php endif ?>