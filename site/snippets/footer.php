    <?= snippet('nav') ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/TextPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <!-- <script src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"></script> -->
    <!-- <script>
        var cursor = new MouseFollower();
    </script> -->
    <?= js([
        'assets/js/script.js',
        // 'assets/js/animations.js',
        '@auto',
    ]) ?>
</body>
</html>