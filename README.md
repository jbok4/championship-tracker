#CHAMPIONSHIP TRACKER

To run project, download the repo from git

in terminal, type:
**bundle install**

**rake bower:install**
to install bootstrap, angular-ui-router, and a few other gems necessary for it to run properly.

then type
**rake db:migrate** 
to get the database up and running

and finally 

**rails s**
to start the localhost server. 
Then head over to 
**localhost:3000** 
in your browser to begin interacting with the app!

This app uses 'rails', '~> 5.0.1' and angular 

Championship Tracker is like a wikipedia version (where anyone can update and add information) of Sports Teams Awards Tracking. You can add your favorite team, and / or add their latest (or an old) award that they won, plus a description about it. 

Additional Details that have been added are
UpVoting of Teams! You can now vote for your favorite team and watch as your team moves up to the top of the list. 

MySportsFeeds.com API Pull Requests for daily game schedules, as well as final standings (for leagues currently in the off-season).

Help get the information out into the world, about your favorite pastime and your favorite teams' achievements!