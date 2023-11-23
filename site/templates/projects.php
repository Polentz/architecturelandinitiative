<?= snippet('header') ?>

<main id="projects" class="grid-layout main">
    <?php foreach ($projects as $project) : ?> 
        <div class="grid-layout-item">
            <h2><a href="<?= $project->url() ?>"><?= $project->title()->kt() ?></a></h2>
        </div>
    <?php endforeach ?>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>