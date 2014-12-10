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

```json
{
    "name": "cta/cookie-law",
    "type": "vcs",
    "url": "https://github.com/cta-int/cookie-law.git"
}
```

The require section should contain the following line:

```json
    "cta/cookie-law": "1.0.*",
```

Afterward, just run `composer update` from the root of your Joomla project.

### jsymlinker

Another option, currently only available for Moyo developers, is by using the jsymlink script from the [Moyo Git
Tools](https://github.com/derjoachim/moyo-git-tools).

## Configuration

After installation, you possible have to discover and install `mod_cookie`. After doing so, you need to add the new module.
The module type is 'Mod Cookie'. The configurable items are the coookie text, language, button text for dismissal.

The tab 'Google Analytics' contains all settings for GA, whereas Chartbeat can be configured in the Chartbeat tab.