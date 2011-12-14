default_run_options[:pty] = true

set :application, "onetwoandthree"
set :repository,  "git@github.com:jeremyby/onetwoandthree.git"
set :branch, "master"
set :deploy_via, :remote_cache

set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set :deploy_to, "/var/www"

#set :scm_username, "jeremyby"
#set :scm_passphrase, "Jackyby-1"

#role :web, "184.106.169.25"                          # Your HTTP server, Apache/etc
#role :app, "184.106.169.25"                          # This may be the same as your `Web` server
#role :db,  "184.106.169.25", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

server "onetwoandthree.com", :app, :web, :db, :primary => true

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end