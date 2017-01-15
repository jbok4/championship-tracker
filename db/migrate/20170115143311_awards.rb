class Awards < ActiveRecord::Migration[5.0]
  def change
    create_table :awards do |t|
      t.string :title
      t.integer :year
      t.string :content
      t.integer :team_id
    end
  end
end
