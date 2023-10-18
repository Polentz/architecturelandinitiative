<?= snippet('header') ?>

<main class="project-layout main">
    
    <section class="gallery">
        <div class="gallery-wrapper">
            <div class="gallery-grid">
                <?php foreach ($page->gallery()->toFiles() as $image) : ?>
                    <figure class="gallery-item">
                        <img src="<?= $image->resize(800, null)->url() ?>" alt="<?= $image->alt() ?>">
                        <?php if($image->caption()->isNotEmpty()) : ?>
                            <figcaption>
                                <?= $image->caption()->kt() ?>
                            </figcaption>
                        <?php endif ?>
                    </figure>
                <?php endforeach ?>
            </div>
        </div>
    </section>

    <section class="info">
        <div class="info-wrapper">
            <button class="button info-button">
                <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M13 13L25 25M13 13L25 1M13 13L1 25"/>
                </svg>
            </button>
            <div class="info-content">
                <div class="info-block">
                    <div class="block-title">
                        <h2>By Us for Us</h2>
                    </div>
                    <div class="block-text">
                        <div class="text-label">
                            <p>By Us for Us</p>
                        </div>
                        <div class="text">
                            <?= $site->about()->kt() ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>