# .config

Clone this repo into ~/.config/.repo

# Essential Softwares

```sh
# git
pacman -S git

# neovim
pacman -S neovim
git clone http://git

# tmux
pacman -S tmux

# oh-my-tmux
git clone https://github.com/gpakosz/.tmux
ln -s -f .tmux/.tmux.conf

# compilers
pacman -S base-devel

# basic
pacman -S zoxide
pacman -S exa
pacman -S ripgrep

# search
## fzf
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
## fd
pacman -S fd

# analytic
## gdu
pacman -S gdu
```
