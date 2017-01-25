class AddUpvoteToTeam < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :upvote, :integer
  end
end
