# Model: Recipe
# id:               integer
# name:             string
# ingredients:      text
# instructions:     text
# category:         string
# created_at:       datetime
# updated_at:       datetime

class Recipe < ActiveRecord::Base

  validates :name, presence: true,
            uniqueness: true
  validates :ingredients, presence: true
  validates :instructions, presence: true
  
end
