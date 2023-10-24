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
          'pattern' => 'polentz.github.io/architecturelandinitiative/',
          'action'  => function () {
            return page('home');
          }
        ],
      ]
];