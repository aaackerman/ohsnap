class AddWeeklytoGames < ActiveRecord::Migration
  def change
    add_column :games, :weekly_allotment, :integer
  end
end
