Updates Included.

1.0.4 to 1.1.3  updates the offical validation mods

1.0.4 to 1.1.4

1.1.3 to 1.1.4

Also included is a text file detialing the required edits to do this manually.


Languages:

find them ( if avialable ) in the contrib/languages/ folder. use the install.xml for you language and replace the one that comes with the mod.

--------------------------------------------------------------------------------------------------------

once the mod is installed you need to add a new bbcode

!!! BUT you do NOT have to display it on the posting page since there will be a drop down menu. !!!

USAGE

[code2={SIMPLETEXT}]{TEXT}[/code2]

HTML Replace

<b>{SIMPLETEXT} code</b>
<pre class="brush: {SIMPLETEXT}">
{TEXT}
</pre>

HELPLINE

[code2={required brush without brackets such as html}]some code[/code2] so it looks like [code2=html]<head></head>[/code2]

USE THE DROP DOWN MENU 

or if you want to use the bbcode 

you need to specify a language for each calling of the bbcode by doing this [code2=html]some html code goes here[/code2] or [code2=php]some php code goes here [/code2]

so when you call the bbcode you will get this [code2=][/code2]  what you do is put your codes between the tags then tell it what type of code is there by doing this [code2=html]some code[/code2]

The Brushes are dynamically loaded according to what is called through the bbcodes, meaning the xml,html brush is only loaded if you someone loads a page that is using the [code2=html][/code2]  bbcode 

Please see the contrib/syntax.txt for a detailed list of supported languages and usable aliases

please visit the FAQ for this mod for other info and tweaks

http://www.phpbb.com/customise/db/mod/syntax_highlighter_3_using_autoloader/faq/

all files included use the MIT / GPL v2 license