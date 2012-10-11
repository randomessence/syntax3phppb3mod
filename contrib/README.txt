Syntax Highlighter 3 Phpbb3 mod

This mod works using using phpbb 3.0.11 using automod.

This modification is made using using syntax highlighter three and consists of some very simple edits in order to allow you to highlight code meeting certain syntax requirements.

There are 40 or so brushes covering 60 or so syntax making this a very versatile code highlighter PHP BB platform.

In order to start using this mod you need to install it via auto mod. Once it is installed next requirement is that you enter a BB code file the ACP. You do not have to show this BB code on the posting page but it is an absolute requirement that you create the BB code. The final requirement of this mod is that you apply it to any style that is not the default pro Silver style. In order to do this you click on the mods details on the auto mod page and scroll to the bottom.

Assuming that there were no problems installing using auto mod and that you have added the BB code you are now ready to start highlighting syntax.

Inside this contribution folder, you will find several useful files of the general updating and core editing.

1: The autoloader brushes text file contains a list of all the included autoloader brushes and aliases in the HTML file that is loaded your selected style. This inclusion is to show how the brushes are called and how the aliases are represented for each brush.
The one crucial thing to know is that the last line does not have comma at the end, aside from that every new addition must be closed with comma at the end of the line.

2: The install_mod(update 1.0.4 to 1.1.4) is ready to be used to update version 1.0.4 to 1.1.4 . Also included is a text file detialing th erequired edits to do this manually.

3: use inlcuded minifed core scripts : in your overall_header.html find this

<!-- Syntax Highlighter 3 -->
<script type="text/javascript" src="{ROOT_PATH}js/syntaxhighlighter3/js/XRegExp.js"></script>
<script type="text/javascript" src="{ROOT_PATH}js/syntaxhighlighter3/js/shCore.js"></script>
<link href="{ROOT_PATH}js/syntaxhighlighter3/styles/shCoreEclipse.css" rel="stylesheet" type="text/css" />
<link href="{ROOT_PATH}js/syntaxhighlighter3/styles/shThemeEclipse.css" rel="stylesheet" type="text/css" />

and add -min to the name of the 2 .js lines

<script type="text/javascript" src="{ROOT_PATH}js/syntaxhighlighter3/js/XRegExp-min.js"></script>
<script type="text/javascript" src="{ROOT_PATH}js/syntaxhighlighter3/js/shCore-min.js"></script>

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






