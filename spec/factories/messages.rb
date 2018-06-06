require 'faker'
require 'Set'

FactoryBot.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/20170906_honda_getty-560x373.jpgo")
    user
    group
  end
end
