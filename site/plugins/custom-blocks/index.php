<?php
Kirby::plugin('architecturelandinitiative/blocks', [
    'blueprints' => [
        'blocks/sectionblock' => __DIR__ . '/blueprints/blocks/sectionblock.yml',
        'blocks/sectiontitle' => __DIR__ . '/blueprints/blocks/sectiontitle.yml',
        'blocks/sectiontext' => __DIR__ . '/blueprints/blocks/sectiontext.yml',
        // 'blocks/subtext' => __DIR__ . '/blueprints/blocks/subtext.yml',
        // 'blocks/buttons' => __DIR__ . '/blueprints/blocks/buttons.yml',
        // 'blocks/download' => __DIR__ . '/blueprints/blocks/download.yml',
        // 'blocks/link' => __DIR__ . '/blueprints/blocks/link.yml',
        // 'blocks/special' => __DIR__ . '/blueprints/blocks/special.yml',
      ],
      'snippets' => [
        'blocks/sectionblock' => __DIR__ . '/snippets/blocks/sectionblock.php',
        'blocks/sectiontitle' => __DIR__ . '/snippets/blocks/sectiontitle.php',
        'blocks/sectiontext' => __DIR__ . '/snippets/blocks/sectiontext.php',
        // 'blocks/subtext' => __DIR__ . '/snippets/blocks/subtext.php',
        // 'blocks/buttons' => __DIR__ . '/snippets/blocks/buttons.php',
        // 'blocks/download' => __DIR__ . '/snippets/blocks/download.php',
        // 'blocks/link' => __DIR__ . '/snippets/blocks/link.php',
        // 'blocks/special' => __DIR__ . '/snippets/blocks/special.php',
      ],
]);