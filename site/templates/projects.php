<?= snippet('header') ?>

<main id="projects" class="grid-layout main">
    <ul class="scroll-wrapper">
        <?php foreach ($projects as $project) : ?> 
            <li class="grid-layout-title">
                <h2><a href="<?= $project->url() ?>"><?= $project->title()->kt() ?></a></h2>
            </li>
        <?php endforeach ?>
    </ul>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>