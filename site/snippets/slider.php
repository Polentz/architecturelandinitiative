<!-- slider-block: turn into blocks -->
<section id="about" class="slider">
    <div class="slider-wrapper">
        <button class="button slider-button" type="button">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" fill="#ffffff"/>
                <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#1d1d1b"/>
                <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
            </svg>
        </button>
        <div class="slider-content">
            <div class="slider-block">
                <div class="slider-block-title">
                    <h2>About</h2>
                </div>
                <div class="slider-block-text">
                    <div class="text-label">
                        <p>ALIN</p>
                    </div>
                    <div class="text">
                        <?= $site->about()->kt() ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>