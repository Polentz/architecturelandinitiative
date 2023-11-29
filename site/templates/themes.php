<?= snippet('header') ?>

<main class="main">
    <section class="grid-layout">
        <!-- <?php foreach ($themes as $theme) : ?> 
            <div class="grid-layout-item marquee">
                <h2><a class="item-title" data-name="<?= $theme->title() ?>" href="<?= $theme->url() ?>"></a></h2>
            </div>
        <?php endforeach ?> -->
        <div class="grid-layout-item marquee">
            <h2><a class="item-title" data-name="Resources / Reports / Publications" href=""></a></h2>
        </div>
        <div class="grid-layout-item marquee">
            <h2><a class="item-title" data-name="Teaching / Education" href=""></a></h2>
        </div>
        <div class="grid-layout-item marquee">
            <h2><a class="item-title" data-name="Grants / Fellowships / Residencies" href=""></a></h2>
        </div>
        <div class="grid-layout-item marquee">
            <h2><a class="item-title" data-name="Talks / Lectures / Readings" href=""></a></h2>
        </div>
    </section>
    <section class="page-intro"> 
        <div class="text-label">
            <p><?= $page->title() ?></p>
        </div>
        <div class="text-intro">
            <p>The platform/practice is a space for learning by doing, where we conduct experiments to shape new initiatives and help develop new models for architectural practice. The platform/practice allow us to define relevant areas of focus, reveal opportunities for action, test informed hypotheses, and share original learning. In doing so, we aim to grow new networks for collaboration and scale the resonance of our work.</p>
        </div>
    </section>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>