class AddUpvoteToTeam < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :upvote, :integer, :default => 0
  end
end
