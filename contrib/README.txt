Updates Included.

All core updates are applied regardless of version. meaning the 1.1.3 shCore.js upgrade has the same shCore.js as 1.1.6 when this mod is used to update. This will not break functionality of the mod. The difference is in the phpbb3 edits. 

the 1.0.4 to 1.1.3 will apply the exact same edits as the version that was on phpbb.com to allow for easier updating to 1.1.6 . If you upgraded to 1.1.3 using this mod (1.1.6 version) and autoloader then manually did the 1.1.3 to 1.1.6 phpbb3 edits you would have the full 1.1.6 mod.

1.0.4 to 1.1.3 

1.0.4 to 1.1.4

1.0.4 to 1.1.6

1.0.4 to 1.1.7

1.0.4 to 1.1.8

1.1.3 to 1.1.6

1.1.3 to 1.1.7

1.1.3 to 1.1.8

1.1.4 to 1.1.6

1.1.4 to 1.1.7

1.1.4 to 1.1.8

1.1.6 to 1.1.7

1.1.6 to 1.1.8

----------------------------------------------------------------------------------------------------------------------------------------------

Syntax Highlighter config:

There are some configuration options available to the user. As of 1.1.6 these all take place in the shCore.js instead of on a per style basis.

to change these options you must open the js/syntaxhighlighter3/js/shCore.js with a text editor and look for these lines between line 17 through to line 64.
Please respect the /** DO NOT CHANGE */ comments.

Configuraton Options Start here:

/** Additional CSS class names to be added to highlighter elements. */
'class-name' : '',

/** First line number. */
'first-line' : 1,

/**
* Pads line numbers. Possible values are:
*
*   false - don't pad line numbers.
*   true  - automaticaly pad numbers with minimum required number of leading zeroes.
*   [int] - length up to which pad line numbers.
*/
'pad-line-numbers' : false,

/** Lines to highlight. */
'highlight' : null,

/** Title to be displayed above the code block. */
'title' : null,

/** Enables or disables smart tabs. */
'smart-tabs' : true,

/** Gets or sets tab size. */
'tab-size' : 4,
		
/** Enables or disables gutter. */
'gutter' : true,
		
/** Enables or disables toolbar. */
'toolbar' : true,
		
/** Enables quick code copy and paste from double click. */
'quick-code' : true,

/** Forces code view to be collapsed. */
'collapse' : false,
		
/** Enables or disables automatic links. */
'auto-links' : true,
		
/** Gets or sets light mode. Equavalent to turning off gutter and toolbar. */
'light' : false,

/** DO NOT CHANGE */
'unindent' : true,  
		
'html-script' : false
		
Configuration Options End here.

-------------------------------

Languages:

find them ( if avialable ) in the contrib/languages/ folder. use the install.xml for you language and replace the one that comes with the mod.

----------------------------------------------------------------------------------------------------------------------------------------------

once the mod is installed you need to add a new bbcode

!!! BUT you do NOT have to display it on the posting page since there will be a drop down menu. !!!

USAGE

[code2={SIMPLETEXT}]{TEXT}[/code2]

HTML Replace

<b>{SIMPLETEXT} code</b>
<pre class="brush: {SIMPLETEXT}">{TEXT}</pre>

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