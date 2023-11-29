<?php

return function ($kirby) {
    if ($kirby->language()->code() == 'en') {
        $lang = 'en';
        $langCode = 'en_US';
    } else if ($kirby->language()->code() == 'fr') {
        $lang = 'fr';
        $langCode = 'fr_FR';
    } else if ($kirby->language()->code() == 'de') {
        $lang = 'de';
        $langCode = 'de_DE';
    }

    $languageStringEn = 'En';
    $languageStringFr = 'Fr';
    $languageStringDe = 'De';
    $hrefEn = '/';
    $hrefFr = 'fr';
    $hrefDe = 'de';

    $projects = $kirby->collection('projects');
    $tools = $kirby->collection('tools'); 
    $themes = $kirby->collection('themes'); 
    $allmedia = $kirby->collection('allmedia'); 

    // return compact('lang', 'langCode', 'projects' , 'tools', 'allmedia');

    return [
        'lang' => $lang,
        'langCode' => $langCode,
        'languageStringEn' => $languageStringEn,
        'languageStringFr' => $languageStringFr,
        'languageStringDe' => $languageStringDe,
        'hrefEn' => $hrefEn,
        'hrefFr' => $hrefFr,
        'hrefDe' => $hrefDe,
        'projects' => $projects,
        'tools' => $tools,
        'themes' => $themes,
        'allmedia' => $allmedia,
    ];
};