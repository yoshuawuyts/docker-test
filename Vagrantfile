require 'fileutils'

WERCKER_PATH = Dir.pwd
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "boot2docker"
  config.vm.box_url = "https://vagrantcloud.com/mitchellh/boxes/boot2docker/versions/1.2.0/providers/virtualbox.box"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder WERCKER_PATH, WERCKER_PATH, id: "wercker", :nfs => true, :mount_options => ['nolock,vers=3,udp']
end
