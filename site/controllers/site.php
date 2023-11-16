<?php

return function ($kirby) {
    if ($kirby->language()->code() == 'en') {
        $lang = 'en';
        $langCode = 'en_US';
        // $hrefEn = '/';
        // $languageStringEn = 'En';
        // $hrefFr = 'fr';
        // $languageStringFr = 'Fr';
        // $hrefDe = 'de';
        // $languageStringDe = 'De';
    } else if ($kirby->language()->code() == 'fr') {
        $lang = 'fr';
        $langCode = 'fr_FR';
        // $hrefEn = '/';
        // $languageStringEn = 'En';
        // $hrefFr = 'fr';
        // $languageStringFr = 'Fr';
        // $hrefDe = 'de';
        // $languageStringDe = 'De';
    } else if ($kirby->language()->code() == 'de') {
        $lang = 'de';
        $langCode = 'de_DE';
        // $hrefEn = '/';
        // $languageStringEn = 'En';
        // $hrefFr = 'fr';
        // $languageStringFr = 'Fr';
        // $hrefDe = 'de';
        // $languageStringDe = 'De';
    }

    $languageStringEn = 'En';
    $languageStringFr = 'Fr';
    $languageStringDe = 'De';
    $hrefEn = '/';
    $hrefFr = 'fr';
    $hrefDe = 'de';

    $projects = $kirby->collection('projects');
    $tools = $kirby->collection('tools'); 
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
        'allmedia' => $allmedia,
    ];
};