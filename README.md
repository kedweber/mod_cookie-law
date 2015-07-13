# Cookie-law

## Introduction

There is a cookie law in the EU that states that the site visitor needs to be warned that cookies are used. The idea is
that the end user will want to know what is being tracked etc.

This package contains a standard implementation of this policy. Upon first opening the website, the user is presented
with a configurable message and a button to dismiss the message. When the end user has done so, a cookie is set.

A notable difference with similar implementations is that [Chartbeat](https://chartbeat.com/) and [Google Analytics]
(http://www.google.com/analytics/) have been preconfigured. All that the content manager needs to do, is enter ID if
applicable. When the site visitor has dismissed the warning, the analytics services do their jobs.

## Requirements

* Joomla 2.5 or 3.X
* Koowa 0.9 or 1.0 (as yet, Koowa 2 is not supported)
* PHP 5.3.X or better
* Composer

## Installation

Installation is done through composer. In your `composer.json` file, you should add the following lines to the repositories
section:

from this specific repository;

```json
{
    "name": "moyo/cookie-law",
    "type": "vcs",
    "url": "https://github.com/kedweber/mod_cookie-law.git"
}
```

or from the company that sponsered the endeavours;

```json
{
    "name": "moyo/mod_cookie-law",
    "type": "vcs",
    "url": "https://github.com/moyoweb/mod_cookie-law.git"
}
```

The require section should contain the following line:

```json
    "moyo/mod_cookie-law": "1.0.*",
```

Afterwards, one just needs to run the command `composer update` from the root of your Joomla project. This will 
effectively create a `composer.lock` file which will contain the collected dependencies and the hash codes for 
each latest release \(depending on the require section's format\) for each particular repo. Should installations 
problems occur due to a bad ordering of the dependencies, one may need to go into the lock file and manualy change 
the order of the components. Running `composer update` again will again cause a reordering of the lock file, beware of 
this factor when running an update. Thereafter, you can run the command `composer install`. 

If you have not setup an alias to use the command composer, then you will need to replace the word composer in the previous commands with the 
commands with `php composer.phar` followed by the desired action \(eg. update or install\).

### jsymlinker

Another option is to run the [jsymlink script](https://github.com/derjoachim/moyo-git-tools) in the root folder, available via the original Moyo developer, Joachim van de Haterd's repository, under 
the [Moyo Git Tools](https://github.com/derjoachim/moyo-git-tools).

#### License jsymlinker

The joomlatools/installer plugin is free and open-source software licensed under the [GPLv3 license](https://github.com/derjoachim/joomla-composer/blob/develop/gplv3-license).

## Configuration

After installation, you possible have to discover and install `mod_cookie`. After doing so, you need to add the new module.
The module type is 'Mod Cookie'. The configurable items are the coookie text, language, button text for dismissal.

The tab 'Google Analytics' contains all settings for GA, whereas Chartbeat can be configured in the Chartbeat tab.
