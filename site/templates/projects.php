<?= snippet('header') ?>

<main id="projects" class="grid-layout main">
    <?php foreach ($projects as $project) : ?> 
        <div class="grid-layout-item">
            <h2><a class="item-title" data-name="<?= $project->title() ?>" href="<?= $project->url() ?>"></a></h2>
        </div>
    <?php endforeach ?>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>