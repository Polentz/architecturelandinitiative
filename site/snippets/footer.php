    <footer class="footer">
        <?= snippet('nav') ?>
        <?= snippet('contact') ?>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Flip.min.js"></script>
    <?= js([
        'assets/js/script.js',
        // 'assets/js/animations.js',
        '@auto',
    ]) ?>
</body>
</html>