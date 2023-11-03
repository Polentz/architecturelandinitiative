<?php
Kirby::plugin('architecturelandinitiative/blocks', [
    'blueprints' => [
        'blocks/sectionblock' => __DIR__ . '/blueprints/blocks/sectionblock.yml',
        // 'blocks/buttons' => __DIR__ . '/blueprints/blocks/buttons.yml',
        // 'blocks/download' => __DIR__ . '/blueprints/blocks/download.yml',
        // 'blocks/link' => __DIR__ . '/blueprints/blocks/link.yml',
        // 'blocks/special' => __DIR__ . '/blueprints/blocks/special.yml',
      ],
      'snippets' => [
        'blocks/sectionblock' => __DIR__ . '/snippets/blocks/sectionblock.php',
        // 'blocks/buttons' => __DIR__ . '/snippets/blocks/buttons.php',
        // 'blocks/download' => __DIR__ . '/snippets/blocks/download.php',
        // 'blocks/link' => __DIR__ . '/snippets/blocks/link.php',
        // 'blocks/special' => __DIR__ . '/snippets/blocks/special.php',
      ],
]);