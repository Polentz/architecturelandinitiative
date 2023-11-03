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
                'sectiontitle',
                'sectiontext',
                ]
            ],
        ],
    ],
];