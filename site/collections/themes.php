<?php

// return function ($site) {
//     return $site->find('themes')->children();
// };

return function ($pages) {
    return $pages->template('themes')->children();
};