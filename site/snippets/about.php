<!-- slider-block: turn into blocks -->

<section class="slider">
    <button class="slider-button">
        <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13M13 13L25 25M13 13L25 1M13 13L1 25"/>
        </svg>
    </button>
    <div class="slider-wrapper">
        <div class="slider-block">
            <div class="block-title">
                <h2>About</h2>
            </div>
            <div class="block-text">
                <div class="text-label">
                    <p>ALIN</p>
                </div>
                <div class="text">
                    <?= $site->about()->kt() ?>
                </div>
            </div>
        </div>
    </div>
</section>