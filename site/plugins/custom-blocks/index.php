<?php
Kirby::plugin('architecturelandinitiative/blocks', [
    'blueprints' => [
        'blocks/sectionblock' => __DIR__ . '/blueprints/blocks/sectionblock.yml',
        'blocks/contactblock' => __DIR__ . '/blueprints/blocks/contactblock.yml',
        'blocks/timelineblock' => __DIR__ . '/blueprints/blocks/timelineblock.yml',
        'blocks/platformblocklist' => __DIR__ . '/blueprints/blocks/platformblocklist.yml',
        'blocks/platformblockcolumn' => __DIR__ . '/blueprints/blocks/platformblockcolumn.yml',
      ],
      'snippets' => [
        'blocks/sectionblock' => __DIR__ . '/snippets/blocks/sectionblock.php',
        'blocks/contactblock' => __DIR__ . '/snippets/blocks/contactblock.php',
        'blocks/timelineblock' => __DIR__ . '/snippets/blocks/timelineblock.php',
        'blocks/platformblocklist' => __DIR__ . '/snippets/blocks/platformblocklist.php',
        'blocks/platformblockcolumn' => __DIR__ . '/snippets/blocks/platformblockcolumn.php',
      ],
]);