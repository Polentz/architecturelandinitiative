<?= snippet('header') ?>

<main class="main">
    <section class="grid-layout">
        <?php foreach ($projects as $project) : ?> 
            <div class="grid-layout-item">
                <h2><a class="item-title" data-name="<?= $project->title() ?>" href="<?= $project->url() ?>"></a></h2>
            </div>
        <?php endforeach ?>
        <div class="grid-layout-item">
            <h2><a class="item-title" data-name="Jardin des Nations" href=""></a></h2>
        </div>
        <div class="grid-layout-item">
            <h2><a class="item-title" data-name="Schlieren" href=""></a></h2>
        </div>
    </section>
    <section class="page-intro"> 
        <div class="text-label">
            <p><?= $page->title() ?></p>
        </div>
        <div class="text-intro">
            <p>Architecture Land Initiative brings together design, research, and strategic thinking to address the necessity for a shift towards a less destructive, 'non-extractive' architecture. Multidisciplinary in nature, our initiatives support community-led solutions, acknowledge lived experiences and provide blueprints for direct action.</p>
        </div>
    </section>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>