json.data do
  json.array!(@recipes) do |recipe|
    json.array! [
      recipe.name,
      recipe.category,
      (link_to '', edit_recipe_path(recipe), class: 'glyphicon glyphicon-pencil')
    ]
  end
end