<?= snippet('header') ?>

<main class="grid-layout main">
    <button class="button header-button">
        <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="25" height="25" stroke="#1D1D1B"/>
        </svg>
    </button>
    <ul class="scroll-wrapper">
        <li class="grid-layout-title">
            <h2>By Us for Us</h2>
        </li>
        <li class="grid-layout-title">
            <h2>Shared Landscapes</h2>
        </li>
        <li class="grid-layout-title">
            <h2>Jardin des Nations</h2>
        </li>
        <li class="grid-layout-title">
            <h2>Schlieren</h2>
        </li>
        <li class="grid-layout-title">
            <h2>Next Project</h2>
        </li>
    </ul>
</main>

<main class="cover-layout main">
    <button class="button header-button">
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 27L0.999999 1L5.33333 1L5.33333 27L9.66667 27L9.66667 1L14 1L14 27L18.3333 27L18.3333 1L22.6667 1L22.6667 27L27 27L27 1" stroke="#1D1D1B"/>
        </svg>
    </button>
    <ul class="scroll-wrapper">
        <li class="cover-layout-title" 
        <?php if ($cover = $page->background()->image()): ?>style="background-image: url('<?= $cover->url() ?>');"
        <?php endif ?>>
            <h2>By Us for Us</h2>
        </li>
        <li class="cover-layout-title">
            <h2>Shared Landscapes</h2>
        </li>
        <li class="cover-layout-title">
            <h2>Jardin des Nations</h2>
        </li>
        <li class="cover-layout-title">
            <h2>Schlieren</h2>
        </li>
        <li class="cover-layout-title">
            <h2>Next Project</h2>
        </li>
    </ul>
    <button class="button cover-button">
        <svg viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 11L12.75 21M24 11L12.75 1M24 11L0 11"/>
        </svg>
    </button>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>
