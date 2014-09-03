require 'rails_helper' 

RSpec.describe "Factory Girl" do
  FactoryGirl.factories.map(&:name).each do |factory_name|
    describe "#{factory_name} factory" do

      # Test each factory
      it "is valid" do
        factory = FactoryGirl.build(factory_name)
        if factory.respond_to?(:valid?)
          expect(factory).to be_valid
        end
      end
     end
    end
  end