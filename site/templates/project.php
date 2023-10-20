<?= snippet('header') ?>

<main class="project-layout main">
    <a class="button header-button" href="<?= $site->url() ?>">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8.65085L31.5 18.2342V31.5H8.5V18.2342L20 8.65085Z" stroke="#1d1d1b"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
        </svg>
    </a>

    <section class="gallery">
        <div class="gallery-wrapper">
            <div class="gallery-grid">
                <?php foreach ($page->gallery()->toFiles() as $media) : ?>
                    <?php if ($media->type() == 'image') : ?>
                        <figure class="gallery-item">
                            <img src="<?= $media->resize(800, null)->url() ?>" alt="<?= $media->alt() ?>">
                            <figcaption class="text-label">
                                <?= $media->caption()->kt() ?>
                            </figcaption>
                        </figure>
                    <?php endif ?> 
                    <?php if ($media->type() == 'video') : ?>
                        <figure class="gallery-item">
                            <video src="<?= $media->url() ?>" controls controlslist="noplaybackrate nodownload" disablePictureInPicture type="video"></video>
                            <figcaption class="text-label">
                                <?= $media->caption()->kt() ?>
                            </figcaption>
                        </figure>
                    <?php endif ?> 
                    <?php if ($media->type() == 'audio') : ?>
                        <figure class="gallery-item" dataset-filterSetA="<?= $media->filterSetA()->slug() ?>" dataset-filterSetB="<?= $media->filterSetB()->slug() ?>">
                            <audio src="<?= $media->url() ?>" controls preload="metadata" type="audio"></audio>                            
                            <figcaption>
                                <div class="text-label">
                                    <p><?= $page->filterSetATitle() ?>: <?= $media->filterSetA() ?></p>
                                    <p><?= $page->filterSetBTitle() ?>: <?= $media->filterSetB() ?></p>
                                </div>
                                <div class="text-subtext">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea sunt consectetur earum voluptates quis dolore quo neque blanditiis repellat?</p>
                                </div>
                            </figcaption>
                        </figure> 
                    <?php endif ?>             
                <?php endforeach ?> 
            </div>
        </div>
    </section>

    <section class="info-slider">
        <div class="info-slider-wrapper">
            <button class="button slider-button" type="button">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39"/>
                    <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#1d1d1b"/>
                    <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
                </svg>
            </button>
            <div class="slider-content">
                <div class="slider-block">
                    <div class="slider-block-title">
                        <h2>By Us for Us</h2>
                    </div>
                    <div class="slider-block-text">
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

    <div class="box-container">
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
                    <div class="inner-box-column">
                        <div class="inner-box-header">
                            Lorem, ipsum.
                        </div>
                        <div class="inner-box-content">
                            <div class="text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ratione a nobis. Rerum ex quisquam reprehenderit! Est ratione sed vel et modi reiciendis quidem temporibus ab sapiente consectetur voluptates maiores eveniet ducimus suscipit dignissimos expedita nisi, id voluptatibus dolore laudantium at illum laborum minima. Id quae odio tenetur ab nostrum...
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

        <div id="filters" class="box-wrapper">
            <div class="box">
                <button class="button filter-button" type="button">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
                        <path d="M7 12H33M7 20H33M7 28H33" stroke="#ffffff"/>
                        <circle cx="14" cy="12" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
                        <circle cx="26" cy="20" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
                        <circle cx="14" cy="28" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
                        <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
                    </svg>
                </button>
                <div class="inner-box">
                    <div class="inner-box-column">
                        <div class="inner-box-header">
                            <p>Filter by <?= $page->filterSetATitle() ?></p>
                        </div>
                        <div class="inner-box-content">
                            <ul class="text-label">
                                <?php foreach ($page->filterSetA()->toStructure() as $filter): ?>
                                    <li id="<?= $filter->filter()->slug() ?>" class="filter" data-filter="<?= $filter->filter()->slug() ?>">
                                        <?= $filter->filter()->kt() ?></li>
                                <?php endforeach ?>
                            </ul>
                        </div>
                    </div>
                    <div class="inner-box-column">
                        <div class="inner-box-header">
                            <p>Filter by <?= $page->filterSetBTitle() ?></p>
                        </div>
                        <div class="inner-box-content">
                            <ul class="text-label">
                                <?php foreach ($page->filterSetB()->toStructure() as $filter): ?>
                                    <li id="<?= $filter->filter()->slug() ?>" class="filter" data-filter="<?= $filter->filter()->slug() ?>">
                                        <?= $filter->filter()->kt() ?></li>
                                <?php endforeach ?>
                            </ul>
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
    </div>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>