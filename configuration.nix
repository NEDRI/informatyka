# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];

  #flakes
  nix.settings.experimental-features = [
    "nix-command"
    "flakes"
  ];

  # Bootloader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  #dyski
  /*
  fileSystems."/mnt/penai128GB" = {
  device = "/dev/sda1";
  fsType = "ext4";
  options = [ # If you don't have this options attribute, it'll default to "defaults" 
    # boot options for fstab. Search up fstab mount options you can use
    "users" # Allows any user to mount and unmount
    "nofail" # Prevent system from failing if this drive doesn't mount
  ];
  }; */

  networking.hostName = "AiNixOSLp"; # Define your hostname.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Enable networking
  networking.networkmanager.enable = true;

  # Set your time zone.
  time.timeZone = "Europe/Warsaw";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";

  i18n.extraLocaleSettings = {
    LC_ADDRESS = "pl_PL.UTF-8";
    LC_IDENTIFICATION = "pl_PL.UTF-8";
    LC_MEASUREMENT = "pl_PL.UTF-8";
    LC_MONETARY = "pl_PL.UTF-8";
    LC_NAME = "pl_PL.UTF-8";
    LC_NUMERIC = "pl_PL.UTF-8";
    LC_PAPER = "pl_PL.UTF-8";
    LC_TELEPHONE = "pl_PL.UTF-8";
    LC_TIME = "pl_PL.UTF-8";
  };

  # Enable the X11 windowing system.
  services.xserver.enable = true;

  # Enable the GNOME Desktop Environment.
  services.xserver.displayManager.gdm.enable = true;
  services.xserver.desktopManager.gnome.enable = true;

  # Hyprland
  programs.hyprland = {
  enable = true;
  xwayland.enable = true;
  };
  
  # Configure keymap in X11
  services.xserver = {
    xkb.layout = "us";
    xkb.variant = "";
  };

  # Enable CUPS to print documents.
  services.printing.enable = true;

  # Enable sound with pipewire.
  hardware.pulseaudio.enable = false;
  security.rtkit.enable = true;
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    # If you want to use JACK applications, uncomment this
    #jack.enable = true;

    # use the example session manager (no others are packaged yet so this is enabled by default,
    # no need to redefine it in your config for now)
    #media-session.enable = true;
  };

  # Enable touchpad support (enabled default in most desktopManager).
  # services.xserver.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.ai = {
    isNormalUser = true;
    description = "ai";
    extraGroups = [ "networkmanager" "wheel" "openrazer" "user-with-access-to-virtualbox"];
    packages = with pkgs; [
    #  thunderbird
    ];
  };

  # Install firefox.
  programs.firefox.enable = true;

  # Allow unfree packages
  nixpkgs.config.allowUnfree = true;

  fonts.packages = with pkgs; [
  font-awesome
  font-awesome_5
  source-code-pro
  source-sans-pro
  noto-fonts
  noto-fonts-cjk
  noto-fonts-emoji
  liberation_ttf
  fira-code
  fira-code-symbols
  mplus-outline-fonts.githubRelease
  dina-font
  proggyfonts
  ];

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
  mc
  fastfetch
  neovim
  nano
  htop
  btop
  git
  nmap
  vscode
  #steam przez flatpack
  zsh
  lutris
  flatpak
  spotify
  #discord
  gnome.gnome-tweaks
  gnome.gpaste
  #gnome.gnome-remote-desktop
  tree
  lm_sensors
  tuxedo-rs
  nodejs
  php
  python3
  zip
  unzip
  chromium
  vesktop
  vencord
  waybar
  kitty
  dolphin
  wofi
  hyprpaper
  gtkhash
  #kate
  openrazer-daemon
  polychromatic
  mtr
  ventoy
  ];

  #moje

  services.flatpak.enable = true;
  
  #tuxedo
  hardware.tuxedo-rs = {
    enable = true;
    tailor-gui.enable = true;
  };
  hardware.tuxedo-keyboard.enable = true;
  boot.kernelParams = [
    "tuxedo_keyboard.mode=0"
    "tuxedo_keyboard.brightness=25"
    "tuxedo_keyboard.color_left=0x0000ff"
  ];
  
  #zsh
  users.defaultUserShell=pkgs.zsh;
  programs = {
  zsh = {
      enable = true;
      autosuggestions.enable = true;
      zsh-autoenv.enable = true;
      syntaxHighlighting.enable = true;
      #alias
      shellAliases = {
        ll = "ls -la";
        update = "sudo nix-channel --update";
        upgrade = "sudo nixos-rebuild switch --upgrade";
        switch = "sudo nixos-rebuild switch";
        c = "clear";
        e = "exit";
        fastfetch = "c && fastfetch";
        cgen = "sudo nix-collect-garbage --delete-older-than 2d";
        n = "sudo nvim";
      };
      ohMyZsh = {
        enable = true;
        theme = "fishy";
        plugins = [
          "git"
          "npm"
          "history"
          "node"
          "rust"
          "deno"
          "python"
        ];
      };
    };
  };
  
  #clipboard
  programs.gpaste.enable = true;

  #razer
  #hardware.openrazer.enable = true;

  #steam
  #https://nixos.wiki/wiki/Steam
  
  #neovim
  /*
  programs.neovim = {
  enable = true;
  defaultEditor = true;
  }; */
  
  #VirtualBox
  virtualisation.virtualbox.host.enable = true;
  virtualisation.virtualbox.host.enableExtensionPack = true;


  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  # programs.mtr.enable = true;
  # programs.gnupg.agent = {
  #   enable = true;
  #   enableSSHSupport = true;
  # };

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "24.05"; # Did you read the comment?

}
