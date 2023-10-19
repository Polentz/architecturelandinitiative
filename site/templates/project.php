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
            <button class="info-close-button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#1d1d1b"/>
                    <path d="M0 0V-1H-1V0H0ZM40 0H41V-1H40V0ZM40 40V41H41V40H40ZM0 40H-1V41H0V40ZM0 1H40V-1H0V1ZM39 0V40H41V0H39ZM40 39H0V41H40V39ZM1 40V0H-1V40H1Z" fill="#1d1d1b" mask="url(#path-1-inside-1_478_42)"/>
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

    <div class="button-wrapper">
        <button class="info-open-button">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
                <path d="M20.4682 14.7681C19.7002 14.7681 19.1002 14.1681 19.1002 13.4001C19.1002 12.6081 19.7002 12.0081 20.4682 12.0081C21.2602 12.0081 21.8602 12.6081 21.8602 13.4001C21.8602 14.1681 21.2602 14.7681 20.4682 14.7681ZM19.2682 24.2241C18.9322 25.8081 19.6762 26.8401 20.9722 26.8401C22.2682 26.8401 23.2762 25.8321 24.3802 23.2881L25.3402 23.7681C24.0922 26.5521 22.7962 27.9921 20.9242 27.9921C18.8842 27.9921 17.6602 26.3121 18.1162 24.1761L19.1962 19.0881L18.7882 18.5601H14.6602L14.8762 17.4801H20.6842L19.2682 24.2241Z" fill="#ffffff"/>
                <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
            </svg>
        </button>
        <button class="filter-button">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
            <path d="M7 12H33M7 20H33M7 28H33" stroke="#ffffff"/>
            <circle cx="14" cy="12" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
            <circle cx="26" cy="20" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
            <circle cx="14" cy="28" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
        </svg>
        </button>
    </div>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>