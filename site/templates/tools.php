<?= snippet('header') ?>

<main class="main">
    <a class="button header-button" href="<?= $site->url() ?>"> 
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8.65085L31.5 18.2342V31.5H8.5V18.2342L20 8.65085Z" stroke="#1d1d1b"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#1d1d1b"/>
        </svg>
    </a>
    <section class="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis est quae iste. Aliquid reiciendis dolores perferendis quasi perspiciatis facilis assumenda possimus quisquam vel nesciunt in exercitationem, porro alias aliquam iste enim cupiditate adipisci consequuntur iusto saepe. Nam hic cumque amet aperiam corporis veniam tempora ratione suscipit, ipsam illo dicta. Voluptates dolorum sint recusandae enim et vitae fuga fugiat. Qui consequatur quod sapiente, ipsam ullam quidem suscipit temporibus cupiditate error? Eos sed sint iure nostrum veritatis ad cumque quisquam earum repellendus. Molestias ullam architecto eaque earum debitis facilis dolore vero laudantium laboriosam blanditiis? Assumenda eum voluptatibus esse minima culpa. Vitae.
    </section>

    <section class="gallery">
        <div class="gallery-grid">
            <?php foreach ($pages->files()->filterBy('tools', '*=', $page->title()) as $media) : ?>
                <?= snippet('gallery', ['media' => $media]) ?>
            <?php endforeach ?> 
        </div>
    </section>
</main>

<?= snippet('slider') ?>
<?= snippet('footer') ?>