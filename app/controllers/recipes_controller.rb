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
    puts "-----"
    puts params[:recipe]
    @recipe = Recipe.new(
        name: params[:recipe][:name],
        category: params[:recipe][:category],
        ingredients: params[:recipe][:ingredients],
        instructions: params[:recipe][:instructions]
    )
    begin
      if @recipe.save
        flash[:success] = "Recipe succesfully saved"
        render :index and return
      end
    rescue StandardError => e
      logger.error "Error in recipe creation: #{ e.message }"
    end

  end


end
