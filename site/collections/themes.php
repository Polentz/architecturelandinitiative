<?php

return function ($site) {
    return $site->find('themes')->children();
};