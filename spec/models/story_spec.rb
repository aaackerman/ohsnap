require 'rails_helper'

RSpec.describe Story, :type => :model do
  
  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_presence_of(:content) }
  it { is_expected.to validate_presence_of(:user_id) }

  it { is_expected.to belong_to(:user) }

  it { is_expected.to have_db_column(:title) }
  it { is_expected.to have_db_column(:content) }

end