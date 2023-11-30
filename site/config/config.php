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
                'contactblock',
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
            if ($page = site()->find(['projects', 'tools', 'themes'])->random()) {
                return page($page);
            }
          }
        ],
    ],
];