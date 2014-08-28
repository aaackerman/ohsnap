class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :income
      t.integer :household_size
      t.integer :allotment
      t.references :state
      t.references :user
    end
  end
end
