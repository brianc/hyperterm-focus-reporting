# hyperterm-focus-reporting

This tiny hyperterm plugin to add focus-gained and focus-lost reporting to hyperterm to enable focus reporting to vim for autosave on blur.

## why?

This is mostly to support my own workflow which is terminal -> tmux -> vim.  I use [vitality](https://github.com/sjl/vitality.vim) with vim to handle most of this work and work "out of the box" with iterm2.  I want the same functionality with hyperterm because iterm2 doesn't work on linux and hyperterm is nifty!

## install

```
cd ~/.hyperterm_plugins
npm i -S hyperterm-focus-reporting
```

Then add the plugin to your plugins section in `~/.hyperterm.js`

Add the following line to your `.vimrc` file:

```
let g:vitality_always_assume_iterm = 1
```

That's all there is to it.

## more info

For a fantastic in-depth write up you should read [this](https://github.com/sjl/vitality.vim/blob/master/doc/vitality.txt).

## license

Copyright (c) 2016 Brian M. Carlson


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
