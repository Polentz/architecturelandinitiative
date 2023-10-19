<!-- slider-block: turn into blocks -->
<section id="about" class="slider">
    <div class="slider-wrapper">
        <button class="button slider-button" type="button">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#1d1d1b"/>
                <path d="M0 0V-1H-1V0H0ZM40 0H41V-1H40V0ZM40 40V41H41V40H40ZM0 40H-1V41H0V40ZM0 1H40V-1H0V1ZM39 0V40H41V0H39ZM40 39H0V41H40V39ZM1 40V0H-1V40H1Z" fill="#1d1d1b" mask="url(#path-1-inside-1_478_42)"/>
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