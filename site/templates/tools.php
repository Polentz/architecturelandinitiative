<?= snippet('header') ?>

<main class="main">
<section class="grid-layout horizontal">
        <div class="pin-wrap">
            <div class="animation-wrap to-right">
                <?php foreach ($tools as $tool) : ?>
                    <div class="grid-layout-item">
                        <h2><a class="item-title" data-name="<?= $tool->title() ?>" href="<?= $tool->url() ?>"></a></h2>
                    </div>
                <?php endforeach ?>
                <div class="grid-layout-item">
                    <h2><a class="item-title" data-name="Transcalar drawing" href=""></a></h2>
                </div>
                <div class="grid-layout-item">
                    <h2><a class="item-title" data-name="Meta-theme" href=""></a></h2>
                </div>
            </div>
        </div>
    </section>
    <section class="page-intro"> 
        <div class="text-intro">
            <p>In recent years, we've developed our own 'toolshed' through our first projects in Switzerland and Hong Kong. The various tools and formats we've developed are all interfaces that enable us to work with and bring into dialogue different communities, spatial practices, situated social and ecological issues, and the historical dynamics of places in order to read the violence of the spatial dynamics at work and ask better questions. With our work, we aim to strengthen the power to act and inhabit of the different actors contributing to these processes by weaving a collective and simultaneous transformation of the spatial, the legal and the imaginary starting with new shared gestures and attentions.</p>
        </div>
    </section>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>
