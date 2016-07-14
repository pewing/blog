class RecipesController < ApplicationController

  def index

  end

  def new
    @recipe = Recipe.new
  end

  def edit
    @recipe = Recipe.find_by_name(params[:name])
  end

  def create
    @recipe = Recipe.new(
        name: params[:recipe][:name],
        category: params[:recipe][:category],
        ingredients: params[:recipe][:ingredients],
        instructions: params[:recipe][:instructions]
    )
    begin
      if @recipe.save
        flash[:success] = "Recipe succesfully saved"
        redirect_to recipes_path and return
      end
    rescue StandardError => e
      puts "Error creating new recipe: #{ e.message }"
    end

    render json: { errors: "Error creating new recipe.", status: 'error' }, status: 422
  end
end

