**Hello World**

![alt text](https://raw.github.com/randomessence/syntax3phppb3mod/master/contrib/example.png "Example")

This is a phpbb 3 mod that uses [Syntax Highlighter 3](https://github.com/alexgorbatchev/SyntaxHighlighter)

It has been extended a bit over the original 3.0.83 from the [website](http://alexgorbatchev.com/SyntaxHighlighter/) since it uses the files from the github repo as well as some select and applied fixes.

To summarise the mod. This is a phpbb3 3.0.11 compatible mod that makes 4 small edits when installed via automod or if done manually. 

**Edit 1:** Syntax Highlighter 3 shCore.js, themes shTheme****.css & shCore****.css and xregexp.js (3.0 Pre) are loaded into the overall_header.html of Prosilver and then any style the mod is applied to via automod.

**Edit 2:** a html file is loaded into the overall footer of Prosilver that loads Autoloader.js and the 50 brushes that come with the mod. All brushes are called using autoloader when needed rather than always embedded into the page source.

**Edit 3:** language/en/posting.php is edited to ADD language references for the drop down menu.

**Edit 4:** styles/prosilver/template/posting_buttons.html is edited to add a custom drop down menu to the post editor that will automatically insert a pre-formatted bbcode with the chosen syntax into the user's post. 
The cursor will automatically be in-between the code blocks ready to paste your code. It also works highlight any code you want prettified and then select the relevant syntax from the drop down menu.

**Notes:** 

The mod does not install to non Default (EN) langauage packs. you will have to manually edit the language/**/posting.php of your default lanaguage pack and apply the edits.

The edit to the styles/prosilver/template/posting_buttons.html works with template inheritence styles. if you style does not inhrerit from Prosliver and does not have a posting_buttons.html 
you will have to figure out which files you do need to edit.

**Manually applied fixes**

xregexp 3 pre using a snippet of javascript as detailed here [#127](https://github.com/alexgorbatchev/SyntaxHighlighter/issues/127#issuecomment-6405277)

Bash brush improvements [#75](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/75)

improved C Sharp bush [#111](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/111)

shAutoloader.js duplicate loading and html-script support [#139](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/139)

(Java multiline comment greedy Regexp) [#150](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/150)

fix stripCData('ab')=='' [#153](http://https://github.com/alexgorbatchev/SyntaxHighlighter/pull/153)

Biferno Brush [#66](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/66)
dlan brush [#154](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/154)
haze brush [#151](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/151)
logtalk brush [#118](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/118)
lasso brush  [#124](https://github.com/alexgorbatchev/SyntaxHighlighter/pull/124)
