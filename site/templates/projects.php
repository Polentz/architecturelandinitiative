<?= snippet('header') ?>


<a class="button header-button" href="<?= $site->url() ?>">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.65085L31.5 18.2342V31.5H8.5V18.2342L20 8.65085Z" stroke="#1d1d1b"/>
        <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
    </svg>
</a>

<main class="main">
    <section class="gallery">
        <div class="gallery-wrapper">
            <div class="gallery-grid">
                <?php foreach ($page->gallery()->toFiles() as $media) : ?>
                    <?= snippet('gallery', ['media' => $media]) ?>
                <?php endforeach ?> 
            </div>
        </div>
    </section>

    <section class="info-slider">
        <div class="info-slider-wrapper">
            <button class="button slider-button" type="button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#1d1d1b"/>
                </svg>
            </button>
            <div class="slider-content">
                <?= $page->sectionBlocks()->toBlocks() ?>
            </div>
        </div>
    </section>
</main>

<section class="box-container">
    <div id="infos" class="box-wrapper">
        <div class="box">
            <button class="button i-button" type="button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
                    <path d="M20.4682 14.7681C19.7002 14.7681 19.1002 14.1681 19.1002 13.4001C19.1002 12.6081 19.7002 12.0081 20.4682 12.0081C21.2602 12.0081 21.8602 12.6081 21.8602 13.4001C21.8602 14.1681 21.2602 14.7681 20.4682 14.7681ZM19.2682 24.2241C18.9322 25.8081 19.6762 26.8401 20.9722 26.8401C22.2682 26.8401 23.2762 25.8321 24.3802 23.2881L25.3402 23.7681C24.0922 26.5521 22.7962 27.9921 20.9242 27.9921C18.8842 27.9921 17.6602 26.3121 18.1162 24.1761L19.1962 19.0881L18.7882 18.5601H14.6602L14.8762 17.4801H20.6842L19.2682 24.2241Z" fill="#ffffff"/>
                    <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
                </svg>
            </button>
            <div class="inner-box">
                <div class="inner-box-column grid-span-2">
                    <ul class="inner-box-header">
                        <?php foreach ($page->summary()->toStructure() as $summary) : ?>
                            <li><?= $summary->category()->upper() ?> <?= $summary->text() ?></p>
                        <?php endforeach ?>
                    </ul>
                    <div class="inner-box-content">
                        <div class="text">
                            <?php if ($blocks = $page->sectionBlocks()->toBlocks('sectionblock')) : ?>
                                <?= $blocks->first()->copy()->excerpt(300) ?>
                            <?php endif ?>
                        </div>
                        <button class="read-more-button" type="button">
                            Read More
                        </button>
                    </div>
                </div>
                <button class="button x-button" type="button">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
                        <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#ffffff"/>
                        <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <?= snippet('filters') ?>
</section>

<?= snippet('slider') ?>
<?= snippet('footer') ?>