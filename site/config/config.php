<?php

return [
    'debug'  => true,
    'languages' => true,
    'smartypants' => true,
    'panel' => [
        'css' => 'assets/css/panel.css'
    ],
    'blocks' => [
        'fieldsets' => [
          'custom' => [
            'label' => 'Select a block:',
            'type' => 'group',
            'fieldsets' => [
                'sectionblock',
                'accordion',
                ]
            ],
        ],
    ],
    'routes' => [
        [
          'pattern' => '/',
          'language' => '*',
          'action'  => function ($language) {
            if ($page = site()->find(['projects', 'tools'])->random()) {
                return page($page);
            }
          }
        ],
    ],
];