class AddAllotmentToGames < ActiveRecord::Migration
  def change
    add_column :games, :allotment_before, :integer
  end
end
