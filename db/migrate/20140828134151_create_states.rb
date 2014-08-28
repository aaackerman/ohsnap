class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.string :state
      t.integer :benefits_2013
      t.integer :benefits_2014
      t.integer :households_2013
      t.integer :households_2014
      t.integer :participants_2013
      t.integer :participants_2014
    end
  end
end
