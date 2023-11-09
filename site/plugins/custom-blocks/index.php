<?php
Kirby::plugin('architecturelandinitiative/blocks', [
    'blueprints' => [
        'blocks/sectionblock' => __DIR__ . '/blueprints/blocks/sectionblock.yml',
        'blocks/accordion' => __DIR__ . '/blueprints/blocks/accordion.yml',
        // 'blocks/download' => __DIR__ . '/blueprints/blocks/download.yml',
        // 'blocks/link' => __DIR__ . '/blueprints/blocks/link.yml',
        // 'blocks/special' => __DIR__ . '/blueprints/blocks/special.yml',
      ],
      'snippets' => [
        'blocks/sectionblock' => __DIR__ . '/snippets/blocks/sectionblock.php',
        'blocks/accordion' => __DIR__ . '/snippets/blocks/accordion.php',
        // 'blocks/download' => __DIR__ . '/snippets/blocks/download.php',
        // 'blocks/link' => __DIR__ . '/snippets/blocks/link.php',
        // 'blocks/special' => __DIR__ . '/snippets/blocks/special.php',
      ],
]);