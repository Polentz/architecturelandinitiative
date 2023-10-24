<?php

return [
    'debug'  => true,
    'languages' => true,
    'smartypants' => true,
    'panel' => [
        'css' => 'assets/css/panel.css'
    ],
    'routes' => [
        [
          'pattern' => 'https://polentz.github.io/architecturelandinitiative/',
          'action'  => function () {
            return page('home');
          }
        ],
      ]
];