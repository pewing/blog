class PagesController < ApplicationController

  def home
    @message = "This is a work in progress. Come back later!"
    puts @message
  end

  def about
    @message = "You are now on 'About Me'"

  end

  def work

  end

end