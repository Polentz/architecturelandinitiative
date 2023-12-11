<?php

// return function ($site) {
//     return $site->find('tools')->children();
// };

return function ($pages) {
    return $pages->template('tools')->children();
};
