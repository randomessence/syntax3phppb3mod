**Hello World**

This is a phpbb 3 mod that uses [Syntax Highlighter 3](https://github.com/alexgorbatchev/SyntaxHighlighter)

Current Version : 1.1.8

phpbb.com version : [1.1.3](https://www.phpbb.com/customise/db/mod/syntax_highlighter_3_using_autoloader/sid_5e1d796a9d476069b6507f61b64c34a5)

![alt text](https://raw.github.com/randomessence/syntax3phppb3mod/master/contrib/images/example0.png "Example")

![alt text](https://raw.github.com/randomessence/syntax3phppb3mod/master/contrib/images/example.png "Example")

It has been extended a bit over the original 3.0.83 from the [website](http://alexgorbatchev.com/SyntaxHighlighter/) since it uses the files from the github repo as well as some select and applied fixes.

To summarise the mod. This is a phpbb3 3.0.11 compatible mod that makes 7 small edits when installed via automod or if done manually. 

Full Subsilver and sub silver based styles support.

EN_US langugae support.

**Notes:** 

Adding a custom bbcode is required to complete the installation of this mod.

**USAGE**

`[code2={SIMPLETEXT}]{TEXT}[/code2]`

**HTML Replace**

```
<b>{SIMPLETEXT} code</b>
<pre class="brush: {SIMPLETEXT}">{TEXT}</pre>
```

**HELPLINE**

```
[code2={required brush without brackets such as html}]some code[/code2] so it looks like [code2=html]<head></head>[/code2]
```

The mod does not install to non Default (EN) langauage packs. you will have to manually edit the `language/**/posting.php` of your default lanaguage pack and apply the edits.

The edit to the `styles/prosilver/template/posting_buttons.html` works with template inheritence styles. if you style does not inhrerit from Prosliver and does not have a `posting_buttons.html`
you will have to figure out which files you do need to edit.

**Manually applied fixes**

[xregexp 3 pre](https://github.com/slevithan/xregexp) using a snippet of javascript as detailed here [#127](https://github.com/alexgorbatchev/SyntaxHighlighter/issues/127#issuecomment-6405277)

Bash brush improvements [#75](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/75)

improved C Sharp bush [#111](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/111)

shAutoloader.js duplicate loading and html-script support [#139](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/139)

(Java multiline comment greedy Regexp) [#150](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/150)

fix stripCData('ab')=='' [#153](http://https://github.com/alexgorbatchev/SyntaxHighlighter/pull/153)

a = '"' was starting a multiline string, but it should not have [#112](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/112/files)

Modified keywords, strings, and value in Python brush [#155](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/155)

multiline comments for SQL [#156](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/156)

Add missing C++11 keywords [#158](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/158)

custom fix for 2 phpbb 3 issues. the replacement of <br> and unindents/tabs [see this post](https://www.phpbb.com/customise/db/mod/syntax_highlighter_3_using_autoloader/support/leading_tabs_in_lines_rendered_non_uniformly-t_101630)


Biferno Brush [#66](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/66)
dlan brush [#154](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/154)
haze brush [#151](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/151)
logtalk brush [#118](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/118)
lasso brush  [#124](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/124)

**Supported Languages(59):**

ACTIONSCRIPT
ADA
ASSEMBLER_ASM
ASSEMBLER_NASM
ASSEMBLER_MASM
APPLESCRIPT
AUTOHOTKEY

BASH
BIFERNO
BATCH

CSHARP
CPLUSPLUS
CLOJURE
CMD
COCOA
COFFEE_SCRIPT
COLDFUSION
CSS

D
DELPHI
DIFF

ERLANG

FSHARP

GROOVY

HAXE
HTML

JAVA
JAVAFX
JAVASCRIPT

LASSO
LATEX
LOGTALK
LSL
LUA

MATHEMATIC
MATLAB

OBJECTIVE_C

PASCAL
PERL
PHP
PLAIN_TEXT
POWERSHELL
PROCESSING
PYTHON
PYTHON3

ROUTEROS
RPG
ILE_RPG
RUBY

SAHI
SASS
SCALA
SHELL
SQL

VISUAL_BASIC

YAML

XHTML
XML
XSLT
