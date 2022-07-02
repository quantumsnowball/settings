# .config/.repo

Quickly setup a new development linux machine. Most configs are stored in `.repo`, but some more advanced configs use their own repos.

# Install essentials

```sh
# Arch/Manjaro
pacman -S \
    git zsh neovim tmux base-devel openssh \
    bat exa zoxide lazygit ripgrep fd gdu

# Debian/Ubuntu
##openssh -- already bundled
##fd -- binary is fdfind
sudo add-apt-repository ppa:neovim-ppa/unstable
sudo apt install \
    git zsh neovim tmux build-essential \
    batcat exa zoxide ripgrep gdu fd-find
wget https://github.com/jesseduffield/lazygit/releases/download/v0.34/lazygit_0.34_Linux_x86_64.tar.gz
tar xzfv <download.tar.gz>
sudo install <downloaded.tar.gz> /usr/local/bin
alias bat=batcat
alias fd=fdfind
```

# Install specials

```sh
# fzf
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install

# pyenv
curl https://pyenv.run | bash
```

# Clone user configs

Clone `zshrc`, `nvim`, `tmux`, `.repo` into ~/.config.
```sh
mkdir -p ~/.config/ && cd ~/.config && \
git clone https://github.com/quantumsnowball/zshrc && \
git clone https://github.com/quantumsnowball/nvim && \
git clone https://github.com/quantumsnowball/tmux && \
git clone https://github.com/quantumsnowball/.repo
```

Run any installation scripts inside them.

```sh
cd ~/.config/.repo
./install <name>
```

# Install optionals

```sh
# grip (preview markdown)
pip install grip

# docker
pacman -S docker
#run without sudo
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker 

```
