<?php
Kirby::plugin('architecturelandinitiative/blocks', [
    'blueprints' => [
        'blocks/sectionblock' => __DIR__ . '/blueprints/blocks/sectionblock.yml',
        'blocks/accordion' => __DIR__ . '/blueprints/blocks/accordion.yml',
        'blocks/contactblock' => __DIR__ . '/blueprints/blocks/contactblock.yml',
        // 'blocks/contactblockitem' => __DIR__ . '/blueprints/blocks/contactblockitem.yml',
        // 'blocks/special' => __DIR__ . '/blueprints/blocks/special.yml',
      ],
      'snippets' => [
        'blocks/sectionblock' => __DIR__ . '/snippets/blocks/sectionblock.php',
        'blocks/accordion' => __DIR__ . '/snippets/blocks/accordion.php',
        'blocks/contactblock' => __DIR__ . '/snippets/blocks/contactblock.php',
        // 'blocks/contactblockitem' => __DIR__ . '/snippets/blocks/contactblockitem.php',
        // 'blocks/special' => __DIR__ . '/snippets/blocks/special.php',
      ],
]);