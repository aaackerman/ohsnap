require 'rails_helper'

RSpec.describe Food, :type => :model do
  
  it { is_expected.to have_db_column(:item) }
  it { is_expected.to have_db_column(:price) }

end