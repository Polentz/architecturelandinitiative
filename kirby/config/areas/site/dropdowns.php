<?php


$files = require __DIR__ . '/../files/dropdowns.php';

return [
	'page' => [
		'pattern' => 'pages/(:any)',
		'options' => function (string $path) {
			return Find::page($path)->panel()->dropdown();
		}
	],
	'page.file' => [
		'pattern' => '(pages/.*?)/files/(:any)',
		'options' => $files['file']
	],
	'site.file' => [
		'pattern' => '(site)/files/(:any)',
		'options' => $files['file']
	]
];
