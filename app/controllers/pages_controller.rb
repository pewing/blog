class PagesController < ApplicationController

  def home

  end

  def about

  end

  def work

  end

  def contact
    @is_contact = true
  end

end