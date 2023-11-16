<?php

return function ($site) {
    return $site->find('tools')->children();
};