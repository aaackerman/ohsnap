require 'rails_helper'
  
RSpec.describe Game, :type => :model do
  
  it { is_expected.to belong_to(:user) }
  it { is_expected.to have_db_column(:state_id) }  
  
end
