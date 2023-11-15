<?= snippet('header') ?>

<main id="projects" class="grid-layout main">
    <ul class="scroll-wrapper">
        <?php foreach ($page->children() as $page) : ?> 
            <li class="grid-layout-title">
                <h2><a href="<?= $page->url() ?>"><?= $page->title()->kt() ?></a></h2>
            </li>
        <?php endforeach ?>
    </ul>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>