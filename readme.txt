=== Taiwan Address Selector Extension for Contact Form 7 ===
Contributors: no249a002
Donate link: https://buymeacoff.ee/hycim
Tags: wpcf7, contact, form, taiwan, address, multilingual
Requires at least: 5.2
Tested up to: 6.3
Requires PHP: 7.2
Stable tag: 1.1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

An extension that helps you make a new tag for Contact Form 7 to add Taiwan address.

This plugin is based on the wonderful work of Denny Kuo on [the GitHub](https://dennykuo.github.io/tw-city-selector/#/).

== Installation ==

1. Upload the entire `wpcf7-twaddress` folder to the `/wp-content/plugins/` directory.
1. Activate the plugin through the **Plugins** screen (**Plugins > Installed Plugins**).

You will find **address** button when you edit your contact forms via Contact Form 7.

== Screenshots ==

1. Click **address** button to add a new address tag.
2. The tag will be put into the contact form automatically.
3. The new fields will be displayed in the form.
4. Use **Location Range** to limit the options of the dropdown menu.
5. Use **Location Excluded** to exclude the options of the dropdown menu.

== Changelog ==

= 1.1.1 =
* Fixed: The error that loads address-tag-generator.js when it's not in CF7 page.

= 1.1.0 =
* Added: The support to exclude/limit the districts.
* Added: The support to hide districts and streets.
* Enhanced: Removed unused variables.

= 1.0.0 =
* Added: Added tag generators on Contact Form 7 UI.
* Added: Added text domain supports.
* Added: Warning message in admin when Contact Form 7 is not activated.
* Fixed: Revised tcs-init.js to fit the coding standard.
* Fixed: Used class selector rather than id selector for multiple-tag situations.