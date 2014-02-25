<?php

echo KService::get('mod://site/cookie.html')
    ->module($module)
    ->attribs($attribs)
    ->display();