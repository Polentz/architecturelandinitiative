<?= snippet('header') ?>

<main class="grid-layout main">
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
            <h2>By Us for Us</h2>
        </li>
    </ul>
</main>

<main class="cover-layout main">
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
            <h2>Last Element</h2>
        </li>
    </ul>
    <button class="button cover-button">
        <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 11L12.75 21M24 11L12.75 1M24 11L0 11"/>
        </svg>
    </button>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>
