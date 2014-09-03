require 'rails_helper'

RSpec.describe State, :type => :model do
  
  it { is_expected.to have_db_column(:state) }
  it { is_expected.to have_db_column(:benefits_2013) }
  it { is_expected.to have_db_column(:benefits_2014) }
  it { is_expected.to have_db_column(:households_2013) }
  it { is_expected.to have_db_column(:households_2014) }
  it { is_expected.to have_db_column(:participants_2013) }
  it { is_expected.to have_db_column(:participants_2014) }

end
