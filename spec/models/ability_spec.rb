require 'rails_helper'
require 'cancan/matchers'

RSpec.describe Ability, :type => :model do

  describe User, 'abilities' do 
    subject(:ability) {Ability.new(user)}
    
    describe 'User create' do
      let(:user){FactoryGirl.create(:confirmed_user)}
      it { should be_able_to(:create, Story)}
    end

    describe 'User update' do
      let(:user){FactoryGirl.create(:confirmed_user)}
      it { should be_able_to(:update, Story)}
    end

    describe 'User destroy' do
      let(:user){FactoryGirl.create(:confirmed_user)}
      it { should be_able_to(:destroy, Story)}
    end
  end
end