class PagesController < ApplicationController

  def home
    @message = "This is a work in progress. Come back later!"
    puts @message
  end
end