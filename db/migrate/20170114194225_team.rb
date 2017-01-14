class Team < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :logo
      t.string :sport
      t.string :location
      t.string :founded
    end
  end
end
