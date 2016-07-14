# Model: Recipe
id:               integer
name:             string
ingredients:      text
instructions:     text
category:         string
created_at:       datetime
updated_at:       datetime

class Recipe < ActiveRecord::Base
  
end
